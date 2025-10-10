import styled from "styled-components";
import { AppColor } from "../../../../../core/styles/color/app_color";
import { AppLink } from "../../../../../shared/presentation/compoenent/link/app_link";
import { device } from "../../../../../core/styles/reponsive/responsive";

const FooterComponent = styled.div`
    color: ${AppColor.gray9D};
    box-sizing: border-box;        /* padding을 폭 안으로 포함 */
    overflow-x: hidden;            /* 안전장치 */

    @media ${device.mobile} {
        padding: 20px 24px;
    }

    @media ${device.tablet} {
        padding: 60px 24px;
    }

    @media ${device.desktop} {
        padding: 60px 10%;
    }
`;

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 20px 0px;
    margin: 20px 0;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;

    @media ${device.mobile} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

function SignInFooter() {
    return (
        <FooterComponent>
            <p style={{ fontSize: "16px" }}>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)(무료 전화)</p>
            <Wrap>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>자주 묻는 질문</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>고객 센터</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>이용 약관</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>개인정보 처리방침</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>쿠키 설정</AppLink>
                <AppLink $underline={true} $textColor={AppColor.gray9D}>기업 정보</AppLink>
            </Wrap>
            <div style={{ fontSize: "12px" }}>
                <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</p>
                <p>대표: 레지널드 숀 톰슨</p>
                <p>이메일 주소: korea@netflix.com</p>
                <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
                <p>사업자등록번호: 165-87-00119</p>
                <p>클라우드 호스팅: Amazon Web Services Inc.</p>
                <p>공정거래위원회 웹사이트</p>
            </div>
        </FooterComponent>
    )
}

export default SignInFooter