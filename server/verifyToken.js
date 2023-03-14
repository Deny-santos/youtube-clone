import Jwt from "jsonwebtoken";
import { createError } from "./error.js";
//dont need to use dotenve here, just in the index.js

export const verifyToken = (req,resp, next) => {
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "you are not authenticated")) //401 = no authenticator error

    Jwt.verify(token, process.env.JWT, (err, user) => { // there is user id in the access token 
        if(err)  return next(createError(403, "token is not valid!"))
        
        req.user = user // in jwt you dont can use req.body.user, cuz it not coming from body, it is on the section
        next()
    })
}
