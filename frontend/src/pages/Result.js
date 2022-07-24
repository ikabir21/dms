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
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

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
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        pb: 5
      }}>
      <Typography variant="h4" sx={{ mt: "3.2rem", ml: "3rem" }}>
        Courses Attended
        <Button
          size="large"
          variant="contained"
          endIcon={<AddIcon />}
          sx={{ml: "1rem"}}
          color="success">
            Add New Course
        </Button>
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

            <Grid container spacing={6} style={{ marginTop: "-0.6rem" }}>
              <Grid item xs={12} md={6}>
                <Button fullWidth="true" size="large" variant="outlined" startIcon={<DriveFileRenameOutlineIcon />} color="success">
                  Edit Details
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth="true"
                  size="large"
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  color="error">
                  Delete Course
                </Button>
              </Grid>
            </Grid>

          </ContentCard>
        </Grid>

        <Grid item xs={12} md={4}>
          <ContentCard>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Subject: Digital Electronics
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Subject ID: EI-305&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Semester: 6
                <sup>th</sup>
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Coordinator: Dr. Arun K. Sunaniya
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
                  value={85}
                  text={"8.5"}
                  styles={buildStyles({
                    pathColor: "rgba(0,212,255,1)"
                  })}
                />
              </Box>
              <Box width="100px" sx={{ mr: "1.2rem" }}>
                <CircularProgressbar
                  value={85}
                  text={"85"}
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
            <Grid container spacing={6} style={{ marginTop: "-0.6rem" }}>
              <Grid item xs={12} md={6}>
                <Button fullWidth="true" size="large" variant="outlined" startIcon={<DriveFileRenameOutlineIcon />} color="success">
                  Edit Details
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth="true"
                  size="large"
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  color="error">
                  Delete Course
                </Button>
              </Grid>
            </Grid>
          </ContentCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <ContentCard>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Subject: Digital Signal Processing
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Subject ID: EI-307&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Semester: 6
                <sup>th</sup>
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "baseline", marginBottom: "0.3rem" }}>
              <Typography variant="subtitle1" component="span">
                Coordinator: Dr. Shivendra K. Pandey
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
                  value={91}
                  text={"9.1"}
                  styles={buildStyles({
                    pathColor: "rgba(0,212,255,1)"
                  })}
                />
              </Box>
              <Box width="100px" sx={{ mr: "1.2rem" }}>
                <CircularProgressbar
                  value={91}
                  text={"91"}
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
            <Grid container spacing={6} style={{ marginTop: "-0.6rem" }}>
              <Grid item xs={12} md={6}>
                <Button fullWidth="true" size="large" variant="outlined" startIcon={<DriveFileRenameOutlineIcon />} color="success">
                  Edit Details
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth="true"
                  size="large"
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  color="error">
                  Delete Course
                </Button>
              </Grid>
            </Grid>
          </ContentCard>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Payment;
