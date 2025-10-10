import { AppPath } from "../../../../../core/styles/path/app_path"
import { AppLogoContainer, SignInBackground } from "./sign_in_page.styles"

function SignInPage() {
  return (
    <SignInBackground>
      <AppLogoContainer>
        <img src={AppPath.appLogo} alt="app logo"/>
      </AppLogoContainer>
      <div>
        <h1>로그인</h1>
        <input type="text" placeholder="이메일 또는 휴대폰 번호"/>
        <input type="password" placeholder="비밀번호"/>
        <button>로그인</button>
        <p>또는</p>
        <button>로그인 코드 사용하기</button>
        <p>비밀번호를 잊으셨나요?</p>
        <div>
          
        </div>
      </div>
    </SignInBackground>
  )
}

export default SignInPage