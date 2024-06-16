import asyncHandler from "../middleware/asyncHandler.js"
import Order from "../models/orderModel.js"
import generateToken from "../utils/generateToken.js"

// @description  Create new order
// @route  POST /orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res)=>{
    
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body
    

    // console.log(orderItems)
    // console.log(req.body)
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error(' No order available')
    }
    else{
        const order = new Order({
            orderItems: orderItems.map((item)=> ({
                ...item,
                product: item._id,
                    
            })),
            user: req.user_id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
            
        const newOrder = await order.save()
        res.status(201).json(newOrder)
        }

})

// @description  view my orders
// @route  GET /orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res)=>{
    const orders = await Order.find({ user: req.user._id })
    res.status(200).json(orders)
    
})

// @description  view a single order by ID
// @route  GET /orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res)=>{
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(order){
        res.status(200).json(order)
    }
    else{
        res.status(404)
        throw new Error('order not found')
    }

})

// @description  update order to paid
// @route  PUT /orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res)=>{
    res.send('update Order to paid')
})
// @description  update order to delivered
// @route  POST /users/:id/delivered
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res)=>{
    res.send('Order to delivered')

})
// @description  view all orders
// @route  GET /orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res)=>{
    res.send('All Orders')

})

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
}