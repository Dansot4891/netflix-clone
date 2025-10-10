// App.tsx
import styled from "styled-components";
import { AppColor } from "../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../shared/presentation/compoenent/button/app_button";
import { AppLink } from "../../../../../shared/presentation/compoenent/link/app_link";

// 로그인 박스
const SignInBoxComponent = styled.div`
  background-color: ${AppColor.blackOpacity};
  border-radius: 4px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 48px;
  padding-bottom: 88px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

// 텍스트 필드
const TextFieldComponent = styled.div`
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

function SignInBox() {
    return (
        <SignInBoxComponent>
            <p style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "24px" }}>로그인</p>
            <TextFieldComponent>
                <input type="text" placeholder="이메일 또는 휴대폰 번호" />
            </TextFieldComponent>
            <TextFieldComponent>
                <input type="password" placeholder="비밀번호" />
            </TextFieldComponent>
            <AppButton $color={AppColor.red}>로그인</AppButton>
            <p style={{ margin: "16px", textAlign: "center" }}>또는</p>
            <AppButton $color={AppColor.gray30}>로그인 코드 사용하기</AppButton>
            <div style={{ display: "flex", justifyContent: "center", margin: "16px" }}>
                <AppLink $underline={true} $hoverColor={AppColor.grayBE}>비밀번호를 잊으셨나요?</AppLink>
            </div>
            <div style={{ display: "flex", margin: "16px 0px" }}>
                <input type="checkbox" name="agree" style={{ marginRight: "8px" }} />
                <p>로그인 정보 저장</p>
            </div>
            <p style={{ color: AppColor.gray9D }}>넷플릭스 회원이 아닌가요? <AppLink $textColor={AppColor.white}>지금 가입하세요.</AppLink></p>
            <div style={{ margin: "16px 0px" }}>
                <p style={{ color: AppColor.gray60, fontSize: "14px" }}>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이</p>
                <p style={{ color: AppColor.gray60, fontSize: "14px" }}>아님을 확인합니다.</p>
            </div>
            <AppLink $underline={true} $textColor={AppColor.blue} $fontSize="14px">자세히 알아보기.</AppLink>
        </SignInBoxComponent>
    )
}

export default SignInBox