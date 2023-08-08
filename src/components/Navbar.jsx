import React, { useState } from 'react';

const Navbar = () => {
  const [num, setNum] = useState('0');
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

  return (
    <>
      <div className='w-full h-2 bg-red-500' />
      <nav className='flex flex-row h-24 justify-between items-center'>
        <img src="#" alt="logo" />
        <div>
          <a href="#" className='text-red-500 text-base'>Login</a>&nbsp;|&nbsp;
          <a href="#" className='text-red-500 text-base'>Register</a>
          <button className='ml-2 mr-2 pl-1 rounded border-2 border-slate-700 bg-slate-200 '>
            <img src="#" alt="" />
            {num} Cart
          </button>
        </div>
      </nav>
      <div className='w-full h-20 bg-slate-200 flex flex-row justify-center items-center mb-12'>
        <input
          type="text"
          name="search"
          placeholder=' What are you looking for..'
          className='w-96 h-10 rounded-md border-2 border-slate-400'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='h-10 w-32 bg-green-500 border-2 ml-1 text-white text-base rounded-md hover:bg-green-600 font-semibold' >Search</button>
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
    </>
  );
};

export default Navbar;
