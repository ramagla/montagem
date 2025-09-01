import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{ box-sizing: border-box; }
  html, body, #root{ height:100%; }
  body{
    margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: ${({theme}) => (theme as any).colors.text};
    background: ${({theme}) => (theme as any).colors.bg};
  }
  a{ color: inherit; text-decoration: none; }
  img{ max-width: 100%; display: block; }
  button{ cursor: pointer; }
  ::selection{ background: ${({theme}) => (theme as any).colors.brand}; color: #fff; }
`;
