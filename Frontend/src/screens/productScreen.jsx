// import { useState, useEffect } from "react";
import { TbArrowBack } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import StarRating from "../components/starRating";
import { Spinner } from "@material-tailwind/react";
import { addToCart } from "../slices/cartSlice";
// import axios from "axios";




export default function ProductScreen() {

    const {id : productId} = useParams()
    const { data: product, isLoading, isError} = useGetProductDetailsQuery(productId)

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addItemToCart = () =>{
        dispatch(addToCart({...product, qty}))
        navigate('/cart')
    }


    
 
  return (
    <div className="pt-20">
        <Link to={`/products`} className="flex items-center py-2 px-3 gap-1 w-24 bg-slate-500 hover:bg-slate-700
         transition duration-500 ease-in transform hover:scale-105 text-white rounded-xl">
            <TbArrowBack className="w-5 h-5" />
            Return
         </Link>
         { isLoading? (<Spinner className="mt-40 ml-40"/>) : 
         isError? (<div>{isError?.data?.message || isError.error}</div>) :
          (
            <section className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 p-4">
            <div>
                <img src={product.image} alt={product.name} className="w-72 h-72" />
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-semibold text-slate-800 pb-6" >{product.name}</span>
                <span className="flex border-y-2 py-3 font-medium text-lg gap-2 text-slate-600"><StarRating value={product.rating}/> {product.numReviews} reviews</span>
                <span className="border-b-2 py-3 font-medium text-lg gap-2 text-slate-600">Price: <span className="text-lime-600 text-lg">${product.price}</span></span>
                <span className="py-3 font-medium text-base text-slate-600">Description: {product.description}</span>
            </div>
            <div  className="px-10">
                <div className="border-2 py-1 flex flex-col gap-y-2 font-medium  text-base text-slate-600" >
                    <div className="flex px-4 py-2 gap-[90px]" >
                        <span>Price:</span>
                        <span>${product.price}</span>
                    </div>
                    <div className="flex px-4 py-2 border-y-2 gap-[82px]">
                        <span>Status:</span>
                        <span>{`${product.countInstock === 0 ? 'Not in Stock' : ' In stock'}`}</span>
                    </div>
                    <div className="flex px-4 py-2 gap-[100px]">
                        <span>Qty:</span>
                        <div className="flex px- ">
                            <select name="" id="" value={qty} onChange={(e) => setQty(Number(e.target.value))}> 
                            {[...Array(product.countInstock).keys()].map(
                                (x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                )
                            )}
                            </select>
                        </div>
                        
                    </div>
                    <button onClick={addItemToCart} className={` ${product.countInstock===0 ? 'cursor-not-allowed bg-slate-400' : 'bg-black hover:bg-slate-700' }  text-white mx-6 my-2 py-3 text-center`} disabled={product.countInstock===0}>
                        ADD TO CART
                    </button>

                </div>

            </div>
         </section>
         )}
         
    </div>
  )
}
