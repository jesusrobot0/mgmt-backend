import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { generateJWT } from "../helpers/jwt";

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

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // Guardar en la base de datos
    await user.save();

    // Generar JWT
    const token = await generateJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor contactese con servicio al cliente",
    });
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "No existe ningún usuario con ese email",
      });
    }

    // Confirmar los passwords
    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }

    // Generar JWT
    const token = await generateJWT(user.id, user.name);

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor contactese con servicio al cliente",
    });
  }
}

export function revalidateToken(req: Request, res: Response) {
  res.json({ endpoint: "GET - renew jwt" });
}
