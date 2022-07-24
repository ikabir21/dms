import React from "react";
import {
	Grid,
	Paper,
	Avatar,
	Typography,
	TextField,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Tabs,
	Tab,
	AppBar,
	FormHelperText,
	Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/styles";
import { AppContext } from "../context";
import Header from "../components/Header";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

const stream = [
	{
		name: "Please select your branch",
		code: "NA",
	},
	{
		name: "Computer Science and Engineering",
		code: "CSE",
	},
	{
		name: "Electronics and Communication Engineering",
		code: "ECE",
	},
	{
		name: "Electronics and Instrumentation Engineering",
		code: "EIE",
	},
	{
		name: "Electrical Engineering",
		code: "EE",
	},
	{
		name: "Mechanical Engineering",
		code: "ME",
	},
	{
		name: "Civil Engineering",
		code: "CE",
	},
];

const Registration = () => {
	const theme = useTheme();
	const { state, actions } = React.useContext(AppContext);
	const [personalDetails, setPersonalDetails] = React.useState({
		personalEmail: "",
		name: "",
		password: "",
		mobile: "",
		gender: "",
	});
	const [bankDetails, setBankDetails] = React.useState({
		accountHolderName: "",
		accountNo: "",
		ifscCode: "",
		branchName: "",
		bankName: "",
	});
	const [branch, setBranch] = React.useState("NA");
	const [value, setValue] = React.useState(0);
	const [genderErr, setGenderErr] = React.useState(false);
	const [branchErr, setBranchErr] = React.useState(false);
	const changeTab = (event, newValue) => setValue(newValue);

	const a11yProps = (index) => {
		return {
			id: `full-width-tab-${index}`,
			"aria-controls": `full-width-tabpanel-${index}`,
		};
	};

	const handleChangeIndex = (index) => setValue(index);

	const handleSubmit = () => {
		console.log(bankDetails, personalDetails);
		const _branch = stream.find((b) => b.code === branch);
		personalDetails.branch = _branch;
		actions.register({ ...personalDetails, bankDetails });
	};

	const handleInputChange = (e, val) => {
		if (val === "personalDetails") {
			setPersonalDetails((state) => ({
				...state,
				[e.target.name]: e.target.value,
			}));
		} else {
			setBankDetails((state) => ({
				...state,
				[e.target.name]: e.target.value,
			}));
		}
	};

	return (
		<>
			<Header />
			<Box sx={{ my: 10 }} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// height: "120vh",
				}}>
				<Box sx={{ bgcolor: "background.paper", width: 700 }}>
					<AppBar position="static">
						<Tabs
							value={value}
							onChange={changeTab}
							indicatorColor="secondary"
							textColor="inherit"
							variant="fullWidth"
							aria-label="full width tabs example">
							<Tab label="Step 1" {...a11yProps(0)} />
							<Tab label="Step 2" {...a11yProps(1)} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === "rtl" ? "x-reverse" : "x"}
						index={value}
						onChangeIndex={handleChangeIndex}>
						<TabPanel value={value} index={0} dir={theme.direction}>
							<div>
								<Grid>
									<Paper
										elevation={20}
										sx={{
											padding: "25px 20px",
											width: 500,
											margin: "20px auto",
										}}>
										<Grid align="center">
											<Avatar>
												<AccountCircleIcon />
											</Avatar>
											<Typography color="primary" variant="h4" sx={{ my: 1 }}>
												Personal Details
											</Typography>
											<Typography variant="caption">
												Please fill the form to complete the Registration
												process.{" "}
											</Typography>
										</Grid>
										<form
											onSubmit={(e) => {
												e.preventDefault();
												personalDetails.gender === "" && setGenderErr(true);
												branch === "NA" && setBranchErr(true);

												personalDetails.gender !== "" &&
													branch !== "NA" &&
													changeTab(e, 1);
											}}>
											<TextField
												required
												onChange={(e) =>
													handleInputChange(e, "personalDetails")
												}
												margin="dense"
												fullWidth
												label="Full Name"
												value={personalDetails.name}
												name="name"
											/>
											<TextField
												required
												onChange={(e) =>
													handleInputChange(e, "personalDetails")
												}
												margin="dense"
												fullWidth
												label="Email Id"
												value={personalDetails.personalEmail}
												name="personalEmail"
											/>
											<TextField
												required
												onChange={(e) =>
													handleInputChange(e, "personalDetails")
												}
												margin="dense"
												fullWidth
												label="Password"
												name="password"
												value={personalDetails.password}
											/>
											<TextField
												required
												onChange={(e) =>
													handleInputChange(e, "personalDetails")
												}
												margin="dense"
												fullWidth
												label="Mobile No"
												value={personalDetails.mobile}
												name="mobile"
											/>
											<TextField
												required
												margin="dense"
												fullWidth
												select
												error={branchErr}
												label="Branch"
												value={branch}
												onChange={(e) => {
													e.target.value !== "NA" && setBranchErr(false);
													setBranch(e.target.value);
												}}
												helperText={branchErr && "Please select your Branch"}>
												{stream.map((option) => (
													<MenuItem key={option.code} value={option.code}>
														{option.name}
													</MenuItem>
												))}
											</TextField>
											<FormControl>
												<FormLabel>Gender</FormLabel>
												<RadioGroup
													name="gender"
													onChange={(e) => {
														e.target.value !== "" && setGenderErr(false);
														handleInputChange(e, "personalDetails");
													}}
													required
													value={personalDetails.gender}>
													<div>
														<FormControlLabel
															aria-required="true"
															value="male"
															control={<Radio />}
															label="Male"
														/>
														<FormControlLabel
															aria-required="true"
															value="female"
															control={<Radio />}
															label="Female"
														/>
														<FormControlLabel
															aria-required="true"
															value="other"
															control={<Radio />}
															label="Other"
														/>
													</div>
												</RadioGroup>
												{genderErr && (
													<FormHelperText error={true}>
														Please Select gender
													</FormHelperText>
												)}
											</FormControl>
											<Button
												type="submit"
												sx={{ mt: 2 }}
												fullWidth
												variant="contained">
												Continue
											</Button>
											<Link href="/#/login" variant="body2">
												{"Already have an account? Sign In"}
											</Link>
										</form>
									</Paper>
								</Grid>
							</div>
						</TabPanel>
						<TabPanel value={value} index={1} dir={theme.direction}>
							<div>
								<Grid>
									<Paper
										elevation={20}
										sx={{
											padding: "25px 20px",
											width: 500,
											margin: "20px auto",
										}}>
										<Grid align="center">
											<Avatar>
												<AccountBalanceIcon />
											</Avatar>
											<Typography color="primary" variant="h4" sx={{ my: 1 }}>
												Bank Account Details
											</Typography>
										</Grid>
										<form>
											<TextField
												required
												onChange={(e) => handleInputChange(e, "bankDetails")}
												margin="dense"
												fullWidth
												name="accountHolderName"
												label="Account Holder Name"
												value={bankDetails.accountHolderName}
											/>
											<TextField
												required
												onChange={(e) => handleInputChange(e, "bankDetails")}
												margin="dense"
												name="accountNo"
												fullWidth
												label="Account Number"
												value={bankDetails.accountNo}
											/>
											<TextField
												required
												onChange={(e) => handleInputChange(e, "bankDetails")}
												margin="dense"
												fullWidth
												label="IFSC Code"
												name="ifscCode"
												value={bankDetails.ifscCode}
											/>
											<TextField
												required
												onChange={(e) => handleInputChange(e, "bankDetails")}
												margin="dense"
												fullWidth
												label="Bank Name"
												name="bankName"
												value={bankDetails.bankName}
											/>
											<TextField
												required
												onChange={(e) => handleInputChange(e, "bankDetails")}
												margin="dense"
												name="branchName"
												fullWidth
												label="Branch Name"
												value={bankDetails.branchName}
											/>
										</form>
										<Button
											sx={{ mt: 2 }}
											fullWidth
											variant="contained"
											onClick={handleSubmit}>
											Register
										</Button>
									</Paper>
								</Grid>
							</div>
						</TabPanel>
					</SwipeableViews>
				</Box>
			</Box>
		</>
	);
};

export default Registration;
