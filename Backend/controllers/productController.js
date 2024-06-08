// product controller for the product route

import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"

// @description  Fetch all products
// @route  GET /products
// @access  Public
const getProducts = asyncHandler(async (req, res)=>{
    // to find all products
    const products = await Product.find({})
    res.json(products)
})


// @description  Fetch a product
// @route  GET /products/:id
// @access  Public
const getProductById = asyncHandler(async(req, res)=>{
    // to find a product by ID
    const product = await Product.findById(req.params.id)
    if(product){
       return res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Resource not found')
    }
})

export { getProductById, getProducts}

