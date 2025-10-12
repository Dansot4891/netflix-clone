// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { LoginUseCase } from "../../../domain/use_case/login_use_case";
// import { setError, setUser } from "../../../../../shared/slices/auth/auth_slice";
// import type { SignInState } from "./sign_in_state";

// const loginUseCase = new LoginUseCase();

// export const loginThunk = createAsyncThunk(
//   "sign_in/execute",
//   async (
//     { email, password }: { email: string; password: string },
//     { dispatch, rejectWithValue }
//   ) => {
//     try {
//       const user = await loginUseCase.execute(email, password);
//       dispatch(setUser(user)); // ✅ 전역 유저 정보 업데이트
//       return user;
//     } catch (err: any) {
//       const msg = err.message ?? "로그인 실패";
//       dispatch(setError(msg)); // ✅ 전역 에러 처리
//       return rejectWithValue(msg);
//     }
//   }
// );

// const signInInitState: SignInState = {
//   email: "",
//   password: "",
//   rememberMe: false,
//   isLoading: false,
// }

// export const SignInViewModel = createSlice({
//   name: "signIm",
//   signInInitState,
//   reducers: {
//     setEmail: (state, action: PayloadAction<string>) => {
//       state.email = action.payload;
//     },
//     setPassword: (state, action: PayloadAction<string>) => {
//       state.password = action.payload;
//     },
//     toggleRememberMe: (state) => {
//       state.rememberMe = !state.rememberMe;
//     },
//     resetForm: (state) => {
//       state.email = "";
//       state.password = "";
//       state.rememberMe = false;
//       state.error = undefined;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginThunk.pending, (state) => {
//         state.isLoading = true;
//         state.error = undefined;
//       })
//       .addCase(loginThunk.fulfilled, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(loginThunk.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { setEmail, setPassword, toggleRememberMe, resetForm } =
//   loginSlice.actions;

// export const selectLoginState = (state: RootState) => state.login;
// export default loginSlice.reducer;
