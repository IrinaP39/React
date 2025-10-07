import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/basketSlice"
import { categorySlice } from "./slices/categoriesSlice";
import { categoryProductsSlice } from "./slices/categoryProductsSlice";
import productDetailsSlice from "./slices/productDetailsSlice";
import AllProductsSlice from "./slices/AllProductsSlice";
import salesProductsSlice from "./slices/salesProductSlice";

export const rootReducer = combineReducers({
    basket: basketSlice.reducer,
    category: categorySlice.reducer,
    categoryProducts: categoryProductsSlice.reducer,
    productDetails: productDetailsSlice,
    allProducts: AllProductsSlice,
    discountproducts: salesProductsSlice
});

export const store = configureStore({
    reducer: rootReducer,
});
