import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Pricing from '../../Pages/Css/pricing.module.css';

const PricingDetails = () => {
  const [toggleState1, setToggleState1] = useState(1);
  const [toggleState2, setToggleState2] = useState(1);

  
  return (
        <>
          <div className={Pricing.tab}>
          <Flex gap="7%">
            <Flex bg="rgb(137,93,200)" gap={4} borderRadius="20px">
              <button 
                className={toggleState1 === 1 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState1(1)}
              >
                ANNUAL
              </button>
              <button 
                className={toggleState1 === 2 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState1(2)}
              >
                MONTHLY
              </button>
            </Flex>
            <Flex bg="rgb(137,93,200)" gap={4} borderRadius="20px">
              <button 
                className={toggleState2 === 1 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState2(1)}
              >
                USD
              </button>
              <button 
                className={toggleState2 === 2 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState2(2)}
              >
                EUR
              </button>
              <button 
                className={toggleState2 === 3 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState2(3)}
              >
                GBP
              </button>
              <button 
                className={toggleState2 === 4 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState2(4)}
              >
                AUD
              </button>
              <button 
                className={toggleState2 === 5 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState2(5)}
              >
                CAD
              </button>
              <button 
                className={toggleState2 === 6 ? "tabs active-tabs" : "tabs"} 
                onClick={()=> setToggleState2(6)}
              >
              INR
              </button>
            </Flex>
          </Flex> 
          </div>
        </>
  )
}

export default PricingDetails