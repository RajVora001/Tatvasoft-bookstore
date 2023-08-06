import React from 'react'
import { useState } from 'react'

const Card = () => {

  const [Bookname, setBookname] = useState('Campus Sutra');
  const [Count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(Count + 1);
  }
  const handleDecremenr = () => {
    if (Count == 0) {
      setCount(0);
    } else {
      setCount(Count - 1);
    }
  }

  return (
    <>
      <div className=' w-1/2 h-36 border-2 border-slate-400 flex flex-row items-center rounded-md'>
        <img src="#" alt="img" className=' w-36 h-28 bg-slate-700' />
        <div className='flex flex-col ml-2'>
          <span className=' text-black'>{Bookname}</span>
          <span className=' text-sm text-red-500 mb-4' >Cart item name</span>

          <div className=' flex flex-row' >
            <button onClick={handleIncrement} className=' bg-red-500 w-5 h-5 text-lg flex items-center justify-center rounded-sm'>+</button>
            <span className=' w-5 h-5 bg-slate-400 ml-1 mr-1 flex justify-center items-center rounded-sm'>{Count}</span>
            <button onClick={handleDecremenr} className=' bg-red-500 w-5 h-5 text-lg flex items-center justify-center rounded-sm'>-</button>
          </div>
        </div>
        <button className=' text-red-500 text-base ml-96' >Remove</button>
      </div>
    </>
  )
}

export default Card