import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()
import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRouter.js'
import orderRouter from './routes/orderRouter.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 5000

connectDB()
const app = express()

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookie parser
app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // This allows the browser to include cookies in the requests
}));

// routes
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/orders', orderRouter)

// middleware
app.use(errorHandler)
app.use(notFound)



app.listen(port, ()=>{
    console.log('Port on 8000')
})




