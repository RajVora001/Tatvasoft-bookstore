import React from 'react';
import logo from '../assets/images/site-logo.svg'

const Footer = () => {
  return (
    <div className=' mt-20 flex items-center justify-center flex-col h-36 bg-slate-300'>
        <img src={logo} alt="logo" className=' w-52 mb-5' />
        <p> © 2015 Tatvasoft.com. All rights reserved.</p>
    </div>
  )
}

export default Footer