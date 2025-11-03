import { useNavigate } from "react-router-dom";
import { AppColor } from "../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../shared/presentation/compoenent/button/app_button";
import { Footer } from "../../../../../shared/presentation/compoenent/footer/footer";
import styled from "styled-components";
import { useState } from "react";
import { SignUpBackground } from "../shared/component/sign_up_background";
import { SignUpHeader } from "../shared/component/sign_up_header";
import { SignUpContent } from "../shared/component/sign_up_content";
import { AppRoutes } from "../../../../../core/route/routes";

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${AppColor.red};
  border-radius: 4px;
  background-color: ${AppColor.white};
  accent-color: ${AppColor.black};
  display: grid;
  place-content: center;
  cursor: pointer;

  /* 체크 표시 */
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    transform: scale(0);
    transition: transform 120ms ease-in-out;
    background: ${AppColor.black};
    clip-path: polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0,43% 62%);
  }

  &:checked {
    background-color: ${AppColor.white};   /* 배경 유지 또는 변경 */
    border-color: ${AppColor.red};
  }
  &:checked::before { transform: scale(1); }

  &:focus-visible {
    outline: 2px solid ${AppColor.red};
    outline-offset: 2px;
  }
  &:disabled { opacity: .5; cursor: not-allowed; }
`;

export function SignUpAgreementPage() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  return (
    <SignUpBackground>
      <SignUpHeader />
      <SignUpContent>
        <Row>
          <img src="https://cdn-icons-png.flaticon.com/512/1221/1221614.png" />
          <img src="https://cdn-icons-png.freepik.com/512/2004/2004580.png" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYkSCj1tO2XRmTKIx8lMB0WDc2CFHzPcong&s" />
        </Row>
        <br />
        <p>1 / 3단계</p>
        <h2>개인정보 수집 및 이용 동의</h2>
        <Row>
          <Checkbox type="checkbox" name="agree" checked={agree} onChange={() => setAgree(!agree)} />
          <p>예, 개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다.(상세 정보)</p>
        </Row>
        <Row>
          <Checkbox type="checkbox" name="agree" />
          <p>예, 넷플릭스 특별 프로모션 이메일을 보내주세요. (선택 사항)</p>
        </Row>
        <br />
        <AppButton $color={agree ? AppColor.red : AppColor.grayBE} onClick={() => navigate(AppRoutes.signUpEmail)} disabled={!agree}>다음</AppButton>
      </SignUpContent>
      <Footer $backgroundColor={AppColor.gray3E} />
    </SignUpBackground>
  )
}
