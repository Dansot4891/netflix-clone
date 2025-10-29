// App.tsx
import styled from "styled-components";
import { device } from "../../../../core/styles/reponsive/responsive";
import { AppPath } from "../../../../core/styles/path/app_path";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <LogoComponent onClick={() => navigate('/')}>
      <img src={AppPath.appLogo} />
    </LogoComponent>
  )
}