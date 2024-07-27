// <reference path="../../types/express/index.d.ts" />

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  uid: string;
  name: string;
}

export function validarJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No se ha enviado ningún token en la petición",
    });
  }

  try {
    const { uid, name } = jwt.verify(
      token,
      String(process.env.SECRET_JWT_SEED)
    ) as JwtPayload;

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  next();
}
