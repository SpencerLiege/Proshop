import express from 'express'
import { 
    authUser,
     logoutUser, 
     registerUser,
     getUserProfile,
     updateUserProfile,
     getUsers,
     getUserById,
     deleteUser,
     updateUserById

 } from '../controllers/userController.js'
 import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/logout', logoutUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUserById)

export default router