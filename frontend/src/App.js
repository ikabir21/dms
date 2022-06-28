import React, { Suspense, lazy } from "react";
import { HashRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import { CircularProgress, CssBaseline } from "@mui/material";

// Project Imports
import Routes from "./routes";
import createCustomTheme from "./assets/theme";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={createCustomTheme(theme.darkTheme)}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<CircularProgress color="primary" />}>
          {/* need custom component for loading */}
          <Routes />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
