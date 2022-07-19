// import { SIGNIN, SIGNUP } from "../config/constants.js";
// import validate from "../validators/validate.js";
import User from "../models/userModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import { generateToken } from "../utils/jwt.js";

const getScholardId = (code) => {
  const sc = `${Math.floor((new Date()).getFullYear() / 100)}1`
  const branch = {
    EI: `${sc}5`,
    CSE: `${sc}2`,
    CE: `${sc}1`,
    ME: `${sc}3`,
    EE: `${sc}6`,
    ECE: `${sc}4`

  }
  return branch[code];
}
const getEmail = (name, branch) => {
  return `${name.replace(" ", "_")}_ug@${branch}.nits.ac.in`.toLowerCase();
}

export const register = async (req, res, next) => {
  // const { error } = validate(req.body, SIGNUP);
  // if (error) return next(new ErrorMessage(error.details[0].message, 400));

  const { name, personalEmail, password, mobile, bankDetails={}, branch={} } = req.body;
  const joiningYear = new Date().getFullYear()
  // create scholar id
  User.findOne({ personalEmail })
    .then((user) => {
      if (user) return next(new ErrorMessage("Already Registered", 401));
      User.find({ joiningYear: new Date().getFullYear(), "branch.code": branch.code }).then((users) => {
        const scholarId = getScholardId(branch.code) + ("00" + (users.length + 1)).slice(-3);
        // console.log(scholarId);
        const instituteEmail = getEmail(name, branch.code);
  
        // console.log(student);
  
        // create inst email
        const student = new User({ 
          name, 
          personalEmail, 
          instituteEmail, 
          password, 
          joiningYear, mobile, 
          bankDetails: req.body.bankDetails, 
          branch, 
          scholarId
         })
  
        //  console.log(student, getScholardId()[branch.code]);
  
        student.save()
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

    })
    .catch((err) => next(err));
};

export const login = (req, res, next) => {
  // const { error } = validate(req.body, SIGNIN);
  // if (error) return next(new ErrorMessage(error.details[0].message, 400));
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

