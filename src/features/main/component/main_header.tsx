import { Logo } from "../../../shared/presentation/compoenent/logo/logo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppButton } from "../../../shared/presentation/compoenent/button/app_button";
import { AppColor } from "../../../core/styles/color/app_color";
import { device } from "../../../core/styles/reponsive/responsive";

const MainHeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 24px;

    @media ${device.mobile} {
        padding-right: 12px;
    }
    @media ${device.tablet} {
        padding-right: 40px;
    }
    @media ${device.desktop} {
        padding-right: 80px;
    }
`;

export function MainHeader() {
    const navigate = useNavigate();
    return (
        <MainHeaderComponent>
            <Logo />
            <AppButton $width="auto" $textColor={AppColor.white} $color={AppColor.red} onClick={() => navigate('/sign-in')}>로그인</AppButton>
        </MainHeaderComponent>
    )
}