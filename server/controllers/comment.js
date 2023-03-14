import { createError } from "../error.js"
import Comment from "../models/Comment.js"
import Video from "../models/Video.js"


export const addComent = async (req, resp, next) => {
    const newComment = new Comment({...req.body, userId: req.user.id})

    try {
        const saveComment = await newComment.save()
        resp.status(200).json(saveComment)
    } catch (error) {
        next(error)
    }
}



export const deleteComent = async (req, resp, next) => {
    try {
        const comment = await Comment.findById(resp.params.id)
        const video = await Video.findById(resp.params.id)

        if(req.user.id === req.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)

            resp.status(200).json("the comment has been deleted")
        } else {
            next(createError(403, "you can delete only your comment"))
        }
    } catch (error) {
        next(error)
    }
}



export const getComents = async (req, resp, next) => {
    try {
        const comments = await Comment.find({videoId: req.params.videoId})

        resp.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}