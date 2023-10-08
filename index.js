import express from "express";
import "dotenv/config.js"
import mongoose from "mongoose";
import router from "./routes/csProjectsRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome To MERN Stack");
});

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use(cookieParser());

app.use("/", authRoute);

app.use('/projects', router);

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });