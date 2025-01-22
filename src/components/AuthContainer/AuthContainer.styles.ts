import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const sectionStyle = css`
  display: flex;

  padding: 5rem 7.8rem 5rem 6rem;
`;

export const titleStyle = css`
  margin-bottom: 1.2rem;

  color: ${theme.color.white};

  font-weight: 600;
  ${theme.font.title};
`;

export const descStyle = css`
  color: ${theme.color.white2};

  ${theme.font.body1};
`;

export const childrenStyle = css`
  display: flex;

  flex-direction: column;

  gap: '1.8rem';
`;

export const sideStyle = css`
  display: flex;

  flex-direction: column;

  gap: '2.1rem'
`;
