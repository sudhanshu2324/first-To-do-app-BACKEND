import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();
config({
    path: "./data/config.env"
})
// Using Middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true
}))
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks", taskRouter)
//
app.get("/", (req, res) => {
    res.send("Hey! its SUDHANSHU MISHRA and I developed this API.")
})

//Error Middleware
app.use(errorMiddleware)



