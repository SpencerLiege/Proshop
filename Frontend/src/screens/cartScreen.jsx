import Message from "../components/Message"
import { TbArrowBack } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addToCart, removeFromCart } from "../slices/cartSlice";




export default function CartScreen() {


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { cartItems} = useSelector((state) => state.cart)

  const addToCartHandler = (product, qty)=>{
    dispatch(addToCart({ ...product, qty}))
  }

  const removeFromCartHandler = (id)=> {
    dispatch(removeFromCart(id))
  }

  const CheckoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }


  return (
    <>

        <div className="mt-20 pb-3  font-bold text-3xl text-slate-700 uppercase">Orders</div>

        <Link to={`/products`} className="flex items-center py-2 px-3 gap-1 w-24 bg-slate-500 hover:bg-slate-700
         transition duration-500 ease-in transform hover:scale-105 text-white rounded-xl">
            <TbArrowBack className="w-5 h-5" />
            Return
         </Link>

        { cartItems.length === 0 ? (
          <div className="mt-2">
              <Message>Your Cart is empty </Message>
          </div>
          
        ):
        (<div className="grid md:grid-cols-7 gap-4  font-medium  text-base text-slate-600">
            <div className="flex flex-col mt-5 gap-y-3  md:col-span-5 ">
            {cartItems.map((item) => 
            (
              <div className="flex justify-between items-center border-b-2 p-2 " key={item._id}>
                
                <div className="flex gap-3">
                  <div className="flex w-48">
                    <img className="w-20 h-20" src={item.image} alt="" />
                    <Link className="underline underline-offset-4" to={`/products/${item._id}`}>{item.name}</Link>
                  </div>
                  <span className="text-lime-600  text-lg ">${item.price}</span> 
                </div>

                <div className="flex gap-2 mr-4">
                  <select className="py-2 px-4 border-2" name="" id="" value={item.qty} onChange={(e)=> addToCartHandler(item, Number(e.target.value))}> 
                              {[...Array(item.countInstock).keys()].map(
                                  (x) => (
                                      <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                      </option>
                                  )
                              )}
                    </select>
                    <button onClick={()=> removeFromCartHandler(item._id)}>
                      <FiTrash2 className="w-8 h-8 hover:scale-110 hover:bg-slate-200 rounded-full p-1" />
                    </button>
                  
                </div>

              </div>
            ))}
            </div>

            <div className="md:col-span-2 border-2 h-40 flex flex-col items-center justify-start">
              <div className="flex flex-col border-b-2 py-3">
                <span className="font-bold text-base">Subtotal ({cartItems.reduce((acc, item)=> acc + item.qty, 0)}) items</span>
                <span className="text-lime-600 text-lg">$:{cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0).toFixed(2)}</span>
              </div>
              <div className="py-4 px-2 bg-slate-600 rounded-2xl mt-2 hover:bg-slate-700 text-white">
                <button disabled={cartItems.length === 0} onClick={()=> CheckoutHandler()}>
                    Proceed to Checkout
                </button>
              </div>
          </div>
        </div>
       )
        }


    </>
    
  )
}
