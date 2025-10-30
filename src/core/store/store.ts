import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../shared/slices/auth/auth_slice";
import mainReducer from "../../features/main/presentation/controller/main_view_model";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        main: mainReducer,
    },
});

// 타입 export 추가!
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;