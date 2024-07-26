import { Request, Response } from "express";

export function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  res.status(201).json({ ok: true, name, email, password });
}

export function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  res.status(200).json({ ok: true, email, password });
}

export function revalidateToken(req: Request, res: Response) {
  res.json({ endpoint: "GET - renew jwt" });
}
