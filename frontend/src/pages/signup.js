import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuItem from "@mui/material/MenuItem";
import "./App.css";
import { Box } from "@mui/system";

const Signup = () => {
  const paperStyle = { padding: "25px 20px", width: 500, margin: "20px auto" };
  const headerStyle = { margin: 0, color: "#1F4690" };
  const avatarStyle1 = { backgroundColor: "#1bbd7e" };
  const avatarStyle2 = { backgroundColor: "#1bbd7e" };
  const Stream = [
    {
      value: "Computer Science and Engineering",
      label: "Computer Science and Engineering"
    },
    {
      value: "Electronics and Communication Engineering",
      label: "Electronics and Communication Engineering"
    },
    {
      value: "Electronics and Instrumentation Engineering",
      label: "Electronics and Instrumentation Engineering"
    },
    {
      value: "Electrical Engineering",
      label: "Electrical Engineering"
    },
    {
      value: "Mechanical Engineering",
      label: "Mechanical Engineering"
    },
    {
      value: "Civil Engineering",
      label: "Civil Engineering"
    }
  ];

  const [Branch, setBranch] = React.useState("EUR");

  const handleChange = (event) => {
    setBranch(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <Grid>
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle1}>
                <AccountCircleIcon />
              </Avatar>
              <h1 style={headerStyle}>Personal Details</h1>
              <Typography variant="caption">
                Please fill the form to complete the Registration process.{" "}
              </Typography>
            </Grid>
            <form>
              <TextField margin="dense" fullWidth label="Full Name"></TextField>
              <TextField margin="dense" fullWidth label="Parents/Guardian Name"></TextField>
              <TextField margin="dense" fullWidth label="Email Id"></TextField>
              <TextField margin="dense" fullWidth label="All India Rank"></TextField>

              <TextField
                margin="dense"
                fullWidth
                select
                label="Branch"
                value={Branch}
                onChange={handleChange}
                helperText="Please select your Branch">
                {Stream.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField margin="dense" fullWidth label="Mobile Number"></TextField>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup>
                  <div>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"></FormControlLabel>
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"></FormControlLabel>
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"></FormControlLabel>
                  </div>
                </RadioGroup>
              </FormControl>

              <TextField margin="dense" fullWidth label="Password"></TextField>
            </form>
          </Paper>
        </Grid>
      </div>

      <Box sx={{ mx: 3 }} />

      <div>
        <Grid>
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle2}>
                <AccountBalanceIcon />
              </Avatar>
              <h1 style={headerStyle}>Bank Account Details</h1>
            </Grid>
            <form>
              <TextField margin="dense" fullWidth label="Account Holder Name"></TextField>
              <TextField margin="dense" fullWidth label="Account Number"></TextField>
              <TextField margin="dense" fullWidth label="IFSC Code"></TextField>
              <TextField margin="dense" fullWidth label="Bank Name"></TextField>
              <TextField margin="dense" fullWidth label="Branch Name"></TextField>
            </form>
          </Paper>
          <Button variant="contained" SendIcon={<SendIcon />}>
            Submit
          </Button>
        </Grid>
      </div>
    </Box>
  );
};

export default Signup;
