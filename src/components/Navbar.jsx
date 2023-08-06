import React, { useState } from 'react'

const Navbar = () => {

  const [Num, setNum] = useState('0');
  return (
    <>
      <div className=' w-full h-2 bg-red-500' />
      <nav className='flex flex-row h-24 justify-between items-center'>
        <img src="#" alt="logo" />
        <div>
          <a href="#" className='text-red-500 text-base'>Login</a>&nbsp;|&nbsp;
          <a href="#" className='text-red-500 text-base' >Register</a>
          <button className='ml-2 mr-2 pl-1 rounded border-2 border-slate-700 bg-slate-200 '><img src="#" alt="" />{Num} Cart</button>
        </div>
      </nav>
      <div className=' w-full h-20 bg-slate-200 flex flex-row justify-center items-center mb-12' >
        <input type="text" name="search" placeholder=' What are you looking for..' className='w-96 h-10 rounded-md border-2 border-slate-400' />
        <button className=' h-10 w-32 bg-green-500 border-2 ml-1 text-white text-base rounded-md hover:bg-green-600 font-semibold' >Search</button>
        <button className=' h-10 w-32 bg-red-500 border-2 ml-1 text-white text-base rounded-md hover:bg-red-600 font-semibold' >Cancel</button>
      </div>
    </>
  )
}

export default Navbar