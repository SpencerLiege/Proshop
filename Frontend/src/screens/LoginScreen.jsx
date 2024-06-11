import { Link } from 'react-router-dom'
// import { useState } from 'react'


export default function LoginScreen() {
    // const [password setPassword] = useState('')
    // const [email setEmail] = useState('')


    const submitHandler = (e) =>{
        e.preventDefault()
    }


  return (
    <div className="mt-20 flex justify-center">
        <div className=" border-2 border-slate-100 shadow-md px-20 py-16 ">
           <h1 className='text-2xl text-slate-700 font-bold mb-6'>Login</h1>
           <form onSubmit={submitHandler} className='text-slate-900 flex flex-col gap-y-4 ' action="">
                <div className="flex flex-col">
                    <label className='font-medium text-slate-500 text-lg' htmlFor="email">Email</label>
                    <input  className='text-lg border-2 shadow-md rounded-sm border-slate-200 focus:outline-none ' type="text" />
                </div>
                <div className="flex flex-col"> 
                    <label className='font-medium text-slate-500 text-lg' htmlFor="password">Password</label>
                    <input className='text-lg border-2 shadow-md rounded-sm border-slate-200 focus:outline-none' type="password" name="password" id="" />
                </div>
                <div>
                    <button className='bg-sky-500 font-semibold rounded-full px-3 text-white py-1 hover:bg-sky-600 transition ease-in-out hover:scale-105 duration-500'>Login</button>
                </div>
           </form>

           <div className='flex text-slate-500 mt-3 gap-x-2'>
                    <span>Do not have an account?</span>
                    <Link to={`/register`} className='text-sky-600 hover:text-sky-800 font-bold hover:font-bold'>Sign Up </Link>
            </div>  
        </div>

    </div>
  )
}




