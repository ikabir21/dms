/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
  Card,
  Grid,
  useTheme,
  Avatar
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CBarChart from "../components/BarChart";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import EmailIcon from "@mui/icons-material/Email";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountCard from "./AccountCard";
import PaymentTable from "./PaymentTable";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const bankDetails = [
  [
    {
      id: 1,
      icon: <PersonIcon />,
      title: "Account Holder Name",
      data: "Gaurab Das"
    },
    {
      id: 2,
      icon: <AccountBalanceIcon />,
      title: "Account Number",
      data: "3976 7483 2939 5234"
    },
    {
      id: 3,
      icon: <AccountBalanceIcon />,
      title: "IFSC Code",
      data: "SBIN28490299"
    },
    {
      id: 4,
      icon: <AccountBalanceIcon />,
      title: "CIF Number",
      data: "7376 3363 8728 2984"
    },
    {
      id: 5,
      icon: <CakeIcon />,
      title: "Date Of Birth",
      data: "05/12/2000"
    }
  ],
  [
    {
      id: 6,
      icon: <AccountBalanceIcon />,
      title: "Account Type",
      data: "Savings"
    },
    {
      id: 7,
      icon: <PlaceIcon />,
      title: "Branch",
      data: "Silchar"
    },
    {
      id: 8,
      icon: <MobileFriendlyIcon />,
      title: "Phone Number",
      data: "7424872882"
    },
    {
      id: 9,
      icon: <EmailIcon />,
      title: "Email ID",
      data: "janedoe@gmail.com"
    },
    {
      id: 10,
      icon: <CurrencyRupeeIcon />,
      title: "Account Balance",
      data: "13,845"
    }
  ]
];

const Payment = () => {
  const theme = useTheme();

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
      <Grid container spacing={6} style={{ padding: "2rem 3rem" }}>
        <Grid item xs={12} md={6}>
          <ContentCard>
            <AccountCard detail={bankDetails[0]} />
          </ContentCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentCard>
            <AccountCard detail={bankDetails[1]} />
          </ContentCard>
        </Grid>
      </Grid>
      <Box sx={{ p: "2rem 3rem" }}>
        <PaymentTable />
      </Box>
    </Paper>
  );
};

export default Payment;
