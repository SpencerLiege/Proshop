import { Link } from "react-router-dom"

export default function RegisterScreen() {

    const submitHandler = async (e) => {
        e.preventDefault()
    }
  return (
    <div className="mt-20 flex justify-center">
        <div className=" border-2 border-slate-100 shadow-md px-20 py-12 ">
           <h1 className='text-2xl text-slate-700 font-bold mb-6'>Sign Up</h1>
           <form onSubmit={submitHandler} className='text-slate-900 flex flex-col gap-y-4 ' action="">
                <div className="flex flex-col">
                        <label className='font-medium text-slate-500 text-lg' htmlFor="name">Name</label>
                        <input  className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none ' type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className='font-medium text-slate-500 text-lg' htmlFor="email">Email</label>
                        <input  className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none ' type="text" />
                    </div>
                    <div className="flex flex-col"> 
                        <label className='font-medium text-slate-500 text-lg' htmlFor="password">Password</label>
                        <input className='text-md font-medium text-slate-500 w-80 p-1 border-2 shadow-md rounded-sm border-slate-200 focus:outline-none' type="password" name="password" id="" />
                    </div>
                    <div>
                        <button  className='bg-sky-500 font-semibold rounded-full px-3 text-white py-1 hover:bg-sky-600 transition ease-in-out hover:scale-105 duration-500'>Submit</button>
                    </div>
           </form>

           <div className='flex text-slate-500 mt-8 gap-x-20 '>
                    <span className=''>Already have an account?</span>
                    <Link to={`/login`} className='text-sky-600 hover:text-sky-800 underline underline-offset-4 font-bold hover:font-bold'>Sign In </Link>
            </div>  

        </div>

    </div>
  )
}
