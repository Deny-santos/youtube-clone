import express from "express";
import { addComent, deleteComent, getComents } from "../controllers/comment.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router()

router.post("/", verifyToken, addComent)

router.delete("/:id", verifyToken, deleteComent)

router.get("/:videoId", getComents)


export default router