import LoadingView from "../../../../../shared/presentation/compoenent/loading/loading_view";
import { SignInBackground } from "../component/sign_in_background"
import SignInBox from "../component/sign_in_box"
import SignInFooter from "../component/sign_in_footer"
import SignInLogo from "../component/sign_in_logo"
import { useSignInViewModel } from "../controller/sign_in_view_model";

function SignInPage() {
  const {
    state: { email, password, isLoading },
    actions: { setEmail, setPassword, login },
  } = useSignInViewModel();
  return (
    <div>
      {isLoading && <LoadingView />}
      <SignInBackground>
        <SignInLogo />
        <SignInBox
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          login={login}
        />
      </SignInBackground>
      <SignInFooter />
    </div>
  )
}

export default SignInPage