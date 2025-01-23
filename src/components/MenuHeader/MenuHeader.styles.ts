import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 23.2rem;
  height: 100vh;
  padding: 2.8rem 3.4rem;
  border-radius: 2.5rem;
  background-color: ${theme.color.dark3};
`;

export const menuListStyle = css`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 1.4rem;
  width: 100%;
`;

export const menuItemStyle = css`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  width: 100%;
  height: 5rem;
  padding: 1.8rem 2rem;
  border: 1px solid ${theme.color.dark1};
  border-radius: 1rem;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  svg {
    height: 100%;

    path {
      fill: ${theme.color.primaryBlue1};
      transition: fill 0.3s ease;
    }
  }

  span {
    margin: 0;
    padding: 0;
    ${theme.font.body1};
    font-weight: 500;
    color: ${theme.color.white};
  }

  :hover {
    border-color: ${theme.color.primaryBlue2};
    background-color: ${theme.color.primaryBlue2};
    scale: 1.05;

    svg path {
      fill: ${theme.color.white};
    }
  }
`;

export const activeMenuItemStyle = css`
  border-color: ${theme.color.primaryBlue2};
  background-color: ${theme.color.primaryBlue2};

  svg path {
    fill: ${theme.color.white};
  }

  span {
    color: ${theme.color.white};
  }
`;
