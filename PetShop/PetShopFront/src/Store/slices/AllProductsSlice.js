import { createSlice } from "@reduxjs/toolkit";
import { fetchAllproducts } from "../services/fetchAllProducts";

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const AllProductsSlice = createSlice({
    name: "AllProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllproducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(fetchAllproducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllproducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    }
});

export default AllProductsSlice.reducer;
