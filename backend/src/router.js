import express from "express";
import { register } from "./controllers/userControllers.js";


import { isAuth } from "./middlewares/authMiddlewares.js";
import { profile, payments } from "./controllers/profile.js";
// project imports

const { CLIENT_URL } = process.env;

const router = express.Router();

// welcome route
router.get("/profile", profile);
router.get("/payments", payments);

// users routes
router.post("/register", register)

export default router;

