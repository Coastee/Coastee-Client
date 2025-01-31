import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  position: relative;
  display: flex;

  flex-direction: column;
`;

export const layoutStyle = css`
  display: flex;

  padding: 6.5rem 3.5rem 2.5rem;

  flex-direction: column;
  gap: 0.95rem;

  border-radius: 0px 0px 10px 10px;

  background-color: ${theme.color.dark3};
`;

export const linkLayoutStyle = css`
  display: flex;

  margin-left: auto;

  gap: 0.8rem;
`;

export const linkStyle = css`
  width: 3.3rem;
  height: 3.3rem;

  border-radius: 8px;

  background: ${theme.color.dark2};
`;

export const nameStyle = css`
  ${theme.font.title2};

  white-space: nowrap;
`;

export const oneLineIntroStyle = css`
  ${theme.font.body1};
`;

export const introStyle = css`
  max-width: 58rem;
  height: 5.1rem;

  overflow: scroll;

  scroll-behavior: smooth;

  ${theme.font.body2};
`;

export const profileImgStyle = css`
  position: absolute;

  top: 6.5rem;
  left: 3.5rem;

  width: 10rem;
  height: 10rem;

  border: 4px solid ${theme.color.dark3};
  border-radius: 12px;

  object-fit: cover;
`;

export const backgroundImgStyle = css`
  width: 65rem;
  height: 13rem;

  border-radius: 10px 10px 0px 0px;
`;

export const editBtnStyle = css`
  position: absolute;
  display: flex;

  right: 3.3rem;
  top: 2.4rem;

  padding: 0.6rem 1rem;

  gap: 0.8rem;

  border-radius: 7px;

  background-color: rgba(43, 51, 64, 0.5);

  color: ${theme.color.white};
  ${theme.font.body3};

  &:hover {
    background-color: ${theme.color.dark2};

    transition: 0.2s ease-in-out;
  }
`;
