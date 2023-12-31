import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name:"products",
    initialState:[],
    reducers: {
        addProduct (state, action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeProduct (state, action) {
            state.slice(action.payload,1)
        },
        editProduct (state, action) {},
    }
})

export default product;