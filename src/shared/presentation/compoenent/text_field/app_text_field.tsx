import styled from "styled-components";
import { AppColor } from "../../../../core/styles/color/app_color";

type TextFieldProps = {
    $placeholderTextColor?: string;
    $backgroundColor?: string;
    $borderColor?: string;
    $textColor?: string;
    $fontSize?: string;
    $marginBottom?: string;
    $focusBorderColor?: string;
};

export const AppTextField = styled.div<TextFieldProps>`
    flex: 1;
    input{
        padding: 16px 12px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid ${({ $borderColor }) => $borderColor ?? "rgb(180, 180, 180)"};
        background-color:${({ $backgroundColor }) => $backgroundColor ?? AppColor.darkBlack};
        color: ${({ $textColor }) => $textColor ?? AppColor.white};
        font-size: ${({ $fontSize }) => $fontSize ?? "16px"};
        cursor: pointer;
        margin-bottom: ${({ $marginBottom }) => $marginBottom ?? "12px"};
        outline: none;
        transition: border-color 0.2s ease;
    }

    input:focus {
        border-color: ${({ $focusBorderColor }) => $focusBorderColor ?? AppColor.white};
        outline: none;
    }

    input::placeholder {
        color:${({ $placeholderTextColor }) => $placeholderTextColor ?? AppColor.gray9D};
        font-size: ${({ $fontSize }) => $fontSize ?? "16px"};
    }
`;