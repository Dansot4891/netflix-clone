// App.tsx
import styled from "styled-components";
import { AppColor } from "../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../shared/presentation/compoenent/button/app_button";
import { AppLink } from "../../../../../shared/presentation/compoenent/link/app_link";
import { Center } from "../../../../../shared/presentation/compoenent/align/center";
import { AppTextField } from "../../../../../shared/presentation/compoenent/text_field/app_text_field";

// 로그인 박스
const SignInBoxComponent = styled.div`
  background-color: ${AppColor.blackOpacity};
  max-width: 490px;
  border-radius: 4px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 48px;
  padding-bottom: 88px;
  margin: 0 auto;
`;

const Header = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const SubHeader = styled.p`
  color: ${AppColor.gray9D};
`;

const Footer = styled.div`
  margin: 16px 0px;
  color: ${AppColor.gray60};
  font-size: 14px;
`;

const Row = styled.div`
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 16px 0px;

  input{
    margin-right: 8px;
    accent-color: ${AppColor.white};
    width: 18px;
    height: 18px;
  }
`;

function SignInBox() {
  return (
    <SignInBoxComponent>
      <Header>로그인</Header>
      <AppTextField>
        <input type="text" placeholder="이메일 또는 휴대폰 번호" />
        <input type="password" placeholder="비밀번호" />
      </AppTextField>
      <AppButton $color={AppColor.red}>로그인</AppButton>
      <Center $margin="16px 0px">
        <SubHeader>또는</SubHeader>
      </Center>
      <AppButton $color={AppColor.gray30}>로그인 코드 사용하기</AppButton>
      <Center $margin="16px 0px">
        <AppLink $underline={true} $hoverColor={AppColor.grayBE}>비밀번호를 잊으셨나요?</AppLink>
      </Center>
      <Row>
        <input type="checkbox" name="agree" />
        <p>로그인 정보 저장</p>
      </Row>
      <SubHeader>넷플릭스 회원이 아닌가요? <AppLink $textColor={AppColor.white}>지금 가입하세요.</AppLink></SubHeader>
      <p style={{ color: AppColor.gray9D }}></p>
      <Footer>
        <p>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이</p>
        <p>아님을 확인합니다.</p>
      </Footer>
      <AppLink $underline={true} $textColor={AppColor.blue} $fontSize="14px">자세히 알아보기.</AppLink>
    </SignInBoxComponent>
  )
}

export default SignInBox