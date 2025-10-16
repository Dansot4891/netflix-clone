import { AppColor } from "../../../core/styles/color/app_color";
import { Footer } from "../../../shared/presentation/compoenent/footer/footer";
import { MainBackground } from "../component/main_background";
import { MainHeader } from "../component/main_header";
import { MainIntro } from "../component/main_intro";
import { MainMemberShip } from "../component/main_member_ship";
import { MainShow } from "../component/main_show";

function MainPage() {
  return (
    <div>
      <MainBackground >
        <MainHeader />
        <MainIntro />
      </MainBackground>
      <div style={{ backgroundColor: AppColor.black }}>
        <MainMemberShip />
        <MainShow />
      </div>
      <Footer $backgroundColor={AppColor.black} />
    </div>
  )
}

export default MainPage