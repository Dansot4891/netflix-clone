import { useNavigate } from "react-router-dom";
import { AppColor } from "../../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../../shared/presentation/compoenent/button/app_button";
import { Logo } from "../../../../../../shared/presentation/compoenent/logo/logo";
import styled from "styled-components";

const SignUpAgreementPageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 60px;
`;

export function SignUpHeader() {
    const navigate = useNavigate();
    return (
        <SignUpAgreementPageHeader>
            <Logo />
            <AppButton $width="auto" $height="40px" $padding="0px 20px" $textColor={AppColor.black} $color={AppColor.white} onClick={() => navigate('/sign-in')}>로그인</AppButton>
        </SignUpAgreementPageHeader>
    )
}
