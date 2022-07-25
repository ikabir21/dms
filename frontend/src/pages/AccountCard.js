/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";

function AccountCard({ detail }) {
	const [clicked, setClicked] = useState(false);

	const getPass = (pass) => {
		let ans = "";
		for (let i = 0; i < pass?.length; ++i) {
			ans += "*";
		}
		return ans;
	};

	function handleClick() {
		setClicked((prevValue) => {
			return !prevValue;
		});
	}

	return (
		<Box>
			<Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
				<IconButton style={{ marginRight: "0.8rem" }}>
					<PersonIcon />
				</IconButton>
				Account Holder Name: {detail?.accountHolderName}
			</Typography>
			<Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
				<IconButton style={{ marginRight: "0.8rem" }}>
					<PersonIcon />
				</IconButton>
				Account Number: {detail?.accountNo}
			</Typography>
			<Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
				<IconButton style={{ marginRight: "0.8rem" }}>
					<PersonIcon />
				</IconButton>
				IFSC Code: {detail?.ifscCode}
			</Typography>
			<Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
				<IconButton style={{ marginRight: "0.8rem" }}>
					<PersonIcon />
				</IconButton>
				Account Holder{" : "}
				{!clicked ? getPass(detail?.accountNo) : detail?.accountNo}
			</Typography>

			<Typography variant="subtitle1">
				<IconButton onClick={handleClick} style={{ marginRight: "0.8rem" }}>
					{clicked ? <VisibilityIcon /> : <VisibilityOffIcon />}
				</IconButton>
				Tap to reveal
			</Typography>
			<Button variant="contained" href="/#/pay-now" sx={{my: 2}} fullWidth>
				Pay Now
			</Button>
		</Box>
	);
}

export default AccountCard;
