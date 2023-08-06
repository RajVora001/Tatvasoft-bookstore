import React from 'react'

const Registration = () => {
  return (
    <>
      <div className='flex flex-col items-center' >
        <h1 className=' text-3xl mt-12' >Login or Create an Account</h1>
        <div className=' w-32 h-0.5 bg-red-500 rounded-lg mt-6 mb-12' />
      </div>
      <div className='flex items-center flex-col justify-center'>
        <span className=' text-xl mb-5' >Personal Information</span>
        <div className=' w-2/3 h-px bg-slate-500 mb-5' />
        <span className=' text-slate-400' >Please enter the following information to create your account.</span>

        <span className=' text-sm mt-5 mb-3'>First Name*</span>
        <input type="text" name="firstName" className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

        <span className=' text-sm mt-5 mb-3'>Last Name*</span>
        <input type="text" name="lastName" className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

        <span className=' text-sm mt-5 mb-3'>Email*</span>
        <input type="email" name="email" className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

        <span className=' text-xl mb-5 mt-16' >Login Information</span>
        <div className=' w-2/3 h-px bg-slate-500 mb-5' />

        <span className=' text-sm mt-5 mb-3'>Password*</span>
        <input type='password' name="password" className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

        <span className=' text-sm mt-5 mb-3'>Confirm Password*</span>
        <input type="password" name="confirmPawwrod" className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

        <button type="submit" className=' w-32 h-11 bg-red-500 mt-14 text-white rounded-md mb-20' >Register</button>


      </div>
    </>
  )
}

export default Registration