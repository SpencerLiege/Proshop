import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useRegisterMutation } from "../slices/userApiSlice"
import { setCredentials } from "../slices/authSlice"
import { toast } from "react-toastify"
import Loader from '../components/Loader.jsx'

export default function RegisterScreen() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userInfo } = useSelector((state)=> state.auth ) 

    const [register, { isLoading }] = useRegisterMutation()

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const redirect = searchParams.get('redirect') || '/products'

    useEffect(()=> {
        if(userInfo){
            navigate(redirect)
        }
    }, [userInfo, redirect, navigate])


    const submitHandler = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('Passwords not the same')
        }
        else{
            try {
                const res = await register({name, email, password }).unwrap()
                dispatch(setCredentials({ ...res }))
                navigate(redirect)
                toast.success('Registration success')
            } catch (error) {
                toast.error(error?.data?.message || error.error)
            }
        }
    
    }
  return (
    <div className="mt-20 flex justify-center">
        <div className=" border-2 border-slate-100 shadow-md px-20 py-12 ">
           <h1 className='text-2xl text-slate-700 font-bold mb-6'>Sign Up</h1>
           <form onSubmit={submitHandler} className='text-slate-900 flex flex-col gap-y-4 ' action="" id='register'>
                <div className="flex flex-col">
                        <label className='font-medium text-slate-500 text-lg' htmlFor="name" name='name' >Name</label>
                        <input onChange={(e)=> setName(e.target.value)} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none ' type="text" id='name' placeholder='Enter Your Name' />
                    </div>
                    <div className="flex flex-col">
                        <label className='font-medium text-slate-500 text-lg' htmlFor="email">Email</label>
                        <input onChange={(e)=> setEmail(e.target.value)} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none ' type="text" id='email' placeholder='Enter Your Email address' />
                    </div>
                    <div className="flex flex-col"> 
                        <label className='font-medium text-slate-500 text-lg' htmlFor="password" name='password' >Password</label>
                        <input onChange={(e)=> setPassword(e.target.value)} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none' type="password" name="password" id="password" placeholder='Input a password' />
                    </div>
                    <div className="flex flex-col"> 
                        <label className='font-medium text-slate-500 text-lg' htmlFor="password" name='confrim-password' >Confirm Password</label>
                        <input onChange={(e)=> setConfirmPassword(e.target.value)} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none' type="password" name="confirm-password" id="confirm-password" placeholder='Confirm password' />
                    </div>
                    <div>
                        <button disabled={isLoading} className='bg-sky-500 font-semibold rounded-full px-3 text-white py-1 hover:bg-sky-600 transition ease-in-out hover:scale-105 duration-500'>Submit</button>
                    </div>
                    { isLoading && <Loader type='login' />}
           </form>

           <div className='flex text-slate-500 mt-4 gap-x-20 '>
                    <span className=''>Already have an account?</span>
                    <Link to={redirect ? `/login?redirect=${redirect}` : `/login`} className='text-sky-600 hover:text-sky-800 underline underline-offset-4 font-bold hover:font-bold'>Sign In </Link>
            </div>  

        </div>

    </div>
  )
}
