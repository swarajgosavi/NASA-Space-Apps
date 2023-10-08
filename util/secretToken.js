import "dotenv/config.js"
import jwt from "jsonwebtoken";

export const createSecretToken = (id) => {
  return jwt.sign({ id }, "HeliosBigYear", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

