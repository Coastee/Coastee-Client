import { css } from "@emotion/react";
import { theme } from "@/styles/theme/theme";

export const globalStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html,
  body {
    color: ${theme.color.white};
    background-color: ${theme.color.dark4};
    font-size: 62.5%;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
