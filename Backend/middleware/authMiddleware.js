import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'


// protect routes

const protect = asyncHandler(async (req, res, next)=> {
    let token

    // read the JWT from the HTTp-only cookie
    token = req.cookies.jwt

    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
           
            next()
        }
        catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Unauthorized user, token failed')
        }

    }
    else{
        res.status(401)
        throw new Error('User not logged in, No token')
    }
})

// admin

const admin = (req, res, next) =>{
    if(req.user && req.user.isAdmin){
        next()
    }
    else{
        res.status(401)
        throw new Error('Unauthorized access, not an admin')
    }
}

export { protect, admin }