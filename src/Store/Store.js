import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./ShoppingCart/CartSlice";
import cartSliceUi from "./ShoppingCart/CartSliceUi";
const store = configureStore({
reducer: {
cart: cartSlice.reducer,
cartUi: cartSliceUi.reducer
}
})
export default store