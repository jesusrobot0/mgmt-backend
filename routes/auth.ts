import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import { createUser, loginUser, revalidateToken } from "../controllers/auth";

const router = Router();

router.post(
  "/new",
  [
    check("name", "El nombre es requerido").notEmpty(),
    check("email").isEmail().withMessage("El email es requerido"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("El password debe de tener al menos 8 caracteres"),
    validarCampos,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email").isEmail().withMessage("El email es requerido"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("El password debe de tener al menos 8 caracteres"),
    validarCampos,
  ],
  loginUser
);

router.get("/renew", revalidateToken);

export { router };
