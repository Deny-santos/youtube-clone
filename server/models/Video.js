import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: [String], // put my id here
        default: []
    },
    deslikes: {
        type: [String], // put my id here
        default: []
    },
    
}, {timestamps: true}) // timestamp = carimbo de data/hora

//timestamps: it´s to update datas from user

export default mongoose.model("Video", VideoSchema)