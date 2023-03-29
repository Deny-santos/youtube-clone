import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/users.js"
import videoRouter from "./routes/videos.js"
import commentRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log("Connected  to DB")
        })
        .catch(err => {throw err})
}

mongoose.set('strictQuery', false); // the mong require this idk why

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/videos", videoRouter)
app.use("/api/comments", commentRouter)


app.use((err, req, resp, next) => {
    const status = err.status || 500
    const message = err.message || "something went wrong"

    return resp.status(status).json({
        success: false,
        status,
        message
    })
})


app.listen(8800, () => {
    connect() //conect to the DB
    console.log("server is running in 8800 port")
})