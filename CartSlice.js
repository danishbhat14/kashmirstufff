import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem(CART_KEY);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
