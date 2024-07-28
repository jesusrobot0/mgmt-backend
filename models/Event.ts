import { Document, model, Schema, Types } from "mongoose";

// Extendi de document para poder acceder a __v y _id
interface Event extends Document {
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

EventSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();

  object.id = _id;

  return object;
});

export const Event = model<Event>("Event", EventSchema);
