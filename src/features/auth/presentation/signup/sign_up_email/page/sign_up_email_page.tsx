import { useNavigate } from "react-router-dom";
import { AppColor } from "../../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../../shared/presentation/compoenent/button/app_button";
import { Footer } from "../../../../../../shared/presentation/compoenent/footer/footer";
import { AppTextField } from "../../../../../../shared/presentation/compoenent/text_field/app_text_field";
import { SignUpBackground } from "../../sign_up_agreement/component/sign_up_background";
import { SignUpContent } from "../../sign_up_agreement/component/sign_up_content";
import { SignUpHeader } from "../../sign_up_agreement/component/sign_up_header";


export function SignUpEmailPage() {
    const navigate = useNavigate();

    return (
        <SignUpBackground>
            <SignUpHeader />
            <SignUpContent>
                <h2>이메일 주소를 입력해주세요.</h2>
                <AppTextField $backgroundColor={AppColor.white} $marginBottom="40px" $textColor={AppColor.black} $focusBorderColor={AppColor.black}>
                    <input type="email" placeholder="이메일 주소" />
                </AppTextField>
                <AppButton $color={AppColor.red} onClick={() => navigate('/sign-up-password')}>다음</AppButton>
            </SignUpContent>
            <Footer $backgroundColor={AppColor.gray3E} />
        </SignUpBackground>
    )
}
