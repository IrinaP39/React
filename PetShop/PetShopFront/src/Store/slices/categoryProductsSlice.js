import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryProducts } from "../services/fetchCategoryProducts";
import { fetchCategories } from "../services/fetchCategories";

const initialState = {
    categories: [],
    currentCategory: null,
    products: [],
    loading: false,
    error: null
};

export const categoryProductsSlice = createSlice({
    name: "category_products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.error = null;
            })
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.currentCategory = action.payload.category;
                state.products = action.payload.products;
                state.error = null;
            })
            .addCase(fetchCategoryProducts.pending, (state) => {
                state.loading = true;
                state.currentCategory = null;
                state.products = [];
                state.error = null;
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.loading = false;
                state.currentCategory = null;
                state.products = [];
                state.error = action.payload || action.error;
            });
    }
});

export default categoryProductsSlice.reducer;
