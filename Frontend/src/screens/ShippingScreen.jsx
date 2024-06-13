import { useNavigate } from "react-router-dom"
import { useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { saveShippingAddress } from "../slices/cartSlice"
import CheckSteps from "../components/CheckSteps"


export default function ShippingScreen() {
    const { shippingAddress } = useSelector((state) => state.cart)

    const [address, setAddress] = useState(shippingAddress.address || '')
    const [city, setCity] = useState(shippingAddress.city || '')
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '')
    const [country, setCountry] = useState(shippingAddress.country ||'')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = (e)=> {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country}))
        navigate('/payment')
    }



  return (
    <div className="mt-20 flex justify-center">
        <div className=" border-2 border-slate-100 shadow-md px-20 py-12 ">
            <CheckSteps step1 step2 />
           <h1 className='text-2xl text-slate-700 font-bold mb-4'>Shipping</h1>

           <form onSubmit={submitHandler} className='text-slate-900 flex flex-col gap-y-4 ' action="" id='register'>
                <div className="flex flex-col">
                        <label className='font-medium text-slate-500 text-lg' name='address' htmlFor="address"  >Address</label>
                        <input onChange={(e)=> setAddress(e.target.value)} value={address} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none ' type="text" id='address' placeholder='Enter Your Address' />
                    </div>
                    <div className="flex flex-col">
                        <label className='font-medium text-slate-500 text-lg' name='city' htmlFor="city">City</label>
                        <input onChange={(e)=> setCity(e.target.value)} value={city} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none ' type="text" id='city' placeholder='Enter Your City' />
                    </div>
                    <div className="flex flex-col"> 
                        <label className='font-medium text-slate-500 text-lg' name='postal-code' htmlFor="postal-code" >Postal Code</label>
                        <input onChange={(e)=> setPostalCode(e.target.value)} value={postalCode} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none' type="text" name="postal-code" id="postal-code" placeholder='Enter Your Postal Code' />
                    </div>
                    <div className="flex flex-col"> 
                        <label className='font-medium text-slate-500 text-lg' name='country' htmlFor="country" >Country</label>
                        <input onChange={(e)=> setCountry(e.target.value)} value={country} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none' type="text" name="country" id="country" placeholder='Enter Your Country' />
                    </div>
                    <div>
                        <button  className='bg-sky-500 font-semibold rounded-full px-3 text-white py-1 hover:bg-sky-600 transition ease-in-out hover:scale-105 duration-500'>Continue</button>
                    </div>
                    
           </form>

        </div>
    </div>
  )
}
