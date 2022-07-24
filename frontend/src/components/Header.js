import React from "react";
import { Link } from "react-router-dom";

// MI Imports
import { makeStyles } from "@mui/styles";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Box,
	Stack,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Projects Imports
import headerStyles from "../assets/jss/headerStyles";
import { AppContext } from "../context";

const useStyles = makeStyles(headerStyles);

const Header = ({ toggleDrawer }) => {
	const classes = useStyles();
	const { state, actions } = React.useContext(AppContext);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<AppBar
				color="background"
				elevation={0}
				position="fixed"
				className={classes.appBar}>
				<Toolbar className={classes.toolBar}>
					<Stack
						direction="row"
						alignItems={"center"}
						justifyContent="space-between"
						width={216}>
						<IconButton
							edge="start"
							aria-label="open drawer"
							onClick={toggleDrawer}
							className={classes.menuButton}>
							<MenuIcon />
						</IconButton>
						<Typography color="primary" component={Link} to="/" variant="h5">
							SDocs
						</Typography>
					</Stack>
					<div>
						{!state.isAuth ? (
							<Button
								color="primary"
								variant="outlined"
								component={Link}
								to="/auth">
								Login
							</Button>
						) : (
							<>
								<Avatar
									onClick={handleClick}
                  src={state?.user?.profileUrl}
									sx={{
										width: 48,
										height: 48,
										background: "#009357",
										color: "#fff",
										cursor: "pointer",
									}}>
									{state?.name?.charAt(0)}
								</Avatar>

								<Menu
									id="user-menu"
									anchorEl={anchorEl}
									open={open}
									MenuListProps={{ "aria-labelledby": "user-button" }}
									onClose={handleClose}>
									<MenuItem onClick={handleClose}>
										<Button href="/">Profile</Button>
									</MenuItem>
									<MenuItem
										onClick={() => {
											setAnchorEl(null);
											actions.logout();
										}}>
										<Button>Logout</Button>
									</MenuItem>
								</Menu>
							</>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
