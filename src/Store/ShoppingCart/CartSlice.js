import { createSlice, current } from "@reduxjs/toolkit";

const item = localStorage.getItem("CartItem") !== null ? JSON.parse(localStorage.getItem('CartItem')) : []
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0

const setItemFuc = (item, totalAmount, totalQuantity) =>{
    localStorage.setItem("CartItem", JSON.stringify(item));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
}


const initialState = {
    cartItems: item,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount
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
                    // totalPrice: newItem.price,
                    totalPrice: newItem.price * newItem.quantity,

                })
            } 
            else {
                // state.totalQuantity++;
                state.totalQuantity += newItem.quantity;
                existingItem.quantity += newItem.quantity;
                // existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
                existingItem.totalPrice += newItem.price * newItem.quantity; // Add total price of new items

            }
            
            state.totalAmount = state.cartItems.reduce((total, item) => (total +Number(item.price) * Number(item.quantity)), 0)

            console.log("state.cartItems", current(state));

            // setItemFuc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
            setItemFuc(state.cartItems, state.totalAmount, state.totalQuantity);

        },

        removeItem(state,action){
            
            const id = action.payload;  
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                state.totalQuantity--;

                if (existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price; // Decrease total price by price of one item
                }

                state.totalAmount = state.cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                );
            }

            // setItemFuc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
            setItemFuc(state.cartItems, state.totalAmount, state.totalQuantity);

        },

        deleteItem(state,action){

            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if(existingItem){
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)
            // setItemFuc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
            setItemFuc(state.cartItems, state.totalAmount, state.totalQuantity);

        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice;