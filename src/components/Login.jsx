import React from 'react'
import { useState, useEffect } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    const { email, password } = formData;
    let errors = {};

    // Validation rules, add more rules as needed
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    } else {
      errors.email = '';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else {
      errors.password = '';
    }

    setFormErrors(errors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <button className=' w-56 h-11 bg-red-500 text-white text-lg rounded mt-40 mb-20 hover:bg-red-600 font-semibold' >Create an Account</button>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col mr-52'>
            <span className=' text-xl mb-5' >Registered Customer</span>
            <div className=' w-5/6 h-px bg-slate-500 mb-5' />

            <span className=' text-sm mt-5 mb-3'>Email Address*</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
            {formErrors.email && <span>{formErrors.email}</span>}

            <span className=' text-sm mt-5 mb-3'>Password*</span>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
            {formErrors.password && <span>{formErrors.password}</span>}
            
            <button type="submit" className=' bg-red-500 w-24 h-11 rounded text-white text-lg mt-14 mb-20 hover:bg-red-600 font-semibold'>Login</button>

          </form>
        </div>
      </div>

    </>
  )
}

export default Login;