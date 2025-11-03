import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../shared/slices/user/user_slice";
import mainReducer from "../../features/main/presentation/controller/main_view_model";
import signupReducer from "../../features/auth/presentation/signup/shared/slice/sign_up_slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        main: mainReducer,
        signup: signupReducer,
    },
});

// 타입 export 추가!
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;