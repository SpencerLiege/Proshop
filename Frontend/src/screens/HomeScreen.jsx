/* eslint-disable react/jsx-key */
import {Link} from 'react-router-dom'
import Product from "../components/productList"
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import Loader from '../components/Loader.jsx'


export default function HomeScreen(){
    const { data: products, isLoading, isError} = useGetProductsQuery()

    return(
        <>  
        {isLoading ? (<Loader type='product' />) : 
        isError ? (<div>{isError?.data?.message || isError.error}</div>) :
         (<div>
            <h1 className="pt-20 pb-3 ml-8 font-bold text-3xl text-slate-700 uppercase">Latest Products</h1>      
            <div className=" grid grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3 ">
                {products.map((product)=>(
                    <Link to={`/products/${product._id}`} key={product._id} className="border-2 mx-2 p-6 rounded-md transition shadow-md hover:shadow-xl hover:border-neutral-300 overflow-hidden transform hover:scale-105 ease-in duration-500 hover:bg-slate-100 items-center text-center">
                        <Product  products={product}/>
                    </Link>
                        
                ))
                }
            </div>
        </div>) }
        

            
           
        </>
    )
}