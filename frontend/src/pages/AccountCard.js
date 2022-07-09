/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function AccountCard(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <Box>
      {props.detail.map((element) => {
        return (
          <Typography key={element.id} variant="subtitle1" sx={{ mb: "0.3rem" }}>
            <IconButton style={{ marginRight: "0.8rem" }}>{element.icon}</IconButton>
            {element.title +
              ": " +
              (element.title === "Account Holder Name" ||
              element.title === "IFSC Code" ||
              element.title === "CIF Number" ||
              element.title === "Account Balance"
                ? clicked
                  ? element.data
                  : "XXXXX"
                : element.data)}
          </Typography>
        );
      })}

      <Typography variant="subtitle1">
        <IconButton onClick={handleClick} style={{ marginRight: "0.8rem" }}>
          {clicked ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
        Tap to reveal
      </Typography>
    </Box>
  );
}

export default AccountCard;
