import { SIGNIN, SIGNUP } from "../config/constants.js";
import validate from "../validators/validate.js";
import User from "../models/userModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import { generateToken } from "../utils/jwt.js";

const getScholardId = () => {
  const sc = `${new Date().getFullYear.substring(2)}1`
  const branch = {
    EI: `${sc}5`,
    CSE: `${sc}2`,
    CE: `${sc}1`,
    ME: `${sc}3`,
    EE: `${sc}6`,
    ECE: `${sc}4`

  }
  return branch;
}
const getEmail = (name, branch) => {
  return `${name.replace(" ", "_")}_ug@${branch}.nits.ac.in`.toLowerCase();
}

export const register = async (req, res, next) => {
  const { error } = validate(req.body, SIGNUP);
  if (error) return next(new ErrorMessage(error.details[0].message, 400));

  const { name, personalEmail, password, joiningYear, branchName, mobile, bankDetails, branch } = req.body;
  // create scholar id
  User.findOne({ personalEmail })
    .then((user) => {
      if (user) return next(new ErrorMessage("Already Registered", 401));
      let scholarId;
      User.find({ joiningDate: new Date().getFullYear(), "branch.code": branch.code }).then((users) => {
        scholarId = getScholardId().branch.code + users.length;
      }).catch((err) => next(err))

      const instituteEmail = getEmail(name, branch.code);

      // create inst email
      User.create({ name, personalEmail, instituteEmail, password, joiningYear, branchName, mobile, bankDetails, branch, scholarId })
        .then((user) => {
          if (user)
            return res.status(200).json({
              success: true,
              message: "Successfully registered!",
              _id: user._id,
              email: user.email,
              name: user.name,
              token: generateToken({ _id: user._id, email }),
            });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

export const login = (req, res, next) => {
  const { error } = validate(req.body, SIGNIN);
  if (error) return next(new ErrorMessage(error.details[0].message, 400));
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      console.log(user);
      user.comparePassword(password, (err, isMatched) => {
        if (err) return next(err);
        if (!isMatched)
          return next(new ErrorMessage("Invalid Credntials", 401));
        res.status(200).json({
          success: true,
          message: "Successfully logged in",
          _id: user._id,
          email: user.email,
          name: user.name,
          token: generateToken({ _id: user._id, email }),
        });
      });
    })
    .catch((err) => next(err));
};
