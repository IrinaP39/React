import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetails } from "../services/fetchProductDetails";

const initialState = {
    product: null,
    loading: false,
    error: null
};

export const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload[0];
                state.error = null;
            })
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    }
});

export default productDetailsSlice.reducer;
