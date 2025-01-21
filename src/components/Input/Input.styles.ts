import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  isError: boolean
) => css`
  display: flex;

  width: 35rem;
  height: 5rem;

  padding: 1.55rem 1.8rem;

  gap: ${hasLeftIcon && "1.35rem"};
  justify-content: ${hasRightIcon && "space-between"};
  align-items: center;
  flex-shrink: 0;

  border-radius: 10px;
  box-shadow: inset 0 0 0 1px
    ${isError ? theme.color.primaryPink1 : theme.color.dark1};

  background-color: #2d3643;

  transition: 0.2s ease-in-out;

  :focus-within {
    box-shadow: inset 0 0 0 1px ${theme.color.primaryBlue3};
  }
`;

export const inputStyle = () => css`
  width: 35rem;

  border: none;

  color: ${theme.color.gray1};
  background-color: transparent;

  outline: none;
  transition: 0.2s ease-in-out;

  ::placeholder {
    ${theme.font.body1};
  }
`;
