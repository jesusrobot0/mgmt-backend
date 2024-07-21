import { Request, Response } from "express";

export function createUser(req: Request, res: Response) {
  res.json({ endpoint: "POST - registro" });
}

export function loginUser(req: Request, res: Response) {
  res.json({ endpoint: "POST - login" });
}

export function revalidateToken(req: Request, res: Response) {
  res.json({ endpoint: "GET - renew jwt" });
}
