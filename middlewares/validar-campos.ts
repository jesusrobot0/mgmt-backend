import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export function validarCampos(req: Request, res: Response, next: NextFunction) {
  // Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
}
