// src/styles/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: ${({ theme }) => (theme as any).layout?.maxW || "1200px"};
  }

  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: ${({ theme }) => (theme as any).colors?.bg || "#fff"};
  }

  /* Classe utilitária para containers */
  .section-container {
    margin: 0 auto;
    max-width: var(--max-width);
    padding-left: 16px;
    padding-right: 16px;
  }
`;
