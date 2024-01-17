"use client"
import Image from 'next/image'
import { useState } from 'react';

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"EVENTS",link:"/"},
      {name:"MEMBERS",link:"/"},
      {name:"CONTACT",link:"/"},
      
    ];
    let [open, setOpen] =useState(true);

  return (
      <div className='shadow-md w-full fixed top-0 left-0'>
         <div className='md:w-full md:flex items-center justify-between bg-white py-4 md:py-1 md:px-10 px-7'>
          {/* logo section */}
          <div className='md:hidden font-bold text-2xl cursor-pointer flex items-center gap-1'>
              
              <span><Image src='/Apple-Logo.png' width='80' height='80' alt='logo' className='rounded-full md:hidden'></Image></span>
          </div>
          {/* Menu icon */}
          <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
              {
                  open ? <Image src='/close.png' width='500' height='500' alt='close'></Image> : <Image src='/hamburger.png' width='500' height='500' alt='open'></Image>
              }
          </div>
          {/* linke items */}
          <div className={`md:w-full md:flex md:items-center md:justify-around md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 ml-48 md:ml-0 lg:mx-32 pl-6 border-2 md:border-0 rounded-3xl pt-4 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
              
                  <div className='md:mx-4 md:my-0 my-7 font-semibold'>
                      <a href='/' className='text-gray-800 hover:text-blue-400 duration-500'>Home</a>
          </div>
                  <div className='md:mx-4 md:my-0 my-7 font-semibold'>
                      <a href='/' className='text-gray-800 hover:text-blue-400 duration-500'>Home</a>
                  </div>
                  <div>
                    <Image src='/Apple-Logo.png' width='100' height='100' alt='logo' className='rounded-full hidden md:inline'></Image>
                  </div>
                  <div className='md:mx-4 md:my-0 my-7 font-semibold'>
                      <a href='/' className='text-gray-800 hover:text-blue-400 duration-500'>Home</a>
                  </div>
                  <div className='md:mx-4 md:my-0 my-7 font-semibold'>
                      <a href='/' className='text-gray-800 hover:text-blue-400 duration-500'>Home</a>
                  </div>
          </div>
          {/* button */}
         </div>
      </div>
  );
}

export default Navbar