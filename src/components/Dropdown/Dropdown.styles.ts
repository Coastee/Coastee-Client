import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const containerStyle = css`
  position: absolute;

  flex-direction: column;
  row-gap: 0.3rem;

  margin-top: 4rem;

  padding: 0.5rem;

  border-radius: 1rem;

  background-color: ${theme.color.dark1};

  z-index: 1;
`;

export const listBarStyle = css`
  display: flex;
  align-items: center;

  padding: 0 1.2rem;

  width: 100%;
  height: 2.5rem;

  border-radius: 0.8rem;

  background-color: ${theme.color.dark1};

  ${theme.font.body2};
  color: ${theme.color.gray2};

  cursor: pointer;

  &:hover {
    color: ${theme.color.white};

    background-color: ${theme.color.dark0};
  }
`;
