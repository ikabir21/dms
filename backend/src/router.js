import express from "express";

// project imports

const { CLIENT_URL } = process.env;

const router = express.Router();

// welcome route
router.get("/auth", (req, res) => res.send("<h1>Hello from server</h1>"));

export default router;
