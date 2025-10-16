// App.tsx
import styled from "styled-components";
import { device } from "../../../../core/styles/reponsive/responsive";
import { AppPath } from "../../../../core/styles/path/app_path";

// 앱 로고
const LogoComponent = styled.div`
  margin-top: 12px;

  @media ${device.mobile} {
    width: 100px;
    margin-left: 24px;
  }

  @media ${device.tablet} {
    width: 150px;
    margin-left: 24px;
  }

  @media ${device.desktop} {
    width: 200px;
    margin-left: 100px;
  }

  img{
    width: 100%;
  }
`;
export function Logo() {
  return (
    <LogoComponent>
      <img src={AppPath.appLogo} />
    </LogoComponent>
  )
}