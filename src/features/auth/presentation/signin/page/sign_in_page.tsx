import { AppPath } from "../../../../../core/styles/path/app_path"
import { AppLogoContainer, SignInBackground, SignInBox, TextField } from "./sign_in_page.styles"

function SignInPage() {
  return (
    <div>
      <SignInBackground />
      <AppLogoContainer>
        <img src={AppPath.appLogo} alt="app logo" />
      </AppLogoContainer>
      <div style={{ opacity: 0.7 }}></div>
      <SignInBox>
        <h1>로그인</h1>
        <TextField style={{ marginBottom: "8px", marginTop: "20px" }}>
          <input type="text" placeholder="이메일 또는 휴대폰 번호" />
        </TextField>
        <TextField>
          <input type="password" placeholder="비밀번호" />
        </TextField>
        <button>로그인</button>
        <p>또는</p>
        <button>로그인 코드 사용하기</button>
        <p>비밀번호를 잊으셨나요?</p>
        <div>
          <input type="checkbox" name="agree" />
          <p>로그인 정보 저장</p>
        </div>
        <p>넷플릭스 회원이 아닌가요? <a>지금 가입하세요.</a></p>
        <p>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이</p>
        <p>아님을 확인합니다.</p>
        <a>자세히 알아보기</a>
      </SignInBox>
    </div>
  )
}

export default SignInPage