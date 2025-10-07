import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    basket: []
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        increaseValue: (state) => {
            state.value += 1;
        },
        addItemToBasket: (state, action) => {
            const existingItem = state.basket.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + (action.payload.quantity || 1);
            } else {
                state.basket.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1
                });
            }
        },
        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, change } = action.payload;
            const item = state.basket.find(item => item.id === id);
            if (item) {
                const newQuantity = (item.quantity || 1) + change;
                if (newQuantity > 0) {
                    item.quantity = newQuantity;
                }
            }
        },
        clearBasket: (state) => {
            state.basket = [];
        }
    },
});

export const {
    increaseValue,
    addItemToBasket,
    removeFromBasket,
    updateQuantity,
    clearBasket
} = basketSlice.actions;

export default basketSlice.reducer;
