import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "./routes/Routes";
import GlobalStyle from "./styles/globalStyle";
import { globalTheme } from "./styles/globalTheme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyle />
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}
