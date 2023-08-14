import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name:"registration",
    initialState:[],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser (state, action) {
            state.slice(action.payload,1)
        }
    }
})

export default registrationSlice;

export const {addUser, removeUser} = registrationSlice.actions


