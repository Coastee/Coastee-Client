import { css } from "@emotion/react";
import { theme } from "@/styles/theme/theme";

export const containerStyle = css`
  width: 23.2rem;
  height: 100vh;
  border-radius: 2.5rem;
  background-color: ${theme.color.dark3};
  padding: 28px 34px;
`;

export const logoStyle = css`
  margin-bottom: 1.8rem;
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
  padding: 1.8rem 2rem;
  width: 100%;
  height: 5rem;
  border: 1px solid ${theme.color.dark1};
  border-radius: 1rem;

  svg {
    height: 100%;
    path {
      fill: ${theme.color.primaryBlue1};
    }
  }

  span {
    font-weight: 500;
    margin: 0;
    padding: 0;
    ${theme.font.body1};
  }

  :hover {
    border-color: ${theme.color.primaryBlue2};
    background-color: ${theme.color.primaryBlue2};
    transition: background-color 0.3s ease;
    svg path {
      transition: fill 0.3ms ease;
      fill: ${theme.color.white}; // hover 시 fill 변경
    }
  }
`;
