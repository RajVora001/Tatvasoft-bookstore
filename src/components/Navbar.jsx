import React, { useState } from 'react';
import logo from '../assets/images/site-logo.svg';
import cart from '../assets/images/cart.png'
import search from '../assets/images/search.png'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    // Simulate fetching suggestions (replace with your API call)
    setSuggestions(['Apple', 'Banana', 'Cherry'].filter((item) =>
      item.toLowerCase().includes(newTerm.toLowerCase())
    ));
  };

  const data = useSelector((state)=>{
    return state.carts;
  })

  return (
    <>
      <div className='w-full h-2 bg-red-500' />
      <nav className='flex flex-row h-24 justify-between items-center'>
        <img src={logo} alt="logo" className=' w-48 ml-8'/>
        <div className='flex flex-row'>
          <Link relative='./login' className='text-red-500 text-base'>Login</Link>&nbsp;|&nbsp;
          <Link to='/registration' className='text-red-500 text-base'>Register</Link>
          <button className='ml-5 mr-6 pl-1 flex flex-row justify-center items-center h-9 w-24 rounded border-2 border-slate-700 bg-slate-200 '>
            <img src={cart} alt="cart" className='mr-2' />
            {data} Cart
          </button>
        </div>
      </nav>
      <div>
      <div className='w-full h-20 bg-slate-200 flex flex-row justify-center items-center mb-12'>
        <input
          type="text"
          name="search"
          placeholder=' What are you looking for..'
          className='w-96 h-10 rounded-md border-2 border-slate-400'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='h-10 w-32 bg-green-500 border-2 ml-1 text-white text-base rounded-md hover:bg-green-600 font-semibold flex flex-row justify-center items-center' > <img src={search} alt="" className='mr-2' /> Search</button>
        <button className='h-10 w-32 bg-red-500 border-2 ml-1 text-white text-base rounded-md hover:bg-red-600 font-semibold' >Cancel</button>
      </div>
      <div className='flex flex-col justify-center items-center w-full '>
        {suggestions.length > 0 && (
          <ul className='absolute left-0 w-96 bg-gray-300 border border-gray-300 rounded-md p-2'>
            {suggestions.map((item) => (
              <li key={item} className='cursor-pointer hover:bg-gray-100 p-1'>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </>
  );
};

export default Navbar;
