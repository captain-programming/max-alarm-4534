import React from 'react';
import pricing from './Css/pricing.module.css';
import HeadingPricePage from '../Components/Pricing/HeadingPricePage';
import PricingDetails from '../Components/Pricing/PricingDetails';
import PlanTypes from '../Components/Pricing/PlanTypes';
import PlanInformation from '../Components/Pricing/PlanInformation';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import Subscription from '../Components/Home/Subscription';

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
       <div style={{marginTop: "300px"}}>
        <Subscription bottom={"31%"}/>
       </div>
       <div>
        <Footer />
       </div>
    </>
  )
}

export default Pricing