import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Routes } from "./routes/Routes";
import GlobalStyle from "./styles/globalStyle";
import { globalTheme } from "./styles/globalTheme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <GlobalStyle />
          <CssBaseline />
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}
