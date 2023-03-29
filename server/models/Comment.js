import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },

    
}, {timestamps: true}) // timestamp = carimbo de data/hora

//timestamps: it´s to update datas from user

export default mongoose.model("Comment", CommentSchema)