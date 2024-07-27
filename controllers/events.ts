import { Request, Response } from "express";

export function getEvents(req: Request, res: Response) {
  return res.json({
    ok: true,
    msg: "getEvents",
  });
}

export function createEvent(req: Request, res: Response) {
  return res.json({
    ok: true,
    msg: "createEvent",
  });
}

export function updateEvent(req: Request, res: Response) {
  return res.json({
    ok: true,
    msg: "updateEvent",
  });
}

export function deleteEvent(req: Request, res: Response) {
  return res.json({
    ok: true,
    msg: "deleteEvent",
  });
}
