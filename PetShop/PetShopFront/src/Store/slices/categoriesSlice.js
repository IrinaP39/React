import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../services/fetchCategories";

const initialState = {
    category: [],
    loading: false,
    error: null
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false
                state.category = action.payload
                state.error = null
            })
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.loading = false
                state.error = action.error
            })
    }
});

export default categorySlice.reducer;
