import { Router } from "express";
import { validarJWT } from "../middlewares/validar-jwt";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controllers/events";

const router = Router();

// - todos los endpoint van a pasar por la validación del JWT
router.use(validarJWT);

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export { router };
