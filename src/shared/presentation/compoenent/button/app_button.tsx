import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";

type ButtonProps = {
    $color?: string;
    $width?: string;
    $textColor?: string;
};

export const AppButton = styled.button<ButtonProps>`
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
  font-weight: 500;
  border: none;
  width: ${({ $width }) => $width ?? "100%"};
  cursor: pointer;
  background-color: ${({ $color }) => $color ?? AppColor.main};
  color: ${({ $textColor }) => $textColor ?? AppColor.white};

  &:hover {
    filter: brightness(0.9);
  }
`;