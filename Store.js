import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const CART_KEY = "cart";
const persistedCartState = localStorage.getItem(CART_KEY)
  ? { cart: { items: JSON.parse(localStorage.getItem(CART_KEY)) } }
  : {};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedCartState,
});

export default store;


/**
 * Create Store
 *  - configureStore() - RTK
 *
 * Provide my stor to app
 *  - <Provider store = {store}> - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice.reducer;
 *
 * Put that Slice into Store
 *      - {
 *        reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *         }
 * }
 *
 * */
