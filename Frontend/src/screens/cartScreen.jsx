import Message from "../components/Message"
import { useSelector } from "react-redux"

export default function CartScreen() {
  const { cartItems} = useSelector((state) => state.cart)
  return (
    <>

        <div className="mt-20 pb-3  font-bold text-3xl text-slate-700 uppercase">Orders</div>
        { cartItems.length === 0 ? (
          <Message>Your Cart is empty </Message>
        ):
        (<div className="">
          {cartItems.map((item) => 
          (
            <div key={item._id}>
              {item.name}
            </div>
          ))}
        </div>)
        }


    </>
    
  )
}
