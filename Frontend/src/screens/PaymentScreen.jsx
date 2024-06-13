import { useState, useEffect } from "react"
import { savePaymentMethod } from "../slices/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import CheckSteps from "../components/CheckSteps"


export default function PaymentScreen() {
    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const { shippingAddress } = useSelector((state)=> state.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=> {
        if(!shippingAddress){
            navigate('/shipping')
        }
    }, [shippingAddress, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
        
    }

  return (
    <div className="mt-20 flex justify-center">
        <div className=" border-2 border-slate-100 shadow-md px-20 py-12 ">
            <CheckSteps step1 step2 step3 />
            <h1 className='text-2xl text-slate-700 font-bold mb-4'>Payment Method</h1>
            <form onSubmit={submitHandler} action="" name="payment" className="flex flex-col items-start gap-y-4">
                <h2 className="font-medium text-slate-500 text-lg"> Select Payment Method</h2>
                <section className="flex gap-2">
                    <input type="radio" className="accent-sky-600" value='PayPal' label='PayPal' onChange={(e) => setPaymentMethod(e.target.value)} checked   />
                    <label htmlFor="payment" className="font-medium text-slate-700 text-md" >PayPal or Credit card</label>
                </section>
                
                <button className="bg-sky-500 font-semibold rounded-full px-3 text-white py-1 hover:bg-sky-600 transition ease-in-out hover:scale-105 duration-500">Continue</button>
            </form>
           
        </div>
    </div>
  )
}
