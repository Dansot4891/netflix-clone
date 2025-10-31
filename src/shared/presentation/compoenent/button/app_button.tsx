import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";

type ButtonProps = {
  $color?: string;
  $width?: string;
  $height?: string;
  $textColor?: string;
  $padding?: string;
};

export const AppButton = styled.button<ButtonProps>`
  align-items: center;
  justify-content: center;
  padding: ${({ $padding }) => $padding ?? "10px"};
  height: ${({ $height }) => $height ?? "auto"};
  border-radius: 4px;
  font-weight: 500;
  border: none;
  font-size: 16px;
  width: ${({ $width }) => $width ?? "100%"};
  cursor: pointer;
  background-color: ${({ $color }) => $color ?? AppColor.main};
  color: ${({ $textColor }) => $textColor ?? AppColor.white};

  &:hover {
    filter: brightness(0.9);
  }
`;