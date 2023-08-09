import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    crat: cartReducer
});

export default reducers;