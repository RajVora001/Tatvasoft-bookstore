import React from 'react';
import { useState, useEffect } from 'react';

const Registration = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    let errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    } else {
      errors.firstName = '';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    } else {
      errors.lastName = '';
    }

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

    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    } else {
      errors.confirmPassword = '';
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = 'YOUR_API_ENDPOINT';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Form data submitted successfully:', data);
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <>
      <div className='flex flex-col items-center' >
        <h1 className=' text-3xl mt-12' >Login or Create an Account</h1>
        <div className=' w-32 h-0.5 bg-red-500 rounded-lg mt-6 mb-12' />
      </div>
      <form onSubmit={handleSubmit} className='flex items-center flex-col justify-center'>
        <span className=' text-xl mb-5' >Personal Information</span>
        <div className=' w-2/3 h-px bg-slate-500 mb-5' />
        <span className=' text-slate-400' >Please enter the following information to create your account.</span>

        <span className=' text-sm mt-5 mb-3'>First Name*</span>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
        {formErrors.firstName && <span>{formErrors.firstName}</span>}

        <span className=' text-sm mt-5 mb-3'>Last Name*</span>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
        {formErrors.lastName && <span>{formErrors.lastName}</span>}

        <span className=' text-sm mt-5 mb-3'>Email*</span>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
        {formErrors.email && <span>{formErrors.email}</span>}

        <span className=' text-xl mb-5 mt-16' >Login Information</span>
        <div className=' w-2/3 h-px bg-slate-500 mb-5' />

        <span className=' text-sm mt-5 mb-3'>Password*</span>
        <input type='password' name="password" value={formData.password} onChange={handleChange} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
        {formErrors.password && <span>{formErrors.password}</span>}

        <span className=' text-sm mt-5 mb-3'>Confirm Password*</span>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className=' w-80 h-10 border-2 border-slate-400 rounded-md' />
        {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
        <button type="submit" className=' w-32 h-11 bg-red-500 mt-14 text-white rounded-md mb-20 hover:bg-red-600 font-semibold' >Register</button>


      </form>
    </>
  )
}

export default Registration;