import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import theme from "./theme/index.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </StrictMode>
);
