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
    background: {
      default: "#191919",
    },
  },
});
