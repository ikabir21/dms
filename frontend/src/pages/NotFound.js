import React from "react";
import { Box, Button } from "@mui/material";
import pageNotFound from "../assets/images/404.gif";

const NotFound = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<img
				style={{ height: "50%", objectFit: "cover" }}
				src={pageNotFound}
				alt="404 page"
			/>
			<p style={{ textAlign: "center" }}>
				<Button sx={{ my: 3 }} variant="outlined" color="primary" href="/">
					Go to Home{" "}
				</Button>
			</p>
		</Box>
	);
};
export default NotFound;
