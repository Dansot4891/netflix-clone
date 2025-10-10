import { AppPath } from "../../../../../core/styles/path/app_path"
import { AppLogoContainer, SignInBackground } from "./sign_in_page.styles"
import "./sign_in.css"

function SignInPage() {
  return (
    <div>
      <SignInBackground />
      <AppLogoContainer>
        <img src={AppPath.appLogo} alt="app logo" />
      </AppLogoContainer>
      <div className="sign-in-box">
        <h1>로그인</h1>
        <input type="text" placeholder="이메일 또는 휴대폰 번호" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
        <p>또는</p>
        <button>로그인 코드 사용하기</button>
        <p>비밀번호를 잊으셨나요?</p>
        <div>
          <input type="checkbox" name="agree" />
          <p>로그인 정보 저장</p>
        </div>
        <p>넷플릭스 회원이 아닌가요? <a>지금 가입하세요.</a></p>
        <p>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
        <a>자세히 알아보기</a>
      </div>
    </div>
  )
}

export default SignInPage