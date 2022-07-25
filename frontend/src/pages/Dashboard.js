/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from "react";
import {
	Paper,
	Typography,
	CardContent,
	Button,
	Box,
	Card,
	Grid,
	useTheme,
	Avatar,
	ClickAwayListener,
	Portal,
	TextField,
} from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CBarChart from "../components/BarChart";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppContext } from "../context";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddIcon from "@mui/icons-material/Add";
import AddCardIcon from "@mui/icons-material/AddCard";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const AddProject = ({ open, setOpen }) => {
	const { state, actions } = useContext(AppContext);
	const [projects, setProjects] = useState({
		name: "",
		team: "",
		desc: "",
		github: "",
		link: "",
	});
	const styles = {
		position: "fixed",
		// width: 650,
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		borderRadius: 3,
		p: 5,
		bgcolor: "background.default",
	};

	const paperStyle = { padding: "25px 20px", width: 500, margin: "20px auto" };
	const avatarStyle2 = { backgroundColor: "#1bbd7e" };

	const handleClick = () => {
		setOpen((state) => !state);
	};

	const handleSubmit = () => {
		console.log(projects);
		actions.addProjects(projects);
	};

	const handleChange = (e) => {
		setProjects((state) => ({ ...state, [e.target.name]: e.target.value }));
	};

	return (
		<ClickAwayListener onClickAway={handleClick}>
			<div>
				{open ? (
					<Portal>
						<Box sx={styles}>
							<Paper elevation={20} style={paperStyle}>
								<Grid align="center">
									<Avatar style={avatarStyle2}>
										<AddCardIcon />
									</Avatar>
									<Typography variant="h4" sx={{ my: 2 }} color="primary">
										Add Projects
									</Typography>
								</Grid>
								<form>
									<TextField
										onChange={handleChange}
										margin="dense"
										fullWidth
										label="Project Name"
										name="name"
										value={projects.name}
									/>
									<TextField
										onChange={handleChange}
										margin="dense"
										fullWidth
										label="Team"
										name="team"
										value={projects.name}
									/>
									<TextField
										onChange={handleChange}
										margin="dense"
										fullWidth
										label="Project Description"
										name="desc"
										value={projects.desc}
									/>
									<TextField
										onChange={handleChange}
										margin="dense"
										fullWidth
										label="Github Link"
										name="github"
										value={projects.github}
										type="url"
									/>
									<TextField
										onChange={handleChange}
										margin="dense"
										fullWidth
										label="Project Link"
										name="link"
										value={projects.link}
										type="url"
									/>
									<Button
										justify="center"
										sx={{ my: 2 }}
										variant="contained"
										fullWidth
										SendIcon={<SendIcon />}
										onClick={handleSubmit}>
										Submit
									</Button>
								</form>
							</Paper>
						</Box>
					</Portal>
				) : null}
			</div>
		</ClickAwayListener>
	);
};

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
				width: "auto",
			}}>
			<CardContent style={{ paddingBottom: "1rem" }}>{children}</CardContent>
		</Card>
	);
};

