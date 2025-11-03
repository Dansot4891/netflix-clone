import styled from "styled-components";
import { AppPath } from "../../../../core/styles/path/app_path";

// 배경 이미지
const HomeBackgroundComponent = styled.div`
  background-image:
    /* 위쪽 어둡게 */
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.18) 20%,
      rgba(0,0,0,0.00) 45%
    ),
    /* 왼쪽 어둡게 */
    linear-gradient(
      to right,
      rgba(0,0,0,0.45) 0%,
      rgba(0,0,0,0.20) 28%,
      rgba(0,0,0,0.00) 50%
    ),
    url(${AppPath.homeBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  display: block;
  padding: 0 0 0 40px;
`;

export function HomeBackground({ children }: { children: React.ReactNode }) {
  return (
    <HomeBackgroundComponent>
      {children}
    </HomeBackgroundComponent>
  )
}
