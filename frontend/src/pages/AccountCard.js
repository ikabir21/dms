/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonIcon from '@mui/icons-material/Person';
import Button from "@mui/material/Button";
import PaymentsIcon from '@mui/icons-material/Payments';

function AccountCard({detail}) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
        <IconButton style={{ marginRight: "0.8rem" }}><PersonIcon /></IconButton>
        Account Holder Name: {detail?.accountHolderName}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
        <IconButton style={{ marginRight: "0.8rem" }}><PersonIcon /></IconButton>
        Account Number: {detail?.accountNo}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
        <IconButton style={{ marginRight: "0.8rem" }}><PersonIcon /></IconButton>
        Account Holder Name: {detail?.accountHolderName}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
        <IconButton style={{ marginRight: "0.8rem" }}><PersonIcon /></IconButton>
        Account Holder Name: {detail?.accountHolderName}
      </Typography>

      <Typography variant="subtitle1">
        <IconButton onClick={handleClick} style={{ marginRight: "0.8rem" }}>
          {clicked ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
        Tap to reveal
      </Typography>
      <Button variant="contained" href="/#/pay-now" color="primary" fullWidth sx={{my: 2}} endIcon={<PaymentsIcon />}>Pay Now</Button>
    </Box>
  );
}

export default AccountCard;
