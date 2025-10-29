import styled from "styled-components";
import { device } from "../../../../core/styles/reponsive/responsive";
import { AppTextField } from "../../../../shared/presentation/compoenent/text_field/app_text_field";
import { AppButton } from "../../../../shared/presentation/compoenent/button/app_button";
import { AppColor } from "../../../../core/styles/color/app_color";

const MainIntroComponent = styled.div`
    text-align: center;
    width: 600px;
    margin: 0 auto;
    padding-top: 160px;

    @media ${device.mobile} {
        width: 400px;
        padding-top: 100px;
    }
    @media ${device.tablet} {
        width: 500px;
        padding-top: 120px;
    }
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
    
    br {
        display: block; // 기본은 줄바꿈
    }
    
    @media ${device.mobile} {
        font-size: 24px;
        br {
            display: none; // 큰 화면에서는 한 줄로
        }
    }

    @media ${device.tablet} {
        font-size: 40px;
    }
`;

const SubTitle = styled.h3`
    font-size: 20px;
    font-weight: semi-bold;
    margin-bottom: 24px;
    margin-top: 12px;

    @media ${device.mobile} {
        font-size: 14px;
        margin-bottom: 8px;
        margin-top: 8px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        margin-bottom: 4px;
        margin-top: 12px;
    }

    @media ${device.desktop} {
        font-size: 20px;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media ${device.mobile} {
        display: block;

        input{
            margin-bottom: 12px;
        }
    }
`;

export function MainIntro() {
    return (
        <MainIntroComponent>
            <Title>
                영화, 시리즈 등을<br />
                무제한으로
            </Title>
            <SubTitle>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</SubTitle>
            <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
            <br />
            <Row>
                <AppTextField $marginBottom="0px">
                    <input type="text" placeholder="이메일 주소" />
                </AppTextField>
                <AppButton $color={AppColor.red} $width="auto" $textColor={AppColor.white}>시작하기</AppButton>
            </Row>
        </MainIntroComponent>
    )
}