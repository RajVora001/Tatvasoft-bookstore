import React from 'react'
import { useState, useEffect } from 'react';

const Login = () => {

  return (
    <>

      <div className='flex flex-col items-center' >
        <h1 className=' text-3xl mt-12' >Login or Create an Account</h1>
        <div className=' w-32 h-0.5 bg-red-500 rounded-lg mt-6 mb-12' />
      </div>
      <div>
        <div className='flex items-center flex-row justify-between'>
          <div className=' ml-52'>
            <span className=' text-xl mb-5' >New Customer</span>
            <div className=' w-5/6 h-px bg-slate-500 mb-5' />
            <p>Registration is free and easy</p>
            <ol className=''>
              <li>Faster checkout</li>
              <li>Save multiple shipping addresses</li>
              <li>View and track orders and more</li>
            </ol>
            <button className=' w-56 h-11 bg-red-500 text-white text-lg rounded mt-40 mb-20' >Create an Account</button>
          </div>
          <div className='flex flex-col mr-52'>
            <span className=' text-xl mb-5' >Registered Customer</span>
            <div className=' w-5/6 h-px bg-slate-500 mb-5' />

            <span className=' text-sm mt-5 mb-3'>Email Address*</span>
            <input type="email" name="email" className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

            <span className=' text-sm mt-5 mb-3'>Password*</span>
            <input type="password" name="password" className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

            <button type="submit" className=' bg-red-500 w-24 h-11 rounded text-white text-lg mt-14 mb-20'>Login</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login;