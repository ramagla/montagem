import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { router } from "./router";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