const Dashboard = () => {
	const { state, actions } = useContext(AppContext);
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	useEffect(() => {
		actions.getProfile();
	}, []);

	console.log(state.profile);

	const handleDelete = (id) => {
		actions.deleteProjects(id);
	};

	return (
		<Paper
			sx={{
				display: "flex",
				flexDirection: "column",
				pb: 5,
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
								<Typography
									variant="h4"
									component="div"
									style={{ marginBottom: "0.3rem" }}>
									{state.profile?.name}
								</Typography>
								<Box
									style={{
										display: "flex",
										alignItems: "baseline",
										marginBottom: "0.3rem",
									}}>
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
						<Box
							style={{
								display: "flex",
								alignItems: "baseline",
								marginBottom: "0.3rem",
							}}>
							<Typography variant="subtitle1" component="span">
								Personal Email ID: {state.profile?.personalEmail}
							</Typography>
						</Box>
						<Box
							style={{
								display: "flex",
								alignItems: "baseline",
								marginBottom: "0.3rem",
							}}>
							<Typography variant="subtitle1" component="span">
								Institute Email ID: {state.profile?.instituteEmail}
							</Typography>
						</Box>
						<Box style={{ display: "flex", alignItems: "baseline" }}>
							<Typography variant="subtitle1" component="span">
								Branch: {state.profile?.branch?.code}
								&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Batch: 2019-23
							</Typography>
						</Box>
					</ContentCard>
				</Grid>
				<Grid item xs={12} md={3}>
					<ContentCard>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<Typography sx={{ mt: 0.9 }} align="center" variant="subtitle1">
								CGPA:{" "}
								{state.profile?.cgpa && state.profile?.cgpa?.length > 0
									? state.profile?.cgpa[state.profile?.cgpa.length - 1].cgpa
									: "N/A"}{" "}
								<br />
								(Out of 10)
							</Typography>
							<Box width="100px">
								<CircularProgressbar
									value={83}
									text={"9.3"}
									styles={buildStyles({
										// textColor: props.textColor,
										pathColor: "rgba(0,212,255,1)",
									})}
								/>
							</Box>
						</Box>
					</ContentCard>
				</Grid>
			</Grid>

			<Box sx={{ maxWidth: "800px", ml: 6 }}>
				<ContentCard sx={{ maxWidth: "800px", ml: 6 }}>
					<Typography variant="h4" align="center">
						CGPA VARIATIONS
					</Typography>
					{state.profile?.cgpa && state.profile?.cgpa.length > 0 ? (
						<Typography variant="subtitle1" align="center">
							(till {state.profile?.cgpa?.length}
							<sup>th</sup> sem)
						</Typography>
					) : (
						<Typography variant="subtitle1" align="center">
							N/A
						</Typography>
					)}
					<CBarChart data={state.profile?.cgpa || []} />
				</ContentCard>
			</Box>

			<Typography variant="h4" sx={{ mt: "2rem", ml: "3rem" }}>
				Projects
				<Button
					size="large"
					variant="contained"
					endIcon={<AddIcon />}
					sx={{ ml: "1rem" }}
					color="success"
					onClick={handleClick}>
					Add New Project
				</Button>
			</Typography>
			{open && <AddProject open={open} setOpen={setOpen} />}
			<Grid container spacing={6} style={{ padding: "2rem 3rem" }}>
				{state?.profile?.projects &&
					state?.profile?.projects.length > 0 &&
					state.profile?.projects.map((el, i) => (
						<Grid item xs={12} md={6} key={i}>
							<ContentCard>
								<Box
									style={{
										display: "flex",
										alignItems: "baseline",
										marginBottom: "0.3rem",
									}}>
									<Typography variant="subtitle1" component="span">
										Project Name: {el.name}
									</Typography>
								</Box>
								<Box
									style={{
										display: "flex",
										alignItems: "baseline",
										marginBottom: "0.3rem",
									}}>
									<Typography variant="subtitle1" component="span">
										Team: {el.team}
									</Typography>
								</Box>
								<Box
									style={{
										display: "flex",
										alignItems: "baseline",
										marginBottom: "3rem",
									}}>
									<Typography variant="subtitle1" component="span">
										{el.desc}
									</Typography>
								</Box>

								<Grid container spacing={6}>
									<Grid item xs={12} md={6}>
										<Button
											fullWidth
											size="large"
											variant="outlined"
											startIcon={<GitHubIcon />}
											color="success"
											href={el.github}>
											GitHub Repo
										</Button>
									</Grid>
									<Grid item xs={12} md={6}>
										<Button
											fullWidth
											size="large"
											variant="contained"
											endIcon={<ArrowForwardIosIcon />}
											color="success"
											herf={el.link}>
											View Project
										</Button>
									</Grid>
								</Grid>
								<Grid container spacing={6} style={{ marginTop: "-0.6rem" }}>
									<Grid item xs={12} md={6}>
										<Button
											fullWidth
											size="large"
											variant="outlined"
											startIcon={<DriveFileRenameOutlineIcon />}
											color="success">
											Edit Details
										</Button>
									</Grid>
									<Grid item xs={12} md={6}>
										<Button
											fullWidth
											size="large"
											variant="contained"
											endIcon={<DeleteIcon />}
											color="error"
											onClick={() => handleDelete(el._id)}>
											Delete Project
										</Button>
									</Grid>
								</Grid>
							</ContentCard>
						</Grid>
					))}
			</Grid>
		</Paper>
	);
};

export default Dashboard;
