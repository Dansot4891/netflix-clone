// App.tsx
import styled from "styled-components";
import { AppPath } from "../../../../../core/styles/path/app_path";
import { device } from "../../../../../core/styles/reponsive/responsive";

// 배경 이미지
const SignInBackgroundComponent = styled.div`
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
    url(${AppPath.signInBg});
  background-size: cover;
  width: 100vw;
  height: 90vh;
  
  @media ${device.mobile} {
    display: none;
  }
`;

export function SignInBackground({ children }: { children: React.ReactNode }) {
    return (
        <SignInBackgroundComponent>
            {children}
        </SignInBackgroundComponent>
    )
}
