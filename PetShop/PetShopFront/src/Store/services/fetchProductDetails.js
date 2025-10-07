import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
    "product/productDetails",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3333/products/${productId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);