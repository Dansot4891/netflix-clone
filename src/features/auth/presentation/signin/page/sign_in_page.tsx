import { Footer } from "../../../../../shared/presentation/compoenent/footer/footer";
import { LoadingView } from "../../../../../shared/presentation/compoenent/loading/loading_view";
import { SignInBackground } from "../component/sign_in_background"
import SignInBox from "../component/sign_in_box"
import { Logo } from "../../../../../shared/presentation/compoenent/logo/logo"
import { SignInViewModel } from "../controller/sign_in_view_model";

function SignInPage() {
  const signInViewModel = SignInViewModel();
  return (
    <div>
      {signInViewModel.loading && <LoadingView />}
      <SignInBackground>
        <Logo />
        <SignInBox {...signInViewModel} />
      </SignInBackground>
      <Footer />
    </div>
  )
}

export default SignInPage