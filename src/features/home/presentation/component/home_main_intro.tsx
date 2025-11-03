import styled from "styled-components";
import { AppButton } from "../../../../shared/presentation/compoenent/button/app_button";
import { AppColor } from "../../../../core/styles/color/app_color";

const HomeMainIntroComponent = styled.div`
    margin-top: 10%;
    font-size: 1vw;
`;

export function HomeMainIntro() {
    return (
        <HomeMainIntroComponent>
            <h2>일요일에 새로운 에피소드 공개 예정</h2>
            <p>대한민국을 대표하는 장수 예능 프로그램 '런닝맨'이
                <br />
                새로운 에피소드를 공개합니다.
            </p>
            <br />
            <div>
                <AppButton style={{ marginRight: '12px' }} $color={AppColor.white} $width="auto" $padding="8px 20px" $textColor={AppColor.black} $fontSize="1vw">재생</AppButton>
                <AppButton $color={AppColor.gray30} $width="auto" $padding="8px 20px" $textColor={AppColor.white} $fontSize="1vw">상세 정보</AppButton>
            </div>
        </HomeMainIntroComponent>
    )
}