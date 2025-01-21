import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (isError: boolean) => css`
  position: relative;
  display: flex;

  width: 35rem;
  height: 10rem;

  padding: 1.55rem 1.8rem;

  align-items: center;

  border-radius: 10px;
  box-shadow: inset 0 0 0 1px
    ${isError ? theme.color.primaryPink1 : theme.color.dark1};

  background-color: #2d3643;

  transition: 0.2s ease-in-out;

  :focus-within {
    box-shadow: inset 0 0 0 1px ${theme.color.primaryBlue3};
  }
`;

export const textareaStyle = css`
  width: 100%;
  height: 100%;

  resize: none;
`;

export const countStyle = css`
  position: absolute;

  right: 0;
  bottom: 0;

  ${theme.font.body3}
`;
