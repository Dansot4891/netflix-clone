import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../../../features/auth/data/dto/user_type";

type AuthStatus =
  | "idle"        // 초기 상태 (아무 동작 전)
  | "loading"     // 로그인 요청 중
  | "authenticated" // 로그인 성공
  | "unauthenticated" // 로그인 안 된 상태
  | "error";      // 로그인 실패 또는 에러 발생
type AuthState = { user: UserType; status: AuthStatus; errorMessage?: string };
const initialState: AuthState = { user: { email: "", displayName: "" }, status: "idle" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (s) => { s.status = "loading"; s.errorMessage = undefined; },
    setUser: (s, a: PayloadAction<UserType>) => { s.user = a.payload; s.status = "authenticated"; },
    setUnauthenticated: (s) => { s.status = "unauthenticated"; s.errorMessage = undefined; },
    setError: (s, a: PayloadAction<string>) => { s.status = "error"; s.errorMessage = a.payload; },
  },
});

export const { setLoading, setUser, setUnauthenticated, setError } = authSlice.actions;
export default authSlice.reducer;