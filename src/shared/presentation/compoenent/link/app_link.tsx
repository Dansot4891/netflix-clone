import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";

type LinkProps = {
  $textColor?: string;
  $underline?: boolean;
  $hoverColor?: string;
  $fontSize?: string;
};

export const AppLink = styled.a<LinkProps>`
color: ${({ $textColor }) => $textColor ?? AppColor.white};
text-decoration: ${({ $underline }) => $underline ? "underline" : "none"};
cursor: pointer;
font-size: ${({ $fontSize }) => $fontSize ?? "16px"};
&:hover {
  color: ${({ $hoverColor }) => $hoverColor == null ? null : $hoverColor};
}
`;