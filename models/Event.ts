import { model, Schema, Types } from "mongoose";

interface Event {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  user: Types.ObjectId;
}

const EventSchema = new Schema<Event>({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Event = model<Event>("Event", EventSchema);
