import { css } from "@emotion/react";
import { theme } from "@/styles/theme/theme";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.8rem;
  width: 9.4rem;
  height: 100vh;
  padding: 4.4rem 1.8rem;
  border-radius: 0rem 2.5rem 2.5rem 0rem;
  background: ${theme.color.dark2};

`;

export const serverListStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 1.3rem;
  width: 100%;
`;

export const serverItemStyle = css`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid ${theme.color.dark0};
  border-radius: 1rem;
  cursor: pointer;
  
  :hover {
    scale: 1.1;
    transition: scale 0.3s ease;
  }
`;

export const plusButtonStyle = css`
  width: 2rem;
  height: 2rem;
`;
