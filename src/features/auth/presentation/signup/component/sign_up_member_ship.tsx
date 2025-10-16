import styled from "styled-components";
import { AppColor } from "../../../../../core/styles/color/app_color";
import { AppButton } from "../../../../../shared/presentation/compoenent/button/app_button";
import { device } from "../../../../../core/styles/reponsive/responsive";

const SignUpMemberShipComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 56px;
        margin-right: 12px;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 10%;
    width: 100%;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.05);  // 5% 크게
        opacity: 0.9;
    }
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    background-color: ${AppColor.blue};
    border-radius: 12px;
    width: 100%;
    justify-content: space-between;
`;



export function SignUpMemberShip() {
    return (
        <SignUpMemberShipComponent>
            <Container>
                <img src="https://cdn-icons-png.flaticon.com/512/3418/3418886.png" />
                <Row>
                    <div>
                        7,000원이면 만날 수 있는 넷플릭스.
                        <br />
                        가장 경제적인 광고형 멤버십을 이용해 보세요.
                    </div>
                    <AppButton $color={AppColor.gray30} $width="auto" $textColor={AppColor.white}>자세히 알아보기</AppButton>
                </Row>
            </Container>
        </SignUpMemberShipComponent>
    )
}
