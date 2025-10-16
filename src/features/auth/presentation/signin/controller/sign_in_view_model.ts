import { useState } from "react";
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