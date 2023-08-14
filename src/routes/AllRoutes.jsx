import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Registration from '../components/Registration';
import ProductEdit from '../components/ProductEdit';
import ProductHome from '../components/ProductHome';
import Error from '../pages/Error';
import Product from '../components/Product';
import Card from '../components/Card';


const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/productEdit' element={<ProductEdit />} />
          <Route path='/' element={<ProductHome />} />
          <Route path='/*' element={<Error />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AllRoutes