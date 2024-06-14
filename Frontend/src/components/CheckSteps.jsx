import { Link } from "react-router-dom"

export default function CheckSteps({ step1, step2, step3, step4 }) {
  return (
    <section className="flex gap-2 mb-3" >
        <div>
            { step1 ? 
            (
                <Link className='bg-lime-600 text-white py-1 px-2 rounded-full font-medium text-sm' to='/login'> <button >Login</button> </Link>
            ) : 
            (
                <Link className='bg-slate-400 text-white py-1 px-2 rounded-full font-medium text-sm' to='/login'> <button  disabled>Login</button> </Link>
            )
            }
        </div>
        <div>
            { step2 ? 
            (
                <Link className='bg-lime-600 text-white py-1 px-2 rounded-full font-medium text-sm' to='/shipping'> <button>Shipping</button> </Link>
            ) : 
            (
                <Link className='bg-slate-400 text-white py-1 px-2 rounded-full font-medium text-sm' to='/shipping' > <button disabled>Shipping</button> </Link>
            )
            }
        </div>
        <div>
            { step3 ? 
            (
                <Link className='bg-lime-600 text-white py-1 px-2 rounded-full font-medium text-sm' to='/payment'> <button>Payment</button> </Link>
            ) : 
            (
                <Link className='bg-slate-400 text-white py-1 px-2 rounded-full font-medium text-sm' to='/payment' > <button disabled>Payment</button> </Link>
            )
            }
        </div>
        <div>
            { step4 ? 
            (
                <Link className='bg-lime-600 text-white py-1 px-2 rounded-full font-medium text-sm' to='/placeorder'> <button>Place Order</button> </Link>
            ) : 
            (
                <Link className='bg-slate-400 text-white py-1 px-2 rounded-full font-medium text-sm' to='/placeorder' ><button disabled>Place Order</button></Link>
            )
            }
        </div>
    </section>
  )
}