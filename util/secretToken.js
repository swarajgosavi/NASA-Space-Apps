import "dotenv/config.js"
import jwt from "jsonwebtoken";

export const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

