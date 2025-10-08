import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import "@/theme/fonts.css";
import App from "@/App.tsx";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "@/theme";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider enableCssLayer>
          <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
