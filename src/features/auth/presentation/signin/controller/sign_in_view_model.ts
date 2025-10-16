import { useState } from "react";
<<<<<<< HEAD
import { LoginUseCase } from "../../../domain/use_case/login_use_case";
import { FirebaseError } from "firebase/app";


export function SignInViewModel() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await new LoginUseCase().execute(email, password);
        } catch (error) {
            console.log('sign In error', error);
            if (error instanceof FirebaseError) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert('사용자가 없습니다. 회원가입을 진행해 주세요.')
                        break
                    case 'auth/wrong-password':
                        alert('비밀번호가 틀렸습니다.')
                        break
                    default:
                        alert('알 수 없는 오류가 발생했습니다. 다시 시도해주세요.')
                }
            } else {
                alert('알 수 없는 오류가 발생했습니다. 다시 시도해주세요.')
            }
        } finally {
            setLoading(false);
        }
    };

    return { email, password, loading, handleEmailChange, handlePasswordChange, handleSignIn };
}
=======
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
>>>>>>> 9996d190ed5acfb36f4a86bec7ef9ab3b4b821a0
