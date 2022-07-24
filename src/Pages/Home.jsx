import React from 'react';
import Footer from '../Components/Home/Footer';
import Navbar from '../Components/Home/Navbar';
import Sliding from '../Components/Home/Sliding';
import SlidingWindow from '../Components/Home/SlidingWindow';
import DesignBilling from '../Components/Home/DesignBilling';
import Trusted from '../Components/Home/Trusted';
import Subscription from '../Components/Home/Subscription'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Sliding />
        <SlidingWindow />
        <DesignBilling />
        <Trusted />
        <Subscription bottom={"16%"}/>
        <Footer />
    </div>
  )
}

export default Home