import React from 'react'
import { useState } from 'react'

const ProductEdit = () => {

    const [selectedFileName, setSelectedFileName] = useState('Choose File');

    const handleFileChange = (event) => {
      const fileName = event.target.files[0]?.name || 'Choose File';
      setSelectedFileName(fileName);
    };

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

                <div className="flex flex-row justify-around  mt-16 mb-3 w-80">
                    <input type="file" id="fileInput" className="absolute opacity-0 w-full h-full cursor-pointer" onChange={handleFileChange} />
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded cursor-pointer font-semibold">
                        Upload
                    </button>
                    <p className=' border-2 border-slate-400 w-72 h-10 flex items-center rounded'>&nbsp;{selectedFileName}</p>
                </div>


                <div className='flex flex-row mt-9 justify-around w-80'>
                    <button type="submit" className=' w-24 h-10 bg-green-500 text-white font-semibold rounded'>Save</button>
                    <button className=' w-24 h-10 bg-red-500 text-white font-semibold rounded '>Cancel</button>
                </div>

            </form>
        </>
    )
}

export default ProductEdit