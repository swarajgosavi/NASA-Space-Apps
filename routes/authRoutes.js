import { Signup, Login } from "../controller/authController.js";
import { userVerification } from "../middleware/authMiddleware.js";
import express from 'express';

const authRoute = express.Router();

authRoute.post("/signup", Signup);
authRoute.post('/login', Login);
authRoute.post('/',userVerification)

export default authRoute;