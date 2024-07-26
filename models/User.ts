import { model, Schema } from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },
});

const User = model<User>("User", UserSchema);

export { User };
