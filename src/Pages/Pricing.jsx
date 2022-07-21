import React from 'react';
import pricing from './Css/pricing.module.css';
import HeadingPricePage from '../Components/Pricing/HeadingPricePage';
import PricingDetails from '../Components/Pricing/PricingDetails';
import PlanTypes from '../Components/Pricing/PlanTypes';

const Pricing = () => {
  return (
    <>
       <div className={pricing.heading}>
        <div className={pricing.heading1}>
          <HeadingPricePage />
          <PricingDetails />
          <PlanTypes />
        </div>
       </div>
    </>
  )
}

export default Pricing