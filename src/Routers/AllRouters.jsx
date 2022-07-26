import React from 'react'
import {Routes, Route} from "react-router-dom";
import Customers from '../Pages/Customers';
import Home from '../Pages/Home';
import Pricing from '../Pages/Pricing';
import Login from '../Pages/Login';
import GetDemo from '../Pages/GetDemo';

const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pricing" element={<Pricing />}/>
            <Route path='/customers' element={<Customers />} />
            <Route path='/login' element={<Login />} />
            <Route path='/get-demo' element={<GetDemo />} />
        </Routes>
    </div>
  )
}

export default AllRouters