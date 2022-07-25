import User from "../models/userModel.js";
import xlsx from "xlsx";

import ErrorMessage from "../utils/errorMessage.js";

export const uploadFile = (req, res, next) => {
	console.log("hello", req.file.filename);
	const file = req.file.filename;
	console.log("/uploads/" + file);
	const wb = xlsx.readFile("./uploads/" + file, { dateNF: "mm/dd/yyy" });
	const ws = wb.Sheets["Sheet1"];
	const data = xlsx.utils.sheet_to_json(ws, { raw: false });
	console.log(data);

	try {
		data.forEach((el) => {
			User.findOne({ scholarId: el.scholarId })
				.then((user) => {
					console.log(user);
					if (user) {
						const cgp = [];
						for (const key in el) {
							if (key !== "scholarId") {
								console.log(key, el[key]);
								cgp.push({ name: key, value: el[key] });
							}
						}
						User.updateOne(
							{ scholarId: el.scholarId },
							{ $set: { cgpa: cgp } }
						)
							.then((result) => {
								console.log(result);
								// res.json({ success: true, result });
							})
							.catch((err) => next(err));
					}
				})
				.catch((err) => next(err));
				res.status(200).json({ success: true });
		});
	} catch (error) {
		next(error);
	}
};
