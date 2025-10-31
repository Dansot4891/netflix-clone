import { AppColor } from "../../../../../../core/styles/color/app_color";
import styled from "styled-components";

const Background = styled.div`
    background-color: ${AppColor.white};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export function SignUpBackground({ children }: { children: React.ReactNode }) {

    return (
        <Background>
            {children}
        </Background>
    )
}
