import React, { useContext, useState } from 'react';
import {Box, Flex,Heading, Text, Image} from "@chakra-ui/react";
import Styles from "../../Pages/Css/home.module.css";
import { DataContext } from '../../Context/AllDataContext';
import {useNavigate} from 'react-router-dom';


const Sliding = () => {
  const [slider, setSlider] = useState(0);
  const {founderInfo} = useContext(DataContext);
  const navigate=useNavigate();


  const slidingData=founderInfo[slider];
  console.log(founderInfo);

  const handleGetDemo =()=>{
    navigate("/get-demo")
  }
  const handleSignUp = ()=>{
    navigate("/create-account")
  }
  
  return (
    <>
    <Flex gap={2} p={6} pt="6rem">
        <Flex direction='column' gap={3} width="3%" justifyContent="center">
          <button onClick={()=>setSlider(0)} className={(slider===0) ? "slider-active" : "slider"}></button>
          <button onClick={()=>setSlider(1)} className={(slider===1) ? "slider-active" : "slider"}></button>
          <button onClick={()=>setSlider(2)} className={(slider===2) ? "slider-active" : "slider"}></button>
          <button onClick={()=>setSlider(3)} className={(slider===3) ? "slider-active" : "slider"}></button>
          <button onClick={()=>setSlider(4)} className={(slider===4) ? "slider-active" : "slider"}></button>
        </Flex>
        <Flex width="97%" justifyContent="space-between">
          <Box width="43%">
              <Heading size="xl" lineHeight="50px">{slidingData.title}</Heading>
              <Text mt={7} width="80%" color="gray.500">{slidingData.description}</Text>
              <div className={Styles.buttonDiv}>
                  <button onClick={handleGetDemo} className={Styles.getDemoButton}>Get a Demo  &#8594;</button>
                  <button onClick={handleSignUp} className={Styles.signFreeButton}>Sign up for free  &#8594;</button>
              </div>
          </Box>
          <Box width="41%">
             <Flex>
                <Image width={80} src={slidingData.photo}/>
             <Box mt={40}>
                <Heading size="sm">{slidingData.name}</Heading>
                <Text>{slidingData.position}</Text>
             </Box>
             </Flex>
            </Box>
        </Flex>
    </Flex>
    </>
  );
}

export default Sliding;