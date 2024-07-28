import { Request, Response } from "express";
import { Event } from "../models/Event";
import mongoose from "mongoose";

export function getEvents(req: Request, res: Response) {
  return res.json({
    ok: true,
    msg: "getEvents",
  });
}

export async function createEvent(req: Request, res: Response) {
  const { title, notes, start, end } = req.body;
  const newEvent = new Event({ title, notes, start, end });

  try {
    newEvent.user = new mongoose.Types.ObjectId(req.uid);
    const eventSaved = await newEvent.save();

    return res.status(201).json({
      ok: true,
      event: eventSaved,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor contactese con servicio al cliente",
    });
  }
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
