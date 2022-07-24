import React from "react";
import { Grid, Paper } from "@mui/material";
const Heading = () => {
  const paperStyle = { padding: "3px 2px", margin: "20px auto", textAlign: "center" };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <h1 style={{ color: "#1F4690" }}>NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR</h1>
      </Paper>
    </Grid>
  );
};

export default Heading;
