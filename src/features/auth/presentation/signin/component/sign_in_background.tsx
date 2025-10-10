// App.tsx
import styled from "styled-components";
import { AppPath } from "../../../../../core/styles/path/app_path";
import { device } from "../../../../../core/styles/reponsive/responsive";
import { AppColor } from "../../../../../core/styles/color/app_color";

// 배경 이미지
const SignInBackgroundComponent = styled.div`
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
    url(${AppPath.signInBg});
  background-size: cover;
  width: 100%;
  min-height: 900px;
  overflow: hidden;
  display: block;
  
  @media ${device.mobile} {
    background-image: none;
    background-color: ${AppColor.black};
  }
`;

export function SignInBackground({ children }: { children: React.ReactNode }) {
  return (
    <SignInBackgroundComponent>
      {children}
    </SignInBackgroundComponent>
  )
}
