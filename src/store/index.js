import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./auth";
import userReducers from "./user";

const dataStore = configureStore({
    reducer: {
        auth : authReducers,
        user : userReducers,
    }
})

export default dataStore;