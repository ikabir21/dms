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
                  src="https://scontent-tir2-2.xx.fbcdn.net/v/t1.6435-1/125524520_1314075878923623_7842039887406294838_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jHneyks_F0EAX-ruSzf&_nc_ht=scontent-tir2-2.xx&oh=00_AT-RaA3OnxnOYp46cmS5lCh8obiXbD5bARSzXy-4Fdfa_Q&oe=62EF1E89"
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Box sx={{ pl: "1.5rem" }}>
                <Typography variant="h4" component="div" style={{ marginBottom: "0.3rem" }}>
                  Gaurab Das
                </Typography>
                <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
                  <Typography variant="subtitle1" component="span">
                    Scholar ID: 1915043
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
                Personal Email ID: gaurab@gmail.com
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Institute Email ID: gaurab@ei.nits.ac.in
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
                Current CGPA: 9.3 <br />
                (Out of 10)
              </Typography>
              <Box width="100px">
                <CircularProgressbar
                  value={83}
                  text={"9.3"}
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
    </Paper>
  );
};

export default Dashboard;
