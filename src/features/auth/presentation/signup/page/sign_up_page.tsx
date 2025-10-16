import { AppColor } from "../../../../../core/styles/color/app_color";
import { Footer } from "../../../../../shared/presentation/compoenent/footer/footer";
import { SignUpBackground } from "../component/sign_up_background";
import { SignUpHeader } from "../component/sign_up_header";
import { SignUpIntro } from "../component/sign_up_intro";
import { SignUpMemberShip } from "../component/sign_up_member_ship";
import { SignupJoinSection } from "../component/sign_up_show";

function SignUpPage() {
  return (
    <div>
      <SignUpBackground>
        <SignUpHeader />
        <SignUpIntro />
      </SignUpBackground>
      <div style={{ backgroundColor: AppColor.black }}>
        <SignUpMemberShip />
        <SignupJoinSection />
      </div>
      <Footer $backgroundColor={AppColor.black} />
    </div>
  )
}

export default SignUpPage