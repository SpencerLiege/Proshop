import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import panda from '../assets/panda.jpeg'
import {Link} from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { destroyCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';

export default function Header(){

    const { cartItems} = useSelector( (state) => state.cart)
    const { userInfo} = useSelector( (state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ logoutApi ] = useLogoutMutation()

    const [isToggle, setIstoggle] = useState(false)

    const toggleHandler = ()=> {
        setIstoggle(!isToggle)
    }

    const logoutHandler = async ()=> {
        try {
            await logoutApi().unwrap()
            dispatch(logout())
            dispatch(destroyCart())
            
            navigate('/login')
            toast.success('Logout success')
        } catch (error) {
            console.log(error)
        }
    }

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

                {
                    userInfo ? ( 
                        <>
                            <Link onClick={toggleHandler} title={userInfo.name} className={`flex items-center p-2 gap-1 rounded-full ${!isToggle ? `hover:bg-slate-200` : `hover:bg-slate-100`}`}>
                                {userInfo.name} <BsPerson />
                            </Link>
                            {
                                isToggle && (
                                    <div className='flex flex-col items-center absolute top-10 right-12 mt-2 bg-slate-100 rounded-md'>
                                        <Link className='flex items-center gap-2 hover:bg-slate-200 self-start p-1 w-full text-sm font-medium' onClick={()=> setIstoggle(false)}>
                                            Profile <CgProfile />
                                        </Link>
                                        <button className='flex items-center gap-2 hover:bg-slate-200 self-start p-1 w-full text-sm font-medium' onClick={()=> {
                                              logoutHandler()
                                              setIstoggle(false)
                                        } 
                                        }>
                                            Logout <IoIosLogOut />
                                        </button>
                                    </div>
                                )
                            }
                        </>
                     
                    ) :
                     (  
                           <Link to={`/login`} className='flex items-center p-2 gap-1  hover:bg-slate-200 rounded-full'><span>Sign In</span> <BsPerson /> </Link> 
                        )
                }
           
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