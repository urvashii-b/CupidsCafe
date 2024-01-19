import React from 'react'
import Logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-pink-50 backdrop-blur-smpy-4 sm:py-4'>
        <div className="container">
           <div className="flex justify-between ietms-center">
                <div className="flex items-center gap-4 text-pink-500 font-bold text-2xl">
                    <img src={Logo} alt="logo"className='w-20' />
                    <span>UwU Café</span>
                </div>
                <div className='text-pink-500'>
                    <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
                        <li>
                            <a href="#">Info</a>
                        </li>
                        <li>
                            <a href="#">Love</a>
                        </li>
                        <li>
                            <a href="#">Order</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='text-pink-500 border-2 border-pink-500 px-3 py-1 rounded-md'>Welcome</button>
                </div>
           </div>
        </div>
    </div>
  )
};

export default Navbar
