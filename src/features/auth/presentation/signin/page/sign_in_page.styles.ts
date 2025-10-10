// App.tsx
import styled from "styled-components";
import { AppPath } from "../../../../../core/styles/path/app_path";
import { device } from "../../../../../core/styles/reponsive/responsive";
import { AppColor } from "../../../../../core/styles/color/app_color";

// 배경 이미지
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
  padding: 20px;

  @media ${device.mobile} {
    display: none;
  }
`;

// 앱 로고
const AppLogoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;

  @media ${device.mobile} {
    width: 100px;
  }

  @media ${device.tablet} {
    width: 150px;
  }

  @media ${device.desktop} {
    width: 200px;
  }

  img{
    width: 100%;
  }
`;

// 로그인 박스
const SignInBox = styled.div`
  background-color: ${AppColor.black};
  border-radius: 4px;
  padding: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.8;
`;

// 텍스트 필드
const TextField = styled.div`
  input{
    padding: 16px 12px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgb(180, 180, 180);
    background-color:${AppColor.darkBlack};
    color: ${AppColor.white};
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 12px;
  }

  input::placeholder {
    color:${AppColor.gray9D};
    font-size: 16px;
  }
`;



export { SignInBackground, AppLogoContainer, SignInBox, TextField };