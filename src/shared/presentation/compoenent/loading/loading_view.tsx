import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";

const LoadingViewComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: ${AppColor.blackOpacity};
`;

export function LoadingView() {
    return (
        <LoadingViewComponent>
            <h3>
                Loading...
            </h3>
        </LoadingViewComponent >
    )
}