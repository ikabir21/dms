import React, { useEffect, useContext } from "react";
import { Typography, Button, Box, Stack, IconButton } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import { AppContext } from "../context";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const AdminPage = () => {
	const { state, actions } = useContext(AppContext);
	const [file, setFile] = React.useState(null);
	useEffect(() => {
		// actions.uploadResults();
	}, []);

	console.log(file);

	const handleChange = (e) => {
		setFile(e.target.files[0]);
	};

	const submit = () => {
		if (file) {
			const formData = new FormData();
			formData.append("file", file);
			actions.uploadResults(formData);
		}
	};

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant="h4" color="primary">
				Upload Results in xlsx format
			</Typography>
			<Box sx={{ my: 2 }} />
			<Typography variant="body1" color="secondary">
				Instructions: xlsa sheets columns should be: column1 (scholarId),
				coulmn2 (sem1), column3 (sem2), ...
			</Typography>
			<Box sx={{ my: 2 }} />
			<Stack direction="row" alignItems="center" spacing={2}>
				<Button variant="contained" component="label" onClick={submit}>
					Upload Results
				</Button>
				<IconButton
					color="primary"
					aria-label="upload picture"
					component="label">
					<input
						hidden
						accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
						type="file"
						onChange={handleChange}
					/>
					<FileUploadIcon />
				</IconButton>
			</Stack>
			{file && (
				<Typography variant="caption" color="secondary">
					Loaded file: {file.name}
				</Typography>
			)}
		</Box>
	);
};

export default AdminPage;
