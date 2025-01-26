import { theme } from "@/styles/theme/theme";
import { css, keyframes } from "@emotion/react";

const fallDownAnimation = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0.3;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const logo1Style = css`
  position: absolute;

  top: 15%;
  left: 0%;

  width: 73.8rem;
  height: 63.7rem;

   animation:
    ${fallDownAnimation} 2.5s ease-in-out forwards,
    ${floatAnimation} 2s ease-in-out infinite 3.8s;
`;

export const logo2Style = css`
  position: absolute;

  top: 0%;
  right: 0%;

  width: 61.6rem;
  height: 72.8rem;

  animation: ${fallDownAnimation} 3.5s ease-in-out forwards,
  ${floatAnimation} 3s ease-in-out infinite 3.8s;
`;

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
  gap: 1.6rem;

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
  align-items: center;

  gap: 0.3rem;

  color: ${theme.color.white2};

  font-weight: 400;
  ${theme.font.body1};

  white-space: pre-line;
`;

export const childrenStyle = css`
  display: flex;

  flex-direction: column;
  flex-grow: 1;
  gap: 1.8rem;

  align-items: flex-end;

  padding-top: 7.1rem;
`;

export const sideStyle = css`
  display: flex;

  flex-direction: column;
  flex-grow: 1;
  gap: '2.1rem'
`;
