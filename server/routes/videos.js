import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router()

// create a video 
router.post("/", verifyToken, addVideo)

router.delete("/:id", verifyToken, deleteVideo)

router.put("/:id", verifyToken, updateVideo)

router.get("/find/:id", getVideo) // not verification to see some video

router.put("/view/:id", addView)

router.get("/trend", trend)

router.get("/random", random)

router.get("/sub", verifyToken, sub)

router.get("/tags", getByTag) //get videos from tags like a youtube

router.get("/search", search)// get videos from title of the video like a youtube


export default router