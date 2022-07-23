import React from 'react'
import {Routes, Route} from "react-router-dom";
import Customers from '../Pages/Customers';
import Home from '../Pages/Home';
import Pricing from '../Pages/Pricing';

const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pricing" element={<Pricing />}/>
            <Route path='/customers' element={<Customers />} />
        </Routes>
    </div>
  )
}

export default AllRouters