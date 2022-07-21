import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home';
import Pricing from '../Pages/Pricing';

const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pricing" element={<Pricing />}/>
        </Routes>
    </div>
  )
}

export default AllRouters