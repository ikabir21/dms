import express from "express";
import { login, register } from "./controllers/userControllers.js";


import { isAuth } from "./middlewares/authMiddlewares.js";
import { profile, getPayments } from "./controllers/profile.js";
import { makePayments } from "./controllers/paymentControllers.js";
// project imports

const { CLIENT_URL } = process.env;

const router = express.Router();

// welcome route
router.get("/", (req, res) => res.send("hello from server!"))
router.get("/profile", profile);
router.get("/payments", getPayments);

// users routes
router.post("/register", register)
router.post("/login", login)

// payments routes
router.post("/payments", makePayments);

export default router;

