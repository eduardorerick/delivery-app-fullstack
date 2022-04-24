import { ThemeProvider } from "@mui/material";
import { Routes } from "./routes/Routes";
import { globalTheme } from "./styles/globalTheme";

export default function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Routes />
    </ThemeProvider>
  );
}
