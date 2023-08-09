import React from 'react'

const ProductHome = () => {
  return (
    <>
      <div className='flex flex-col w-52 h-96 bg-slate-200 ml-9 justify-between rounded-md'>
        <div className='w-52 h-10 bg-black text-white font-semibold rounded'>
          200 x 200
        </div>
        <label className='ml-2'>Product Title</label>
        <span className='ml-2'>Lorem</span>
        <p className='ml-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fuga nobis beatae nulla necessitatibus! Voluptates amet quaerat ex esse molestias?</p>
        <span className='ml-2'>MRP $1000</span>
        <span className='ml-2'>$800</span>
        <button className='bg-red-500 hover:bg-red-600 font-semibold text-white h-7 w-36 ml-8 mb-2 flex justify-center items-center rounded'>ADD TO Cart</button>
      </div>
    </>
  )
}

export default ProductHome;