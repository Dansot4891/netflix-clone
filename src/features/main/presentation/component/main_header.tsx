import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../../../shared/presentation/compoenent/logo/logo";
import { AppButton } from "../../../../shared/presentation/compoenent/button/app_button";
import { AppColor } from "../../../../core/styles/color/app_color";
import { device } from "../../../../core/styles/reponsive/responsive";
import { AppRoutes } from "../../../../core/route/routes";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../core/store/store";

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
    const { user, status } = useSelector((state: RootState) => state.user);
    console.log('status: ', status);
    return (
        <MainHeaderComponent>
            <Logo />
            {status != "authenticated" ? <AppButton $width="auto" $textColor={AppColor.white} $color={AppColor.red} onClick={() => navigate(AppRoutes.signIn)}>로그인</AppButton>
                : <p>{user.email}</p>}
        </MainHeaderComponent>
    )
}