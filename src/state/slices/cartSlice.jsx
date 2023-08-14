import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:0,
    reducers: {
        addItem(state, action) {
            return action.payload + state;
            console.log(action.payload);
        },
        removeItem (state, action) {
            if(state>0){
                return state - action.payload;
            }
            else {
                return 0;
            }
        },
    },
})


export default cartSlice;

export const {addItem, removeItem} = cartSlice.actions