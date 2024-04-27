import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        // ==================== Add Items =====================
        addItem(state, action) {
            console.log("Action: ", action)

            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)

            console.log("state.cartItems", current(state));

            if (!existingItem) {
                state.totalQuantity = state.totalQuantity + newItem.quantity;

                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                })
            } 
            else {
                // state.totalQuantity++;
                state.totalQuantity += newItem.quantity;
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            
            state.totalAmount = state.cartItems.reduce((total, item) => (total +Number(item.price) * Number(item.quantity)), 0)

            console.log("state.cartItems", current(state));
        },

        removeItem(state,action){
            
            const id = action.payload;  
            const existingItem = state.cartItems.find((item) => item.id === id);

            state.totalQuantity--;

            if(existingItem.quantity === 1){
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }

            state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0);

        },

        deleteItem(state,action){

            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if(existingItem){
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)

        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice;