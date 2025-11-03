import { AppColor } from "../../../../../../core/styles/color/app_color";
import styled from "styled-components";
import { device } from "../../../../../../core/styles/reponsive/responsive";

const SignUpAgreementPageContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 20px;
    margin: 0 30%;
    color: ${AppColor.black};
    

    img{
        width: 60px;
        object-fit: cover;
    }

    h2{
        margin-top: 20px;
        margin-bottom: 10px;
    }

    @media ${device.mobile} {
        margin: 0 10%;
    }

    @media ${device.tablet} {
        margin: 0 20%;
    }

    @media ${device.desktop} {
        margin: 0 30%;
    }
`;

export function SignUpContent({ children }: { children: React.ReactNode }) {
    return (
        <SignUpAgreementPageContent>
            {children}
        </SignUpAgreementPageContent>
    )
}
