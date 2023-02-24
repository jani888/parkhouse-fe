import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#242424",
    },
    text: {
      primary: "#ffffff",
    },
    secondary: {
      main: "#8D8D8D",
    },
    primary: {
      main: "#5A87DF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        disableElevation: true,
        root: {
          boxShadow: "none",
          borderRadius: 100,
          height: 42,
          fontWeight: "bold",
        },
        containedPrimary: {
          background: "linear-gradient(266.12deg, #39ADEB 0%, #5800C9 97.58%)",
        },
      },
    },
  },
  typography: {
    h1: {
      color: "white",
      fontSize: "32px",
      fontWeight: 900,
    },
    h2: {
      color: "white",
      fontSize: "24px",
      fontWeight: 900,
    },
    h3: {
      color: "white",
      fontSize: "18px",
      fontWeight: 900,
    },
    h4: {
      color: "white",
      fontSize: "16px",
      fontWeight: 900,
    },
    h5: {
      color: "white",
      fontSize: "12px",
      fontWeight: 900,
    },
  },
});
