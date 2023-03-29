import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
    },
    img: {
        type: String,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedUsers: {
        type: [String],
        default: 0
    },
    fromGoogle: {
        type: Boolean,
        default:false
    }
}, {timestamps: true}) // timestamp = carimbo de data/hora

//timestamps: it´s to update datas from user


export default mongoose.model("User", UserSchema)