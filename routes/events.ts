import { Router } from "express";
import { check } from "express-validator";
import { validarJWT } from "../middlewares/validar-jwt";
import { validarCampos } from "../middlewares/validar-campos";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controllers/events";
import { isDate } from "../helpers/isDate";

const router = Router();

// - todos los endpoint van a pasar por la validación del JWT
router.use(validarJWT);

router.get("/", getEvents);
router.post(
  "/",
  [
    check("title", "El título es obligatorio").notEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
  ],
  validarCampos,
  createEvent
);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export { router };
