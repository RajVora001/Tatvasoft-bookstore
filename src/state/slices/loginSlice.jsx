import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
    name: "logins",
    initialState: false,
    reducers: {
        userLogin(state, action) {
            if (state === false) {
                state = true;
                console.log(action.state);
            }
            else {
                return;
            }
        },

        userLogout(state, action) {
            if (state === true) {
                state = false;
                console.log(action.state);
            }
            else {
                return;
            }
        }
    },
})


export default login;