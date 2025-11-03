// view_model.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { SignUpPasswordState } from "./sign_up_agreement_state";
import { SignupUseCase } from "../../../../domain/use_case/signup_use_case";

const initialState: SignUpPasswordState = {
    email: '',
    password: '',
    isLoading: false,
};

export const signup = createAsyncThunk(
    'signupPassword/signup',
    async (navigate: (path: string) => void, thunkAPI) => {
        const state = thunkAPI.getState() as { signupPassword: SignUpPasswordState };
        const { email, password } = state.signupPassword;

        const result = await new SignupUseCase().execute(email, password);
        navigate("/sign-up-email"); // ✅ 성공 시 이동
        return result;
    }
);

export const signupPasswordSlice = createSlice({
    name: 'signupPassword',
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

export const { setEmail, setPassword, setLoading } = signupPasswordSlice.actions;
export default signupPasswordSlice.reducer;