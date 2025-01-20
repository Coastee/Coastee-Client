import { css } from "@emotion/react";

const color = {
  // White
  white: "#ffffff",
  white1: "#f6f6f6",
  white2: "#f0f0f0",

  // Gray
  gray0: "#dfdfdf",
  gray1: "#cacaca",
  gray2: "#b9b9b9",
  gray3: "#969696",
  gray4: "#666666",

  // Dark-Blue
  darkBlue0: "#2b3340",
  darkBlue1: "#1d2229",

  // Black
  black: "#000000",

  // Primary
  primaryBlue0: "#9fb3ff",
  primaryBlue1: "#6b8afd",
  primaryBlue2: "#3d66ff",
  primaryPink0: "#ff9fbc",
  primaryPink1: "#ff6593",
};

const font = {
  title: css({
    fontSize: "3.2rem",
    letterSpacing: "-0.64px",
  }),

  body1: css({
    fontSize: "1.6rem",
    letterSpacing: "-0.32px",
  }),

  body2: css({
    fontSize: "1.4rem",
    letterSpacing: "-0.28px",
  }),

  body3: css({
    fontSize: "1.2rem",
    letterSpacing: "-0.24px",
  }),
};

export const theme = {
  color,
  font,
};
