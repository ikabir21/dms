import User from "../models/userModel.js";
import Result from "../models/resultModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import validate from "../validators/validate.js";
import { mongoose } from "mongoose";

export const profile = async (req, res, next) => {
	const id = req.user._id;
	// console.log(id);

	User.findById(id)
		.then((user) => {
			if (!user) return next(new ErrorMessage("Access Denied", 401));
			// console.log(user);
			let results = user.results;
			console.log(user);
			let resultarry = [];
			console.log(results);
			results.forEach((element) => {
				console.log(element);
				Result.findById(element.resultId).then((result) => {
					resultarry.push(result);
				});
			});
			console.log(user);
			return res.status(200).json({
				success: true,
				name: user.name,
				profileUrl: user.profileUrl,
				personalEmail: user.personalEmail,
				instituteEmail: user.instituteEmail,
				scholarId: user.scholarId,
				mobile: user.mobile,
				branch: user.branch,
				results: resultarry,
				projects: user.projects,
				cgpa: user.cgpa,
				isAdmin: user.role == 1,
			});
		})
		.catch((err) => next(err));
};
export const getPayments = async (req, res, next) => {
	const id = req.user._id;
	console.log(id);

	User.findById(id)
		.then((user) => {
			if (user) {
				return res.status(200).json({
					success: true,
					bankDetails: user.bankDetails,
					prevPayments: user.prevPayments,
				});
			}
		})
		.catch((err) => next(err));
};

export const addProjects = async (req, res, next) => {
	const { name, team, desc, github, link } = req.body;
	// console.log(project);
	const id = req.user._id;
	User.findById(id)
		.then((user) => {
			if (!user) return next(new ErrorMessage("Access Denied", 401));
			User.updateOne(
				{ _id: mongoose.Types.ObjectId(id) },
				{ $push: { projects: [{ name, team, desc, github, link }] } },
				{ new: true }
			)
				.exec()
				.then((user) => {
					return res.status(200).json({ projects: user });
				})
				.catch((err) => next(err));
		})
		.catch((err) => next(err));
};

export const deleteProjects = async (req, res, next) => {
	const id = req.user._id;
	const projectId = req.params.id;
	User.updateOne(
		{
			_id: mongoose.Types.ObjectId(id),
		},
		{ $pull: { projects: { _id: mongoose.Types.ObjectId(projectId) } } }
	)
		.then((user) => {
			if (!user) return next(new ErrorMessage("Something went wrong", 400));
			return res.status(200).json({ success: true });
		})
		.catch((err) => next(err));
};
