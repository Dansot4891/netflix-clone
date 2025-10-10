import styled from "styled-components";

type CenterProps = {
  $margin?: string;
};

export const Center = styled.div<CenterProps>`
  margin: ${({ $margin }) => $margin ?? "0px"};
  display: flex;
  justify-content: center;
`;
