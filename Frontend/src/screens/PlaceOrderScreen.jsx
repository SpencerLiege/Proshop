import { useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from 'react-router-dom'
import { useCreateOrderMutation } from "../slices/orderApiSlice"
import { destroyCart } from '../slices/cartSlice'
import { toast } from "react-toastify"
import CheckSteps from "../components/CheckSteps"
import Message from '../components/Message'
import Loader from '../components/Loader'


export default function PlaceOrderScreen() {
  const cart = useSelector((state)=> state.cart)
  const { userInfo } = useSelector((state)=> state.auth)

  // const auth = useSelector((state)=> state.auth)

  const [createOrder, { isLoading, error}] = useCreateOrderMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!cart.shippingAddress.address){
      navigate('/shipping')
    }
    else if(!cart.paymentMethod){
      navigate('/payment')  
    }
  }, [cart.shippingAddress.address, cart.paymentMethod, navigate])

  const placeOrderHandler = async ()=> {
      try {

        const res = await createOrder({
          user: userInfo._id,
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        }).unwrap()
  
        console.log(res)  
        dispatch(destroyCart())
        navigate(`/orders/${res._id}`)
        
        toast.info('Order placed successfully, proceed to view order')
      } catch (err) {
        toast.error(err)
      }
      console.log('submitted')
  
  }

  return (
    <div className="mt-20 flex justify-center">
      <div className="flex flex-col items-center border-2 gap-y-3 border-slate-100 shadow-md px-20 py-12 ">
        <div  className='justify-self-center'>
          <CheckSteps step1 step2 step3 step4 />
        </div>
          
      
        <section className="grid md:grid-cols-12 space-x-10">
          <main className="col-span-7">
            <p className="flex flex-col gap-y-1 py-4 border-b-2">
              <span className="text-2xl text-slate-700 font-bold">Shipping</span>
              <span className="text-slate-600 text-sm">Address: {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.country } </span>

            </p>
            <p className="flex flex-col gap-y-1 py-4 border-b-2">
              <span className="text-2xl text-slate-700 font-bold">Payment Method</span>
              <span className="text-slate-600 text-sm">Method: {cart.paymentMethod} </span>
            </p>
            <div className="flex flex-col gap-y-1 py-4">
              <span className="text-2xl text-slate-700 font-bold">Order</span>
              <div>
              { cart.cartItems === 0 ? 
              (<Message> Your Cart is Empty</Message>) :
              (<div className="space-y-3">
                {cart.cartItems.map((item, index)=> (
                  <div key={index} className={`${index === item.length - 1 ? '' : 'border-b-2'} flex gap-x-24 `} >
                    <div className="flex gap-x-1">
                      <img className="w-8 h-8" src={item.image} alt={item.namw} />
                      <Link to={`/products/${item._id}`} className="underline underline-offset-1 text-slate-600 text-sm">{item.name}</Link>
                    </div>
                    <div className="text-slate-600 text-sm">
                      {item.qty} X ${item.price} = ${cart.totalPrice}
                    </div>
                  </div>
                ))}
              </div> ) 
              }
              </div>
            </div>
          </main>
          <article className="col-span-5 shadow-md border-2 px-2">
              <div className="border-b-2 px-2 py-4 text-2xl text-slate-700 font-bold">Order Summary</div>
              <div className="text-slate-600 text-sm border-b-2 p-2 flex justify-between"><span>Items Price</span> <span>${cart.itemPrice} </span></div>
              <div className="text-slate-600 text-sm border-b-2 p-2 flex justify-between"><span>Shipping:</span> <span>${cart.shippingPrice}</span> </div>
              <div className="text-slate-600 text-sm border-b-2 p-2 flex justify-between"><span>Tax:</span> <span>${cart.taxPrice}</span> </div>
              <div className="text-slate-600 text-sm border-b-2 p-2 flex justify-between"><span>Total:</span> <span>${cart.totalPrice}</span> </div>
              <div className="text-slate-600 text-sm border-b-2 p-2 flex justify-between">{error && (<Message type="error">{error?.data?.message}</Message>)}</div>
              <div className=" p-2">
                <button disabled={cart.cartItems === 0} onClick={placeOrderHandler} className="bg-sky-500 font-semibold rounded-full px-3 text-white py-1 hover:bg-sky-600 transition ease-in-out hover:scale-105 duration-500">Place Order</button>
                {isLoading && (<Loader type='order' />)}
              </div>
          </article>
        </section>
      </div>
    </div>

  )
}
