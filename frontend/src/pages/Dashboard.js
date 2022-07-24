/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, {useEffect, useContext} from "react";
import {
  Paper,
  Typography,
  CardContent,
  Button,
  Box,
  Card,
  Grid,
  useTheme,
  Avatar
} from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CBarChart from "../components/BarChart";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppContext } from "../context";

const ContentCard = ({ children, ...rest }) => {
  const theme = useTheme();

  return (
    <Card
      {...rest}
      variant="outlined"
      sx={{
        borderRadius: "12px",
        boxShadow: theme.shadows[8],
        border: "none",
        padding: "1rem",
        width: "auto"
      }}>
      <CardContent style={{ paddingBottom: "1rem" }}>{children}</CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const { state, actions } = useContext(AppContext);

  useEffect(() => {
    actions.getProfile();
  }, [])

  console.log(state.profile);

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
                  src={state.user?.profileUrl}
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Box sx={{ pl: "1.5rem" }}>
                <Typography variant="h4" component="div" style={{ marginBottom: "0.3rem" }}>
                  {state.profile?.name}
                </Typography>
                <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
                  <Typography variant="subtitle1" component="span">
                    Scholar ID: {state.profile?.scholarId}
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
        <Grid item xs={12} md={5}>
          <ContentCard>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Personal Email ID: {state.profile?.personalEmail}
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Institute Email ID: {state.profile?.instituteEmail}
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline" }}>
              <Typography variant="subtitle1" component="span">
                Branch: {state.profile?.branch?.code}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Batch: 2019-23
              </Typography>
            </Box>
          </ContentCard>
        </Grid>
        <Grid item xs={12} md={3}>
          <ContentCard>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ mt: 0.9 }} align="center" variant="subtitle1">
                CGPA: 9.3 <br />
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
