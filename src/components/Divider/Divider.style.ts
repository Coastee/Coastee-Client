import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (variant: "single" | "date") => css`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: center;

  gap: ${variant === "date" ? "4.1rem" : "0"};
`;

export const dividerStyle = css`
  width: 100%;
  height: 0.1rem;

  border: none;

  background-color: #657791;
`;

export const childrenStyle = css`
  white-space: nowrap;

  ${theme.font.body3}

  color: ${theme.color.gray1}
`;
