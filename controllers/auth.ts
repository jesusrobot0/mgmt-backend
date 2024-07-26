import { Request, Response } from "express";
import { User } from "../models/User";

export async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "Ya existe un usuario con ese correo",
      });
    }

    user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor contactese con servicio al cliente",
    });
  }
}

export function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  res.status(200).json({ ok: true, email, password });
}

export function revalidateToken(req: Request, res: Response) {
  res.json({ endpoint: "GET - renew jwt" });
}
