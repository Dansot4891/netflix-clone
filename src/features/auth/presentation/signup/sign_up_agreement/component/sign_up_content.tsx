import { AppColor } from "../../../../../../core/styles/color/app_color";
import styled from "styled-components";

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
`;

export function SignUpContent({ children }: { children: React.ReactNode }) {
    return (
        <SignUpAgreementPageContent>
            {children}
        </SignUpAgreementPageContent>
    )
}
