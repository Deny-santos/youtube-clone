//every opertaion CRUD here 
import User from "../models/User.js"
import { createError } from "../error.js"
import Video from "../models/Video.js"

export const update = async (req, resp, next) => {
    if(req.params.id === req.user.id) { //req.user.id come from jwt
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
            resp.status(200).json(updatedUser)
        } catch(err) {
            next(err)
        }
    } else {
        return next(createError(403, "you can update only your account"))
    }
}



export const deleteUser = async (req, resp, next) => {
    if(req.params.id === req.user.id) {
        try{
            await User.findByIdAndDelete(req.params.id)
            resp.status(200).json("user has been delected")
        }catch(err) {
            return next(err)
        }
    } else {
        return next(createError(403, "you can delete only your account"))
    }
}



export const getUser = async (req, resp, next) => {
    try {
        const user = await User.findById(req.params.id)
        resp.status(200).json(user)
    } catch (err) {
        next(err) //dont tested yet
    }
}



export const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedUsers: req.params.id }
        });
    
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 }
        });
    
        res.status(200).json("Subscription successfull.")
    } catch (err) {
        next(err);
    }
};




export const unsubscribe = async (req, res, next) => {
try {
    await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedUsers: req.params.id }
    });

    await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 }
    });

    res.status(200).json("Unsubscription successfull.")
    } catch (err) {
        next(err);
    }
};



export const like = async (req, resp, next) => {
    const id = req.user.id //from jwt
    const videoId = req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: {likes: id}, //addtoset dont duplicate my userId(it is, like one just time ), but push gonna do it 
            $pull: {deslikes: id}
        })
        resp.status(200).json("the video has been liked")
    } catch (err) {
        next(err)
    }
}



export const deslike = async (req, resp, next) => {
    const id = req.user.id //from jwt
    const videoId = req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: {deslikes: id}, //addtoset dont duplicate my userId(it is, like one just time ), but push gonna do it 
            $pull: {likes: id}
        })

        resp.status(200).json("the video has been desliked")
    }catch (err) {
        next(err)
    }
}