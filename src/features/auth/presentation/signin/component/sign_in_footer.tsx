import styled from "styled-components";
import { AppColor } from "../../../../../core/styles/color/app_color";
import { Row } from "../../../../../shared/presentation/compoenent/align/row";
import { AppLink } from "../../../../../shared/presentation/compoenent/link/app_link";
import { device } from "../../../../../core/styles/reponsive/responsive";

const FooterComponent = styled.div`
    color: ${AppColor.gray9D};
    font-size: 14px;

    @media ${device.mobile} {
        padding: 20px 24px;
    }

    @media ${device.tablet} {
        padding: 60px 24px;
    }

    @media ${device.desktop} {
        padding: 60px 200px;
    }
`;

function SignInFooter() {
    return (
        <FooterComponent style={{ color: AppColor.gray9D, fontSize: "14px" }}>
            <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)(무료 전화)</p>
            <Row style={{ flexWrap: "wrap", gap: "60px" }}>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>자주 묻는 질문</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>고객 센터</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>이용 약관</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>개인정보 처리방침</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>쿠키 설정</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>기업 정보</AppLink>
            </Row>
        </FooterComponent>
    )
}

export default SignInFooter