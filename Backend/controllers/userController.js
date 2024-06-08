import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"

// @description  auth user and get token
// @route  POST /users/login
// @access  Public
const authUser = asyncHandler(async (req, res)=>{
   res.send('Auth user')
})

// @description  register user
// @route  POST /users
// @access  Public
const registerUser = asyncHandler(async (req, res)=>{
    res.send('register user')
 })

 // @description  logout user
// @route  POST /users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res)=>{
    res.send('logut user')
 })

 // @description  get user profile
// @route  GET /users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res)=>{
    res.send('get user profile')
 })

  // @description  update user profile
// @route  PUT /users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res)=>{
    res.send('update user profile')
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