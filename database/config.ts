import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect(String(process.env.DB_CNN));
    console.log("🥞 DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar la base de datos");
  }
}
