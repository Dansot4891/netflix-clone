import { useNavigate, useSearchParams } from "react-router-dom";
import { AppColor } from "../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../shared/presentation/compoenent/button/app_button";
import { Footer } from "../../../../../shared/presentation/compoenent/footer/footer";
import { AppTextField } from "../../../../../shared/presentation/compoenent/text_field/app_text_field";
import { SignUpBackground } from "../shared/component/sign_up_background";
import { SignUpContent } from "../shared/component/sign_up_content";
import { SignUpHeader } from "../shared/component/sign_up_header";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../../../core/store/store";
import { setPassword, signup } from "../shared/slice/sign_up_slice";
import { LoadingView } from "../../../../../shared/presentation/compoenent/loading/loading_view";
import type { RootState } from "../../../../../core/store/store";
import { useState } from "react";

export function SignUpPasswordPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading } = useSelector((state: RootState) => state.signup);

    const [password, setPasswordState] = useState('');

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordState(e.target.value);
    };

    return (
        <div>
            {isLoading && <LoadingView />}
            <SignUpBackground>
                <SignUpHeader />
                <SignUpContent>
                    <h2>비밀번호를 입력해주세요.</h2>
                    <AppTextField
                        $backgroundColor={AppColor.white}
                        $marginBottom="40px"
                        $textColor={AppColor.black}
                        $focusBorderColor={AppColor.black}
                    >
                        <input type="password" placeholder="비밀번호" onChange={handlePasswordChange} />
                    </AppTextField>
                    <AppButton $color={AppColor.red} onClick={() => {
                        dispatch(setPassword(password));
                        dispatch(signup(navigate));
                    }}>
                        회원가입
                    </AppButton>
                </SignUpContent>
                <Footer $backgroundColor={AppColor.gray3E} />
            </SignUpBackground>
        </div>
    );
}