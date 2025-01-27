import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;
`;

export const sectionStyle = (size: "medium" | "large") => css`
  display: flex;

  width: 81rem;
  height: ${size === "large" ? "58.7rem" : "43rem"};

  padding: 5rem 7.8rem 5rem 6rem;

  justify-content: space-between;
  gap: 5rem;

  border-radius: 2.5rem;

  background-color: ${theme.color.dark3};

  z-index: 1;
`;

export const titleStyle = css`
  margin-bottom: 1.2rem;

  color: ${theme.color.white};

  font-weight: 600;
  ${theme.font.title};

  white-space: nowrap;
`;

export const descStyle = css`
  display: flex;

  width: 18rem;

  align-items: center;
  gap: 0.3rem;

  color: ${theme.color.white2};

  font-weight: 400;
  ${theme.font.body1};

  white-space: pre-line;
`;

export const childrenStyle = (size: "medium" | "large") => css`
  display: flex;

  flex-direction: column;
  flex-grow: 1;
  gap: 1.8rem;

  align-items: flex-end;

  padding-top: ${size === "large" ? "3rem" : "7.1rem"};
`;

export const sideStyle = css`
  display: flex;

  flex-direction: column;
  flex-grow: 1;
  gap: 2.1rem;
`;
