import React from 'react';
import pricing from './Css/pricing.module.css';
import HeadingPricePage from '../Components/Pricing/HeadingPricePage';
import PricingDetails from '../Components/Pricing/PricingDetails';
import PlanTypes from '../Components/Pricing/PlanTypes';
import PlanInformation from '../Components/Pricing/PlanInformation';
import Navbar from '../Components/Home/Navbar';

const Pricing = () => {
  return (
    <>
       <div className={pricing.heading}>
        <div>
          <Navbar color="white"/>
        </div>
        <div className={pricing.heading1}>
          <HeadingPricePage />
          <PricingDetails />
          <PlanTypes />
        </div>
       </div>
       <div>
           <PlanInformation />
       </div>
    </>
  )
}

export default Pricing