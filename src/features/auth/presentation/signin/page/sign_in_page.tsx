import { SignInBackground } from "../component/sign_in_background"
import SignInBox from "../component/sign_in_box"
import SignInFooter from "../component/sign_in_footer"
import SignInLogo from "../component/sign_in_logo"

function SignInPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "block" }}>
      <SignInBackground>
        <SignInLogo />
        <SignInBox />
      </SignInBackground>
      <SignInFooter />
    </div>
  )
}

export default SignInPage