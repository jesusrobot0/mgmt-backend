import { Router } from "express";
import { createUser, loginUser, revalidateToken } from "../controllers/auth";

const router = Router();

router.post("/new", createUser);

router.post("/", loginUser);

router.get("/renew", revalidateToken);

export { router };
