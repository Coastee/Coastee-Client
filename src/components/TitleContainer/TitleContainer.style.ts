import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const titleContainerStyle = css`
  border: 1px solid red;
`;

export const headerStyle = css`
  border: 1px solid blue;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0;
`;

export const titleStyle = css`
  ${theme.font.title2};
  padding: 0.3rem;
`;
