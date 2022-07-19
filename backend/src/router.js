
import express from "express";
import { isAuth } from "./middlewares/authMiddlewares.js";
import { profile, payments } from "./controllers/profile.js";
// project imports

const { CLIENT_URL } = process.env;

const router = express.Router();

// welcome route
router.get("/profile", profile);

export default router;

