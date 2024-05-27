// import panda from '../assets/panda.jpeg'
import panda from '../assets/panda.jpeg'
import { IoCartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

export default function Header(){
    return(
        <>
        <header className='flex px-10 py-2 bg-slate-100 z-10 w-full fixed top-0 justify-between'>
            <a href=''>
                <img src={panda} alt="" className='w-12 h-12' />
            </a>
            <div className='text-base font-semibold flex gap-3'>
                <a href="" className='flex items-center p-2 gap-1 hover:bg-slate-200 rounded-full'><span>Cart</span> <IoCartOutline /></a>
                <a href="" className='flex items-center p-2 gap-1  hover:bg-slate-200 rounded-full'><span>Sign up</span> <BsPerson /> </a>
            </div>
        </header>
        </>
    )
}