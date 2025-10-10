// App.tsx
import styled from "styled-components";
import { AppPath } from "../../../../../core/styles/path/app_path";
import { device } from "../../../../../core/styles/reponsive/responsive";

// 배경 이미지
const SignInBackgroundComponent = styled.div`
  background-image: url(${AppPath.signInBg});
  background-size: cover;
  width: 100vw;
  height: 90vh;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  padding: 20px;

  @media ${device.mobile} {
    display: none;
  }
`;

export function SignInBackground() {
    return (
        <SignInBackgroundComponent />
    )
}
