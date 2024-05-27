import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()
import productRouter from './routes/productRouter.js'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(cors())


app.use('/products', productRouter )

app.use(errorHandler)
app.use(notFound)



app.listen(port, ()=>{
    console.log('Port on 8000')
})




// const express = require('express')
// const app = express()
// const port = 5000


// app.get('/', (req, res)=>{
//     // res.send('First app')
//     res.send('Yes welcome')
// })


// app.listen(port, ()=>{
//     console.log('Server is running')
// })