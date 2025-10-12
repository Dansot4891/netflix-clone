import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";

export default function LoadingView() {
  return (
    <Overlay>
      <Spinner />
      <Text>로딩 중입니다...</Text>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); /* 배경 반투명 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 모든 화면 위로 */
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid ${AppColor.gray3E};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.p`
  margin-top: 16px;
  color: white;
  font-size: 16px;
`;
