import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const titleContainerStyle = css``;

export const headerStyle = css`
  display: flex;

  align-items: center;
  gap: 0.2rem;

  margin: 0;
`;

export const titleStyle = css`
  padding: 0.3rem;

  ${theme.font.title2};

  white-space: nowrap;
`;

export const contentStyle = css`
  padding-right: 1rem;
`;
