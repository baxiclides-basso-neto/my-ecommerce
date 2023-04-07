import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../src/styles/GlobalStyle";
import theme from "../../src/styles/theme";
import IndexPage from "..";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IndexPage />
    </ThemeProvider>
  );
}

export default MyApp;
