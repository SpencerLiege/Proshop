import express from 'express'
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router()

// @description - route to product screen
// @route - /product
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router