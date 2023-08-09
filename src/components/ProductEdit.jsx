import React from 'react'
import { useState, useEffect } from 'react'

const ProductEdit = () => {
    return (
        <>
            <div className='flex flex-col items-center' >
                <h1 className=' text-3xl mt-12 font-semibold' >Edit Product</h1>
                <div className=' w-32 h-0.5 bg-red-500 rounded-lg mt-6 mb-12' />
            </div>
            <form action="" className='flex items-center flex-col justify-center'>
                <span className=' text-sm mt-5 mb-3'>First Name*</span>
                <input type="text" name="firstName" value={''} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
                 
                <span className=' text-sm mt-5 mb-3'>Last Name*</span>
                <input type="text" name="lastName" value={''} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

                <span className=' text-sm mt-5 mb-3'>Shop by Categories</span>
                <input type="text" name="categories" value={''} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

                <span className=' text-sm mt-5 mb-3'>Discription</span>
                <input type="text" name="discription" value={''} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />

                <label className='mt-5 mb-3'>Choose a File</label>
                <input type="file" name="file" value={''} className='' />

                <div className='flex flex-row mt-9 justify-between w-60'>
                    <button type="submit" className=' w-24 h-10 bg-green-500 text-white font-semibold rounded '>Save</button>
                    <button className=' w-24 h-10 bg-red-500 text-white font-semibold rounded '>Cancel</button>
                </div>

            </form>
        </>
    )
}

export default ProductEdit