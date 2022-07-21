import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Payment from "@mui/icons-material/Payment";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import img from "../assets/images/auth.gif";
import nits from "../assets/images/nits logo.jpg";

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
    personName: "",
    email: "",
    phone: "",
    amount: ""
  });
  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  function isObj(val) {
    return typeof val === "object";
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }

  function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  }

  function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }
  const getData = (data) => {
    // console.log(data);

    return fetch("http://localhost:4000/payments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };
  const makePayment = () => {
    getData({ ...values, name: values.personName }).then((response) => {
      var info = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response
      };
      post(info);
    });
  };
  return (
    <Grid container component="main" sx={{ height: "100vh", backgroundColor: "#eee" }}>
      <CssBaseline />
      <Grid
        item
        sm={12}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "#eee" }}>
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
          }}>
          <Typography component="h1" variant="h3" align={alignment}>
            Payments
          </Typography>
          <Typography component="h1" variant="subtitle1" sx={{ mt: 2, mb: 1 }} align={alignment}>
            Please enter your credentials correctly.
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="personName"
              label="Account Holder Name"
              name="personName"
              autoFocus
              type="text"
              value={values.personName}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              type="number"
              // placeholder="+91"
              value={values.phone}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="amount"
              label="Amount"
              name="amount"
              type="number"
              value={values.amount}
              onChange={handleChange}
            />
            <Button
              style={{ borderRadius: "2rem" }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: 1.8 }}
              startIcon={<Payment />}
              onClick={makePayment}>
              Pay now
            </Button>
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
            t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    </Grid>
  );
}
