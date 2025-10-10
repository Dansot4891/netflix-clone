// App.tsx
import styled from "styled-components";
import { device } from "../../../../../core/styles/reponsive/responsive";
import { AppPath } from "../../../../../core/styles/path/app_path";

// 앱 로고
const SignInLogoComponent = styled.div`
  margin-top: 12px;

  @media ${device.mobile} {
    width: 100px;
  }

  @media ${device.tablet} {
    width: 150px;
  }

  @media ${device.desktop} {
    width: 200px;
    margin-left: 100px;
  }

  img{
    width: 100%;
  }
`;
function SignInLogo() {
    return (
        <SignInLogoComponent>
            <img src={AppPath.appLogo} alt="app logo" />
        </SignInLogoComponent>
    )
}

export default SignInLogo