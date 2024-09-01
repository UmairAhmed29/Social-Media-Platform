import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "#2d2d2d",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.015em",
      color: "#444444",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "#555555",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "#ffffff",
    },
  },
  palette: {
    primary: { main: "#002855", contrastText: "#ffffff" },  // Navy blue
    secondary: { main: "#d4af37", contrastText: "#ffffff" }, // Soft gold
    background: { default: "#ffffff", paper: "#f9f9f9" },
    text: { primary: "#2d2d2d", secondary: "#666666" },
  },
  components: {
    MuiCard: {
      defaultProps: { variant: "elevation" },
      styleOverrides: {
        root: {
          padding: 28,
          borderRadius: 24,
          boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.12)",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          "&:hover": {
            transform: "translateY(-12px)",
            boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.25)",
          },
          backgroundImage: "linear-gradient(145deg, #ffffff 0%, #f9f9f9 100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "32px",
          padding: "14px 32px",
          textTransform: "none",
          boxShadow: "none",
          backgroundColor: "#002855",
          color: "#ffffff",
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          "&:hover": {
            backgroundColor: "#001f40",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
      styleOverrides: {
        root: {
          padding: 36,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.07)",
          backgroundImage: "linear-gradient(145deg, #ffffff 0%, #f9f9f9 100%)",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffffff",
          color: "#2d2d2d",
          fontFamily: "'Poppins', sans-serif",
          margin: 0,
          padding: 0,
          lineHeight: 1.8,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#002855",
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 1px 4px rgba(0, 0, 0, 0.12)",
    "0px 3px 8px rgba(0, 0, 0, 0.2)",
    "0px 8px 12px rgba(0, 0, 0, 0.15)",
    "0px 10px 16px rgba(0, 0, 0, 0.2)",
  ],
  spacing: 8,
  shape: { borderRadius: 16 },
});

export default theme;
