import { AppColor } from "../../../../core/styles/color/app_color";
import { Footer } from "../../../../shared/presentation/compoenent/footer/footer";
import { LoadingView } from "../../../../shared/presentation/compoenent/loading/loading_view";
import { MainBackground } from "../component/main_background";
import { MainDisplay } from "../component/main_display";
import { MainHeader } from "../component/main_header";
import { MainIntro } from "../component/main_intro";
import { MainMemberShip } from "../component/main_member_ship";
import { MainShow } from "../component/main_show";
import { MainShowCard } from "../component/main_show_card";
import { MainViewModel } from "../controller/main_view_model";

function MainPage() {
  const mainViewModel = MainViewModel();
  return (
    <div>
      {mainViewModel.loading && <LoadingView />}
      {mainViewModel.showCard && <MainShowCard item={mainViewModel.showCard} setShowCardData={() => mainViewModel.setShowCardData(null)} />}
      <MainBackground >
        <MainHeader />
        <MainIntro />
      </MainBackground>
      <div style={{ backgroundColor: AppColor.black }}>
        <MainMemberShip />
        <MainDisplay data={mainViewModel.homeData} setShowCardData={mainViewModel.setShowCardData} />
        <MainShow />
      </div>
      <Footer $backgroundColor={AppColor.black} />
    </div>
  )
}

export default MainPage