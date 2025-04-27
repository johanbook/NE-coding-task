import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

const container = document.getElementById("root") as HTMLElement;

const queryClient = new QueryClient({
  defaultOptions: {
    // We want to to as few requests as possible
    // as Google Book API is ratelimited
    queries: {
      // Do not refetch on focusing tab
      refetchOnWindowFocus: false,
      // Avoid retries on failed request
      retry: false,
    },
  },
});

const root = createRoot(container);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
