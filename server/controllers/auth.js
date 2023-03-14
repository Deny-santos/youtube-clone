import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../error.js"
import jwt from "jsonwebtoken"

export const signup = async (req,resp, next) => {
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body, password: hash})
        
        await newUser.save()
        resp.status(200).send("User has been created")
    } catch(err) {
        next(err)
    }
}

export const signin = async (req,resp, next) => {
    try{
        const user = await User.findOne({name: req.body.name}) // to be see the DB, note the models
        if(!user) return next(createError(404, "user not found"))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)

        if(!isCorrect) return next(createError(404, "credentials is wrong"))

        const token = jwt.sign({id: user._id}, process.env.JWT) //_id is not a atribute in user.js. is a mongo db atribute, see in the colections

        const {password, ...others} = user._doc // deny the password can be returned

        resp.cookie("access_token", token, { //need the cookie dependence, its name is cookie-parser
            httpOnly: true // more security
        }).status(200).json(others) // if everythink ok, return the data of user that is on de mongodb

    } catch(err) {
        next(err)
    }
}
