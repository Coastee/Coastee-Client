import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";

import App from "@/App";
import { globalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme/theme";
import { Global, ThemeProvider } from "@emotion/react";
import React from "react";

const queryClient = new QueryClient();

const element = document.getElementById("root");

if (!element) {
  throw new Error("Root element not found.");
}

const root = createRoot(element);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <App />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
