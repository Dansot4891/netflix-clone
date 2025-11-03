import { useNavigate } from "react-router-dom";
import { AppColor } from "../../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../../shared/presentation/compoenent/button/app_button";
import { Footer } from "../../../../../../shared/presentation/compoenent/footer/footer";
import { AppTextField } from "../../../../../../shared/presentation/compoenent/text_field/app_text_field";
import { SignUpBackground } from "../../sign_up_agreement/component/sign_up_background";
import { SignUpContent } from "../../sign_up_agreement/component/sign_up_content";
import { SignUpHeader } from "../../sign_up_agreement/component/sign_up_header";
import { AppRoutes } from "../../../../../../core/route/routes";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../../../core/store/store";
import { setEmail } from "../../shared/slice/sign_up_slice";
import { useState } from "react";


export function SignUpEmailPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmailState] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailState(e.target.value);
    };

    return (
        <SignUpBackground>
            <SignUpHeader />
            <SignUpContent>
                <h2>이메일 주소를 입력해주세요.</h2>
                <AppTextField $backgroundColor={AppColor.white} $marginBottom="40px" $textColor={AppColor.black} $focusBorderColor={AppColor.black}>
                    <input type="email" placeholder="이메일 주소" onChange={handleEmailChange} />
                </AppTextField>
                <AppButton $color={AppColor.red} onClick={() => {
                    dispatch(setEmail(email));
                    navigate(AppRoutes.signUpPassword);
                }}>다음</AppButton>
            </SignUpContent>
            <Footer $backgroundColor={AppColor.gray3E} />
        </SignUpBackground>
    )
}
