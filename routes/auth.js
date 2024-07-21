import express from "express";
import { createUser, loginUser, revalidateToken } from "../controllers/auth.js";

const router = express.Router();

router.post("/new", createUser);

router.post("/", loginUser);

router.get("/renew", revalidateToken);

export { router };
