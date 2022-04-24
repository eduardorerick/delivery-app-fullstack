import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
  },
  palette: {
    text: {
      primary: "#f5f5f5",
    },
    primary: {
      main: "#ae2d68",
      dark: "#660f56",
    },
    secondary: {
      main: "#f5f5f5",
      dark: "#660f56",
    },
    background: {
      default: "#280659",
    },
  },
});
