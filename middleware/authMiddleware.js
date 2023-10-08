import {User} from "../models/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config.js"

export function userVerification (req, res) {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, "HeliosBigYear", async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}