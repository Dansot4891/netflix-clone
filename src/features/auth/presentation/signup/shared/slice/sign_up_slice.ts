// view_model.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignupUseCase } from "../../../../domain/use_case/signup_use_case";
import { AppRoutes } from "../../../../../../core/route/routes";
import type { SignUpState } from "../state/signup_state";

const initialState: SignUpState = {
    email: '',
    password: '',
    isLoading: false,
};

export const signup = createAsyncThunk(
    'signup/signup',
    async (navigate: (path: string) => void, thunkAPI) => {
        const state = thunkAPI.getState() as { signup: SignUpState };
        const { email, password } = state.signup;

        const result = await new SignupUseCase().execute(email, password);
        navigate(AppRoutes.signIn);
        return result;
    }
);

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setEmail: (state, action) => { state.email = action.payload; },
        setPassword: (state, action) => { state.password = action.payload; },
        setLoading: (state, action) => { state.isLoading = action.payload; },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => { state.isLoading = true; })
            .addCase(signup.fulfilled, (state) => { state.isLoading = false; })
            .addCase(signup.rejected, (state) => { state.isLoading = false; });
    },
});

export const { setEmail, setPassword, setLoading } = signupSlice.actions;
export default signupSlice.reducer;