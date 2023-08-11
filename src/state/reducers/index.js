import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    crat: cartReducer
});

export default reducers;