import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../shared/slices/auth/auth_slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
