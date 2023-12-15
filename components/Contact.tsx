"use client"
import React, { useState } from 'react'

const contact = () => {
  const [name, setName] = useState('Cynaptics Club')
  const [number, setNumber] = useState('836745756')
  const [email, setEmail] = useState('cynapticsclub@gmail.com')
  const [address, setAddress] = useState('Indian Institute of Technology, Simrol, Indore, 452020')
  return (
    <>
      <div id='container' className=' flex flex-row flex-wrap  bg-[#F6F6F6] mt-8 ' >

        <div id='contact' className='mt-10 ml-[5.3rem] w-60 h-12 px-6 py-1.5 bg-white font-[Inter] text-3xl font-bold  rounded-3xl shadow-' >
          Contact Us
        </div>

        <div id='contact-box' className='mt-8 mb-16 flex flex-column flex-wrap px-2 py-2 m-auto bg-white border-2 rounded-xl shadow-md  ' style={{ maxWidth: '90%'}}>
          <div className='w-[38rem] ml-4 sm:p-2 '>

            {/* Club info */}
            <div className='flex flex-column mt-10'>
              <div className='w-5 h-5 p-1 mt-2 border-double border-4 border-indigo-500'></div>
              <p className='ml-4 mt-1 font-[Inter] font-semibold text-xl'>{name}</p>
            </div>
            <div className='flex flex-column mt-2'>
              <div className='w-5 h-5 p-1 mt-1 border-double border-4 border-indigo-500'></div>
              <p className='ml-4  font-[Inter] font-semibold text-xl'>{number}</p>
            </div>
            <div className='flex flex-column mt-2'>
              <div className='w-5 h-5 p-1 mt-1 border-double border-4 border-indigo-500'></div>
              <p className='ml-4  font-[Inter] font-semibold text-xl'>{email}</p>
            </div>
            <div className='flex flex-column mt-2 mb-4'>
              <div className='w-5 h-5 p-1 mt-1  border-double border-4 border-indigo-500'></div>
              <p className='ml-4  font-[Inter] font-semibold text-xl'>{address}</p>
            </div>
          </div>

          {/* Map component */}
          
            <iframe className='w-[37rem] h-[20em] sm:ml-2 border-2 rounded-md overflow-auto shadow-md' id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=IIT%20Indore%20Indore+(IIT%20Indore)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=0c88ffde8cecd089639c4c73aa681e52cafee19f'></script>
         
        </div>
      </div>
    </>
  )
}

export default contact