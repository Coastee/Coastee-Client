import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const inputStyle = css`
  width: 35rem;
  height: 5rem;

  padding: 1.55rem 1.8rem;

  border-radius: 10px;
  border: 1px solid ${theme.color.dark1};

  color: ${theme.color.gray1};
  background-color: #2d3643;

  outline: none;

  ::placeholder {
    ${theme.font.body1};
  }
`;
