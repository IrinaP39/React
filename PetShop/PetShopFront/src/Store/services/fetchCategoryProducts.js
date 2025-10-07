import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const fetchCategoryProducts = createAsyncThunk(
    "fetch/categories/id",
    async (id, { rejectWithValue }) => {
        try {
            // Получаем информацию о категории и продукты параллельно
            const [categoryResponse, productsResponse] = await Promise.all([
                api.get('/categories/all'),
                api.get('/products/all')
            ]);

            // Находим категорию по id
            const category = categoryResponse.data.find(cat => cat.id === Number(id));

            if (!category) {
                throw new Error(`Category with id ${id} not found`);
            }

            // Фильтруем продукты по categoryId
            const products = productsResponse.data.filter(product => product.categoryId === Number(id));

            // Добавляем дополнительную проверку данных
            if (!Array.isArray(products)) {
                throw new Error('Invalid products data received');
            }

            return {
                category,
                products
            };
        } catch (error) {
            console.error('CategoryProducts Error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });

            if (error.response) {
                // Ошибка от сервера
                return rejectWithValue({
                    message: error.response.data.message || 'Server error',
                    status: error.response.status
                });
            }
            // Сетевая ошибка или другая ошибка
            return rejectWithValue({
                message: error.message || 'Network error',
                status: 'ERROR'
            });
        }
    }
);