import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import img from "../assets/images/auth.gif";
import nits from "../assets/images/nits logo.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function SignInSide() {
  const [alignment, setAlignment] = useState("left");

  setInterval(() => {
    if (window.innerWidth < 900) {
      setAlignment("center");
    } else {
      setAlignment("left");
    }
  }, 100);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    isRememberMe: false
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function handleClickShowPassword() {
    console.log("Clicked show password!");

    setValues((prevValues) => {
      return {
        ...prevValues,
        showPassword: !prevValues.showPassword
      };
    });
  }

  function handleRemember() {
    setValues((prevValues) => {
      return {
        ...prevValues,
        isRememberMe: !prevValues.isRememberMe
      };
    });
  }

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", backgroundColor: "#eee" }}
    >
      <CssBaseline />
      <Grid
        item
        sm={12}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "#eee" }}
      >
        <SvgIcon
          sx={{
            backgroundImage: `url(${nits})`,
            backgroundSize: "cover"
          }}
          style={{
            height: "75px",
            width: "75px",
            marginTop: "1rem",
            marginLeft: "2rem"
          }}
        />
        <Box
          sx={{
            my: 3,
            mx: 4,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            align={alignment}
            sx={{ color: "#000" }}
          >
            Welcome Back!
          </Typography>
          <Typography
            component="h1"
            variant="subtitle1"
            sx={{ mt: 2, mb: 1, color: "#000" }}
            align={alignment}
          >
            Please enter your credentials to login.
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              endadornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isRememberMe}
                  onChange={handleRemember}
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              style={{ borderRadius: "2rem" }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: 1.8 }}
              startIcon={<LoginIcon />}
              onClick={() => console.log(values)}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs={6}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={6} align={"right"}>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        sm={false}
        md={7}
        sx={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    </Grid>
  );
}
