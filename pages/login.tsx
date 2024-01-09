import React from 'react'
import '../app/globals.css'

export default function login() {
  return (
    <div className='flex h-[100vh] w-[100vw] bg-[rgb(33,11,98)] items-center '>
      <div className='flex flex-col  h-[75vh] max-h-[35rem] w-[90%] max-w-[30rem] mx-auto bg-white rounded-lg items-center shadow-md shadow-current'>
        <img src='/gymkhana.jpg' height='150' width='120' className='rounded-full mt-16'></img>
        <h1 className='text-2xl mt-4 font-semibold text-center'>Hey, good to see you again!</h1>
        <p className='text-sm font-thin text-gray-400'>Login to get going</p>

        <div className='flex flex-row w-[75%] h-12 border-2 mt-8 text-sm p-1' id='sign-in'> Sign in as
          <span className=' w-2 h-2'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-6 h-6' viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
          </span>
        </div>
        <hr className='w-[80%] mt-3' />
        <div className='flex flex-row mt-3'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </span>
          <a href='#' className='text-sm mx-4 font-normal hover:font-semibold' id='another-account'>Use another account</a>
        </div>
        <hr className='w-[80%] mt-2' />
        <p className='mt-3 text-gray-300 font-semibold text-md'>Please Use College Id</p>
      </div>
    </div>
  )
}
