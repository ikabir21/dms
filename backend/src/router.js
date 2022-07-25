import express from "express";
import { login, register } from "./controllers/userControllers.js";

import { isAuth } from "./middlewares/authMiddlewares.js";
import { profile, getPayments } from "./controllers/profile.js";
import { makePayments } from "./controllers/paymentControllers.js";
// project imports
import { upload } from "./middlewares/fileUploadMiddleware.js";
import { uploadFile } from "./controllers/fileController.js";

const { CLIENT_URL } = process.env;

const router = express.Router();

// welcome route
router.get("/", (req, res) => res.send("hello from server!"));
router.get("/payments", isAuth, getPayments);
router.get("/profile", isAuth, profile);

// users routes
router.post("/register", register);
router.post("/login", login);

// payments routes
router.post("/payments", makePayments);

// Admin routes
router.post("/upload", upload.single("file"), uploadFile);

// router

export default router;
