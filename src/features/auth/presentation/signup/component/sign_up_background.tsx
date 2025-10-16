// App.tsx
import styled from "styled-components";
import { AppPath } from "../../../../../core/styles/path/app_path";
import { device } from "../../../../../core/styles/reponsive/responsive";

// 배경 이미지
const SignUpBackgroundComponent = styled.div`
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.7)), 
    url(${AppPath.signInBg});
  background-size: cover;
  width: 100%;
  min-height: 900px;
  overflow: hidden;
  display: block;
  
  @media ${device.mobile} {
    min-height: 500px;
  }

  @media ${device.tablet} {
    min-height: 700px;
  }
`;

export function SignUpBackground({ children }: { children: React.ReactNode }) {
  return (
    <SignUpBackgroundComponent>
      {children}
    </SignUpBackgroundComponent>
  )
}
