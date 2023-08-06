import React from 'react'

const Product = () => {

    const product = {
        id: '12',
        title: 'IBSM Followup',
        source: 'Data Source 1',
        query: 'Teste'
    };

    const productList = [];
    productList[0] = product;


    return (
        <>
            <div className='flex flex-col items-center' >
                <h1 className=' text-3xl mt-12 font-semibold' >Product page</h1>
                <div className=' w-32 h-0.5 bg-red-500 rounded-lg mt-6 mb-12' />
            </div>
            <div className=' mt-11 flex flex-row justify-end '>
                <input type="text" name="search" placeholder=' Search...' className=' w-80 h-10 rounded bg-slate-100 border-2 border-slate-300 mr-3' />
                <button className=' w-24 h-10 bg-red-500 text-white mr-16 rounded font-semibold mb-8 hover:bg-red-600' >Add Product</button>
            </div>
            <div className='flex flex-col'>
                <ul className='flex flex-row justify-between w-1/2 ml-20 text-sm font-semibold mb-5'>
                    <li>Id</li>
                    <li>Ttitulo</li>
                    <li>Fonte De Dasos</li>
                    <li>Query</li>
                </ul>
                <div className=' ml-12 w-11/12 bg-slate-400 h-0.5' />
                <div className='flex flex-row justify-between items-center'>
                    <ul className='flex flex-row justify-between w-1/2 h-16 items-center ml-20 text-sm font-semibold mb-5'>
                        <li>{productList[0].id}</li>
                        <li>{productList[0].title}</li>
                        <li>{productList[0].source}</li>
                        <li>{productList[0].query}</li>
                    </ul>
                    <ul className='flex flex-row mr-16'>
                        <li>
                            <button className=' w-20 h-7 mr-3 border-2 border-green-400 text-green-400 font-semibold rounded hover:bg-green-400 hover:text-white'>Edit</button>
                        </li>
                        <li>
                            <button className=' w-20 h-7 border-2 border-red-400 text-red-400 font-semibold rounded hover:bg-red-400 hover:text-white'>Delete</button>
                        </li>
                    </ul>
                </div>
                <div className=' ml-12 w-11/12 bg-slate-400 h-0.5' />

            </div>
        </>
    )
}

export default Product;