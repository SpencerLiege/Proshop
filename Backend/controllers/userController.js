import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// @description  auth user and get token
// @route  POST /users/login
// @access  Public
const authUser = asyncHandler(async (req, res)=>{
    const { email, password } = req.body
    
    const user = await User.findOne({ email})
    
    if(user && (await user.matchPassword(password))){

        generateToken(res, user._id)

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
    
   
})

// @description  register user
// @route  POST /users
// @access  Public
const registerUser = asyncHandler(async (req, res)=>{
    const { name, email, password} = req.body

    const userExist = await User.findOne({ email })

    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })
    
    if(user){
        generateToken(res, user._id)

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
 })

 // @description  logout user
// @route  POST /users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res)=>{
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json( { message: 'Loggout success'})
 })

 // @description  get user profile
// @route  GET /users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.user._id)

    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else{
        res.status(404)
        throw new Error('User not found')
    }
    res.send('get user profile')
 })

  // @description  update user profile
// @route  PUT /users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password
        }
        
        const updateUser = await user.save()

        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin
        })
    }
    else{
        res.status(404)
        throw new Error('User not found')
        
    }


 })

  // @description  get user profile
// @route  GET /users
// @access  Private/admin
const getUsers = asyncHandler(async (req, res)=>{
    res.send('get all users')
 })
  // @description  get user pby id
// @route  GET /users/:id
// @access  Private/admin
const getUserById = asyncHandler(async (req, res)=>{
    res.send('get user by id')
 })

  // @description  get user profile
// @route  DELETE /users/:id
// @access  Private/admin
const deleteUser = asyncHandler(async (req, res)=>{
    res.send('delete user')
 })

  // @description  update user profile
// @route  PUT/users/:id
// @access  Private/admin
const updateUserById = asyncHandler(async (req, res)=>{
    res.send('update user')
 })

 export { 
    authUser,
     logoutUser, 
     registerUser,
     getUserProfile,
     updateUserProfile,
     getUsers,
     getUserById,
     deleteUser,
     updateUserById

 }