import React from "react";
import { Paper, FormGroup, FormControlLabel, Switch, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { toogleTheme } from "../redux/slices/theme";

const Dashboard = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const ToggleSwitch = () => {
    return (
      <div>
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
        height: "100%",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <ToggleSwitch />
      <Typography variant="h1">Demo Dashboard Page</Typography>
    </Paper>
  );
};

export default Dashboard;
