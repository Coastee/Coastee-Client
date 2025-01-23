import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

import type { ButtonProps } from "./Button";

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 10px;

  font-weight: 500;

  white-space: nowrap;

  transition: all 0.1s ease-in;
`;

export const variantStyles: Record<
  Required<ButtonProps>["variant"],
  ReturnType<typeof css>
> = {
  primary: css`
    padding: 1rem 2.6rem;

    ${theme.font.body1};
    color: ${theme.color.white};
    font-weight: 500;

    background-color: ${theme.color.primaryBlue2};

    &:hover {
      scale: 1.01;

      background-color: ${theme.color.primaryBlue3};
    }
  `,
  secondary: css`
    padding: 1rem 2.6rem;

    border: 1px solid ${theme.color.dark1};

    ${theme.font.body1};
    color: ${theme.color.white};
    font-weight: 500;

    background-color: ${theme.color.dark3};

    &:hover {
      background-color: ${theme.color.dark2};

      scale: 1.01;
    }
  `,
};
