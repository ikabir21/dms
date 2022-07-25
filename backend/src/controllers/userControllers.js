// import { SIGNIN, SIGNUP } from "../config/constants.js";
// import validate from "../validators/validate.js";
import User from "../models/userModel.js";

import ErrorMessage from "../utils/errorMessage.js";
import { generateToken } from "../utils/jwt.js";
import {customAlphabet} from "nanoid";

const getScholardId = (code) => {
  const sc = `${Math.floor((new Date()).getFullYear() / 100)}1`
  const branch = {
    EIE: `${sc}5`,
    CSE: `${sc}2`,
    CE: `${sc}1`,
    ME: `${sc}3`,
    EE: `${sc}6`,
    ECE: `${sc}4`

  }
  return branch[code];
}
const getEmail = (name, branch) => {
  const nanoid = customAlphabet('1234567890', 10)
  return `${name.replace(" ", "_")}_${nanoid(3)}_ug@${branch}.nits.ac.in`.toLowerCase();
}

export const register = async (req, res, next) => {
  // const { error } = validate(req.body, SIGNUP);
  // if (error) return next(new ErrorMessage(error.details[0].message, 400));

  const { name, personalEmail, password, mobile, bankDetails={}, branch={} } = req.body;
  console.log(req.body);
  const joiningYear = new Date().getFullYear()
  // create scholar id
  User.findOne({ personalEmail })
    .then((user) => {
      console.log(personalEmail, user)
      if (user) return next(new ErrorMessage("Already Registered", 401));
      User.find({ joiningYear: new Date().getFullYear(), "branch.code": branch.code }).then((users) => {
        const scholarId = getScholardId(branch.code) + ("00" + (users.length + 1)).slice(-3);
        // console.log(scholarId);
        const instituteEmail = getEmail(name, branch.code);
        const batch=`${(new Date().getFullYear())} - ${(new Date().getFullYear())+4}`
        console.log(batch);
        const semester="1st";
        User.create({ 
          name, 
          personalEmail, 
          instituteEmail, 
          password, 
          joiningYear, mobile, 
          bankDetails, 
          branch, 
          scholarId,
          semester,
          batch
         })
          .then((user) => {
            if (user)
              return res.status(200).json({
                success: true,
                message: "Successfully registered!",
                _id: user._id,
                personalEmail: user.personalEmail,
                name: user.name,
                isAdmin: user.role == 1,
                token: generateToken({ _id: user._id, email: personalEmail, role: user.role }),
                profileUrl: user.profileUrl
              });
          })
          .catch((err) => next(err));
      })

    })
    .catch((err) => next(err));
};

export const login = (req, res, next) => {
  // const { error } = validate(req.body, SIGNIN);
  // if (error) return next(new ErrorMessage(error.details[0].message, 400));
  const { personalEmail, password } = req.body;

  User.findOne({ personalEmail })
    .then((user) => {
      console.log(user);
      if (!user) return next(new ErrorMessage("Access Denied", 401))
      user.comparePassword(password, (err, isMatched) => {
        if (err) return next(err);
        if (!isMatched)
          return next(new ErrorMessage("Invalid Credntials", 401));
        res.status(200).json({
          success: true,
          message: "Successfully logged in",
          _id: user._id,
          personalEmail: user.personalEmail,
          name: user.name,
          isAdmin: user.role == 1,
          token: generateToken({ _id: user._id, email: personalEmail, role: user.role }),
          profileUrl: user.profileUrl
        });
      });
    })
    .catch((err) => next(err));
};

