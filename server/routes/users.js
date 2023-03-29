import express from "express";
import { deleteUser, deslike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router()

//update
router.put("/:id", verifyToken, update)

//delete
router.delete("/:id", verifyToken, deleteUser)

//get
router.get("/find/:id", getUser ) // it dont need any verification

// subscriber 
router.put("/sub/:id", verifyToken, subscribe) //the id is about the channel

//unsubscribe
router.put("/unsub/:id", verifyToken, unsubscribe) // the id is about the channel

//like a video
router.put("/like/:videoId", verifyToken, like)

//deslike
router.put("/deslike/:videoId", verifyToken, deslike)


export default router