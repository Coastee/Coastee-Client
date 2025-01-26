import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const boxWrapperStyle = css`
  display: flex;

  width: 2.4rem;
  height: 2.4rem;

  padding: 0.35rem;

  border: 1px solid ${theme.color.dark1};
  border-radius: 5px;
`;

export const checkboxStyle = css`
  appearance: none;

  width: 1.5rem;
  height: 1.5rem;

  border-radius: 3px;

  flex-shrink: 0;

  cursor: pointer;

  &:checked {
    background-color: ${theme.color.primaryBlue1};

    transition: 0.2s ease-in-out;
  }
`;
