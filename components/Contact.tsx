"use client"
import React, { useState } from 'react'

const contact = () => {
  const [name, setName] = useState('Cynaptics Club')
  const [number, setNumber] = useState('836745756')
  const [email, setEmail] = useState('cynapticsclub@gmail.com')
  const [address, setAddress] = useState('Indian Institute of Technology, Simrol, Indore, 452020')
  return (
    <>
      <div id='container' className=' flex flex-row flex-wrap  bg-[#F6F6F6]  ' >

        <div id='contact' className='mt-10 ml-[4rem]  h-12 px-6 py-1.5 bg-white font-[Inter] text-3xl font-bold  rounded-3xl shadow-md max-[360px]:text-2xl ' >
          Contact Us
        </div>

        <div id='contact-box' className='mt-8 mb-16 flex flex-column flex-wrap px-2 py-2 m-auto bg-white border-2 rounded-xl shadow-md text-xl md:w-[40rem] lg:w-[46.8rem]  xl:w-[78.1rem]' style={{ maxWidth: '95%' }}>
         
          <div className=' ml-4 p-2 '>

            {/* Club info */}
            <div className='flex flex-column mt-10'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

              <p className='ml-4  font-[Inter] font-semibold max-[280px]:text-sm '>{name}</p>
            </div>
            <div className='flex flex-column mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

              <p className='ml-4  font-[Inter] font-semibold max-[280px]:text-sm'>{number}</p>
            </div>
            <div className='flex flex-column mt-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

              <p className='ml-4  font-[Inter] font-semibold max-[280px]:text-sm'>{email}</p>
            </div>
            <div className='flex flex-column mt-2 mb-4 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p className=' ml-4 font-[Inter] font-semibold max-[280px]:text-sm'>{address}</p>
            </div>
          </div>

          {/* Map component */}

          <iframe className='border-2 rounded-xl w-[40rem] h-[20rem] max-[280px]:w-[15rem]'   id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=IIT%20Indore%20Simrol+(IIT%20Indore)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
           
        </div>
      </div>
    </>
  )
}

export default contact