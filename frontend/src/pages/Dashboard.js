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
      data: "Jane Doe"
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
      data: "14/07/2002"
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

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        pb: 5
      }}>
      <Grid container spacing={6} style={{ padding: "3rem" }}>
        <Grid item xs={12} md={4}>
          <ContentCard>
            <Box display="flex">
              <Box>
                <Avatar
                  alt="Profile Photo"
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Box sx={{ pl: "1.5rem" }}>
                <Typography variant="h4" component="div" style={{ marginBottom: "0.3rem" }}>
                  Jane Doe
                </Typography>
                <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
                  <Typography variant="subtitle1" component="span">
                    Scholar ID: 1915055
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "baseline" }}>
                  <Typography variant="subtitle1" component="span">
                    Semester: 6<sup>th</sup>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </ContentCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <ContentCard>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Personal Email ID: janedoe@gmail.com
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Institute Email ID: janedoe@ei.nits.ac.in
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline" }}>
              <Typography variant="subtitle1" component="span">
                Branch: EIE&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Batch: 2019-23
              </Typography>
            </Box>
          </ContentCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <ContentCard>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ mt: 0.9 }} align="center" variant="subtitle1">
                Current CGPA: 8.3 <br />
                (Out of 10)
              </Typography>
              <Box width="100px">
                <CircularProgressbar
                  value={83}
                  text={"8.3"}
                  styles={buildStyles({
                    // textColor: props.textColor,
                    pathColor: "rgba(0,212,255,1)"
                  })}
                />
              </Box>
            </Box>
          </ContentCard>
        </Grid>
      </Grid>

      <ContentCard sx={{ maxWidth: "800px", ml: 6 }}>
        <Typography variant="h4" align="center">
          CGPA VARIATIONS
        </Typography>
        <Typography variant="subtitle1" align="center">
          (till 6<sup>th</sup> sem)
        </Typography>
        <CBarChart />
      </ContentCard>

      <Typography variant="h4" sx={{ mt: "3.2rem", ml: "3rem" }}>
        Courses Attended
      </Typography>
      <Grid container spacing={6} style={{ padding: "2rem 3rem" }}>
        <Grid item xs={12} md={4}>
          <ContentCard>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Subject: Computer Networks
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Subject ID: EI-301&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Semester: 6
                <sup>th</sup>
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Coordinator: Dr. Ranjay Hazra
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.5rem" }}>
              <Typography variant="subtitle1" component="span">
                Performance:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.8rem"
              }}>
              <Box width="100px" sx={{ ml: "1.2rem" }}>
                <CircularProgressbar
                  value={87}
                  text={"8.7"}
                  styles={buildStyles({
                    pathColor: "rgba(0,212,255,1)"
                  })}
                />
              </Box>
              <Box width="100px" sx={{ mr: "1.2rem" }}>
                <CircularProgressbar
                  value={87}
                  text={"87"}
                  styles={buildStyles({
                    pathColor: "rgba(0,212,255,1)"
                  })}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.8rem"
              }}>
              <Box width="200px" sx={{ ml: "0.9rem" }}>
                <Typography
                  variant="body2"
                  component="span"
                  color="text.secondary"
                  sx={{ fontSize: "0.8rem" }}>
                  Grade: (Out of 10)
                </Typography>
              </Box>
              <Box width="200px" sx={{ mr: "0.6rem", textAlign: "right" }}>
                <Typography
                  variant="body2"
                  component="span"
                  color="text.secondary"
                  sx={{ fontSize: "0.8rem" }}>
                  Marks: (Out of 100)
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box style={{ display: "flex", alignItems: "baseline", marginTop: "0.7rem" }}>
              <Typography variant="subtitle1" component="span">
                Session: Jan-June, 2022
              </Typography>
            </Box>
          </ContentCard>
        </Grid>
      </Grid>

      <Typography variant="h4" sx={{ mt: "1rem", ml: "3rem" }}>
        Projects
      </Typography>
      <Grid container spacing={6} style={{ padding: "2rem 3rem" }}>
        <Grid item xs={12} md={6}>
          <ContentCard>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Project Name: Smart Docs
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Developer(s): Buddies Until SDE<sup>'</sup>s Group
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "3rem" }}>
              <Typography variant="subtitle1" component="span">
                Project Description: This is a Document Management System made for National
                Institute of Technology, Silchar.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
              <Box>
                <Button size="large" variant="contained" startIcon={<GitHubIcon />} color="success">
                  GitHub
                </Button>
              </Box>
              <Box>
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
                  color="error">
                  Visit Website
                </Button>
              </Box>
            </Box>
          </ContentCard>
        </Grid>
      </Grid>

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

export default Dashboard;
