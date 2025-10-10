// // Button.tsx
// import styled, { css } from "styled-components";

// type Variant = "solid" | "outline" | "ghost";
// type Size = "sm" | "md" | "lg";

// export const Button = styled.button<{ $variant?: Variant; $size?: Size; $color?: string }>`
//   --btn: ${({ $color, theme }) => $color ?? theme?.colors?.primary ?? "#E50914"};
//   display:inline-flex; align-items:center; justify-content:center; gap:8px;
//   border-radius:8px; font-weight:600; cursor:pointer; transition:filter .15s ease;
//   border:1px solid transparent;

//   ${({ $size = "md" }) => {
//     const s = { sm:["8px","12px","14px"], md:["10px","16px","15px"], lg:["12px","20px","16px"] }[$size];
//     return css`padding:${s[0]} ${s[1]}; font-size:${s[2]};`;
//   }}

//   ${({ $variant = "solid" }) => ({
//     solid:  css`background:var(--btn); color:#fff; border-color:var(--btn);`,
//     outline:css`background:transparent; color:var(--btn); border-color:var(--btn);`,
//     ghost:  css`background:transparent; color:var(--btn);`
//   })[$variant]}

//   &:hover { filter: brightness(0.95); }
//   &:disabled { opacity:.5; pointer-events:none; }
// `;