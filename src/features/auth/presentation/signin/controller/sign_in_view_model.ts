import { useState } from "react";
import type { SignInState } from "./sign_in_state";
import { LoginUseCase } from "../../../domain/use_case/login_use_case";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../../shared/slices/auth/auth_slice";

/// 로그인 화면 뷰모델
export const useSignInViewModel = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState<SignInState>({
    email: "",
    password: "",
    isLoading: false,
    error: undefined,
  });

  // 🧩 상태 업데이트 액션들
  const setEmail = (email: string) =>
    setState((prev) => ({ ...prev, email }));

  const setPassword = (password: string) =>
    setState((prev) => ({ ...prev, password }));

  const setLoading = (isLoading: boolean) =>
    setState((prev) => ({ ...prev, isLoading }));

  const setError = (error?: string) =>
    setState((prev) => ({ ...prev, error }));

  const login = async () => {
    setLoading(true);
    
    try {
      // 실제 API 연동 부분
      const useCase = new LoginUseCase();
      let resp = await useCase.execute(state.email, state.password);
      // resp의 값을 가져와서 전역 유저 slice에 저장
      dispatch(setUser(resp));

      alert("로그인 성공");
    } catch (err: any) {
      setError(err.message ?? "로그인 실패");
    } finally {
      setLoading(false);
    }
  };

  // 외부에서 접근할 수 있게 상태/액션 반환
  return {
    state: state,
    actions: {
      setEmail,
      setPassword,
      setLoading,
      setError,
      login,
    },
  };
};
