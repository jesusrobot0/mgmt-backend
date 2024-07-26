import jwt from "jsonwebtoken";

export function generateJWT(uid: string, name: string) {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      String(process.env.SECRET_JWT_SEED),
      {
        expiresIn: "2h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("No se pudo retornar el token");
        }

        resolve(token);
      }
    );
  });
}
