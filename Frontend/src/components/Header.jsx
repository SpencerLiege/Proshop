import { useSelector } from 'react-redux';
import panda from '../assets/panda.jpeg'
import {Link} from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

export default function Header(){

    const { cartItems} = useSelector( (state) => state.cart)
    return(
        <>
        <header className='flex px-10 py-2 bg-slate-100 z-10 w-full fixed top-0 justify-between'>
            <Link to='/products'>
                <img src={panda} alt="" className='w-12 h-12' />
            </Link>
            <div className='text-base font-semibold flex'>
                <Link to={`/cart`} className='flex items-center p-2 gap-1 hover:bg-slate-200 rounded-full'>
                    <span>Cart</span> <IoCartOutline className='z-10'/>
                    {
                        cartItems.length > 0 && (<span className='text-base text-lime-500 -ml-2 px-1 bg-gray-200 rounded-full'>{cartItems.reduce((a,c) => a + c.qty, 0)}</span>)
                    }
                </Link>
                
                <Link to={`/login`} className='flex items-center p-2 gap-1  hover:bg-slate-200 rounded-full'><span>Sign In</span> <BsPerson /> </Link>
            </div>
        </header>
        </>
    )
}

// {cartItems.length > 0 && (
//     <Badge pill bg='success' style={{ marginLeft: '5px' }}>
//       {cartItems.reduce((a, c) => a + c.qty, 0)}
//     </Badge>
//   )}