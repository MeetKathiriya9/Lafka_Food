import { createSlice } from "@reduxjs/toolkit";
const cartSliceUi = createSlice({
    name: 'cartUi',
    initialState: { cartIsVisible: false, accountIsVisible: false},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        accounttoggle(state) {
            state.accountIsVisible = !state.accountIsVisible
        }
    }
})
export const cartUiActions = cartSliceUi.actions;
export default cartSliceUi;