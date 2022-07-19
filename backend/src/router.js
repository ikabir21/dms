import express from "express";
import { register } from "./controllers/userControllers.js";

// project imports

const { CLIENT_URL } = process.env;

const router = express.Router();

// welcome route
router.get("/auth", (req, res) => res.send("<h1>Hello from server</h1>"));

// users routes
router.post("/register", register)

export default router;
