import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllproducts = createAsyncThunk(
    "product/Allproducts",
    async (Allproducts, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3333/products/all`);
            return response.data;
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);