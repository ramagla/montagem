// src/styles/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: ${({ theme }) => (theme as any).layout?.maxW || "1200px"};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Helvetica Neue", sans-serif;
    background: ${({ theme }) => (theme as any).colors?.bg || "#fff"};
    color: ${({ theme }) => (theme as any).colors?.text || "#1A1A1A"};
  }

  /* Unificação de largura global: aplica ao .container do Bootstrap e à sua classe utilitária */
  body .container,
  .section-container {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width) !important;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const theme = {
  colors: {
    brand: "#D90429",
    dark: "#0B0B0C",
    text: "#1A1A1A",
    subtext: "#5A5A63",
    border: "#E6E6EA",
    bg: "#FAFAFC",
    card: "#FFFFFF",
    success: "#0EA371",
  },
  radius: {
    md: "12px",
    lg: "16px",
    xl: "20px",
  },
  shadow: {
    sm: "0 2px 10px rgba(0,0,0,.06)",
    md: "0 8px 30px rgba(0,0,0,.08)",
  },
  layout: {
    maxW: "1160px",
  },
};
export default theme;
