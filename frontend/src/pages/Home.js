import React from "react";
import { Paper, FormGroup, FormControlLabel, Switch, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { toogleTheme } from "../redux/slices/theme";

const Home = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px"
        }}>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={theme.darkTheme} onChange={() => dispatch(toogleTheme())} />}
            label="Toggle Theme"
          />
        </FormGroup>
      </div>
    );
  };

  return (
    <Paper
      sx={{
        minHeight: "100vh",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <ToggleSwitch />
      <Typography variant="h1">Demo Home Page</Typography>
    </Paper>
  );
};

export default Home;
