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
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "../../../../core/store/store";
import { getHomeData, setShowCard } from "../controller/main_view_model";

function MainPage() {
  const dispatch = useDispatch<AppDispatch>(); // 타입 지정!
  const { homeData, loading, showCard } = useSelector((state: RootState) => state.main);

  useEffect(() => {
    dispatch(getHomeData()); // 이제 작동!
  }, [dispatch]);

  return (
    <div>
      {loading && <LoadingView />}
      {showCard && (
        <MainShowCard
          item={showCard}
          setShowCardData={() => dispatch(setShowCard(null))}
        />
      )}
      <MainBackground>
        <MainHeader />
        <MainIntro />
      </MainBackground>
      <div style={{ backgroundColor: AppColor.black }}>
        <MainMemberShip />
        <MainDisplay
          data={homeData}
          setShowCardData={(item) => dispatch(setShowCard(item))}
        />
        <MainShow />
      </div>
      <Footer $backgroundColor={AppColor.black} />
    </div>
  );
}

export default MainPage;