/* eslint-disable prefer-destructuring */
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import ErrorMessage from "../utils/errorMessage.js";

export const isAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      console.log(req.headers.authorization);
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      User.findById(decoded._id)
        .select("-password")
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => next(err));
    } catch (error) {
      next(new ErrorMessage("Access Denied", 401));
    }
  }
  if (!token) return next(new ErrorMessage("Not authorized, no token", 401));
};

export const isAdmin = async (req, res, next) => {
  if (req.user && req.user.role === 1) {
    req.isAdmin = true;
    next();
  } else {
    next(new ErrorMessage("Access Denied", 401));
  }
}
