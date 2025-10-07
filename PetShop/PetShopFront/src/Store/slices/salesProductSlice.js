import { createSlice } from "@reduxjs/toolkit";
import { fetchSales } from "../services/fetchSales";


const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const salesProductsSlice = createSlice({
    name: "discountproducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSales.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSales.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.products = payload;
            })
            .addCase(fetchSales.rejected, (state, { payload, error }) => {
                state.loading = false;
                state.error = payload || error.message;
            });
    },
});

export default salesProductsSlice.reducer;