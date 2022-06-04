import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const common = {
  typography: {
    fontFamily: ["Poppins", "Raleway", "Open Sans"].join(",")
  }
};

export const lightTheme = responsiveFontSizes(
  createTheme({
    typography: {
      ...common.typography
    },
    palette: {
      mode: "light",
      background: {
        paper: "#f2f2f2"
      },
      text: {
        primary: "#11111"
      }
    }
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    typography: {
      ...common.typography
    },
    palette: {
      mode: "dark",
      background: {
        paper: "#222"
      },
      text: {
        primary: "#fff"
      }
    }
  })
);
