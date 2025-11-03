import { useNavigate, useSearchParams } from "react-router-dom";
import { AppColor } from "../../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../../shared/presentation/compoenent/button/app_button";
import { Footer } from "../../../../../../shared/presentation/compoenent/footer/footer";
import { AppTextField } from "../../../../../../shared/presentation/compoenent/text_field/app_text_field";
import { SignUpBackground } from "../../sign_up_agreement/component/sign_up_background";
import { SignUpContent } from "../../sign_up_agreement/component/sign_up_content";
import { SignUpHeader } from "../../sign_up_agreement/component/sign_up_header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../../../core/store/store";
import { setEmail, setPassword, signup } from "../controller/sign_up_agreement_view_model";

export function SignUpPasswordPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();

    const email = searchParams.get("email") ?? "";

    useEffect(() => {
        dispatch(setEmail(email));
    }, []);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.target.value));
    };

    return (
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
                <AppButton $color={AppColor.red} onClick={() => dispatch(signup(navigate))}>
                    회원가입
                </AppButton>
            </SignUpContent>
            <Footer $backgroundColor={AppColor.gray3E} />
        </SignUpBackground>
    );
}