import { createError } from "../error.js"
import Video from "../models/Video.js"
import User from "../models/User.js"

export const addVideo = async (req, resp, next) => {
    const newVideo = Video({ userId: req.user.id, ...req.body }) //req.user.id come from jwt | userId is from model user
    try {
        const saveVideo = await newVideo.save()
        resp.status(200).json(saveVideo)
    } catch (error) {
        next(error)
    }
}



export const updateVideo = async (req, resp, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Video was not found"))
        if (req.user.id === video.userId) {
            const updateVideo = await Video.findByIdAndUpdate(req.params.id, { // you just use a const to store the wait, if you gonna return it, like a json response 
                $set: req.body
            },
                { new: true })
            resp.status(200).json(updateVideo)
        } else {
            next(createError(403, "you can update only your video"))
        }

    } catch (error) {
        next(error)
    }
}



export const deleteVideo = async (req, resp, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Video was not found"))
        if (req.user.id === video.userId) {
            await Video.findByIdAndDelete(req.params.id)
            resp.status(200).json("The video has been deleted")
        } else {
            next(createError(403, "you can delete only your video"))
        }
    } catch (error) {
        next(error)
    }
}



export const getVideo = async (req, resp, next) => {
    try {
        const video = await Video.findById(req.params.id)
        resp.status(200).json(video)
    } catch (error) {
        next(error)
    }
}



export const addView = async (req, resp, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        })
        resp.status(200).json("the view has been increased")
    } catch (error) {
        next(error)
    }
}



export const random = async (req, resp, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }]) // agg is of mongo, search for more options ... size:40 = 40 videos
        resp.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

export const trend = async (req, resp, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 }) // -1 show from the most viewed videos to the minimal, if 1 = the contrary
        resp.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}



export const sub = async (req, resp, next) => {
    try {
        const user = await User.findById(req.user.id)
        const subscribedChannels = user.subscribedUsers // from jwt 

        const list = await Promise.all(
            subscribedChannels.map(channelId => {
                return Video.find({ userId: channelId })
            })
        ) // gonna find every videos from this channel

        resp.status(200).json(list.flat().sort((a, b) => a.createdAt - b.createdAt)) // .flat = cuz i diont wanna this inside of so many objects or arrays, {{{}}} || about the sort newlest videos first
    } catch (error) {
        next(error)
    }
}




export const getByTag = async (req, resp, next) => {
    const tags = req.query.tags.split(",") // put in array, in the url, search it like = tags/tags=tag1,tag2 ...
    console.log(tags)
    try {
        const videos = await Video.find({ tags: { $in: tags } }).limit(20) // max 20 videos
        resp.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}




export const search = async (req, resp, next) => {
    const query = req.query.q //search/q=some
    try {
        const videos = await Video.find({title: {$regex: query, $options: "i"}}).limit(40) // the "i" means lower case or up case, dosent metter, and regex = in javascript word you have "crip" if you search it, you gonna find the video (it is part of word)
        resp.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}
