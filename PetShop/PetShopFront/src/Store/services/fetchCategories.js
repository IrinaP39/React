import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
    "fetch/categories",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3333/categories/all')
            return response.data
        } catch (error) {
            rejectWithValue({ message: error.message })
        }
    }
);

