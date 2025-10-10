// App.tsx
import styled from "styled-components";
import { AppPath } from "../../../../../core/styles/path/app_path";

const SignInBackground = styled.div`
  background-image: url(${AppPath.signInBg});
  background-size: cover;
  width: 100vw;
  height: 90vh;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const AppLogoContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
`;

export { SignInBackground, AppLogoContainer };