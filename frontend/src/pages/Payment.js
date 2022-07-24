/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, {useContext} from "react";
import {
  Paper,
  Typography,
  CardContent,

  Box,
  Card,
  Grid,
  useTheme
} from "@mui/material";

import "react-circular-progressbar/dist/styles.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import EmailIcon from "@mui/icons-material/Email";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountCard from "./AccountCard";
import PaymentTable from "./PaymentTable";
import { AppContext } from "../context";

const ContentCard = ({ children, ...rest }) => {
  const theme = useTheme();

  return (
    <Card
      {...rest}
      variant="outlined"
      style={{
        borderRadius: "12px",
        boxShadow: theme.shadows[8],
        border: "none",
        padding: "1rem"
      }}>
      <CardContent style={{ paddingBottom: "1rem" }}>{children}</CardContent>
    </Card>
  );
};

const Payment = () => {
  const { state, actions } = useContext(AppContext);
  React.useEffect(() => {
    actions.getPayments();
  }, [])

  console.log(state.payments);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        pb: 5
      }}>
      <Typography variant="h4" sx={{ mt: "1rem", ml: "3rem" }}>
        Payment Details
      </Typography>
      <Grid container justifyContent={"center"} spacing={6} sx={{ padding: "2rem 3rem" }}>
        <Grid item xs={12} md={6}>
          <ContentCard>
            <AccountCard detail={state.payments} />
          </ContentCard>
        </Grid>
      </Grid>
      <Box sx={{ p: "2rem 3rem" }}>
        <PaymentTable payments={state?.payments?.prevPayments} />
      </Box>
    </Paper>
  );
};

export default Payment;
