import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Spinner } from '@material-tailwind/react'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'


export default function LoginScreen() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state)=> state.auth ) 

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const redirect = searchParams.get('redirect') || '/products'

    useEffect(()=> {
        if(userInfo){
            navigate(redirect)
        }
    }, [userInfo, redirect, navigate])


    const submitHandler = async (e) =>{
        e.preventDefault()
        try {
            const res = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...res }))
            navigate(redirect)
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }


  return (
    <div className="mt-20 flex justify-center">
        <div className=" border-2 border-slate-100 shadow-md px-20 py-12 ">
           <h1 className='text-2xl text-slate-700 font-bold mb-6'>Login</h1>
           <form onSubmit={submitHandler} className='text-slate-900 flex flex-col gap-y-4 ' action="">
                <div className="flex flex-col">
                    <label className='font-medium text-slate-500 text-lg' htmlFor="email">Email</label>
                    <input onChange={(e)=> setEmail(e.target.value)} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none focus:bg-sky-100 ' type="text" />
                </div>
                <div className="flex flex-col"> 
                    <label className='font-medium text-slate-500 text-lg' htmlFor="password">Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none focus:bg-sky-100' type="password" name="password" id="" />
                </div>
                <div>
                    <button disabled={isLoading} className='bg-sky-500 font-semibold rounded-full px-3 text-white py-1 hover:bg-sky-600 transition ease-in-out hover:scale-105 duration-500'>Login</button>
                </div>
                { isLoading && <Spinner />}
           </form>

           <div className='flex text-slate-500 mt-8 gap-x-20 '>
                    <span className=''>Do not have an account?</span>
                    <Link to={redirect ? `/register?redirect=${redirect}` : `/register`} className='text-sky-600 hover:text-sky-800 underline underline-offset-4 font-bold hover:font-bold'>Sign Up </Link>
            </div>  
        </div>

    </div>
  )
}




