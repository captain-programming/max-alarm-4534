import { Flex, Text, Box, Spacer } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {GiEarthAfricaEurope} from '@react-icons/all-files/gi/GiEarthAfricaEurope';
import {IoMdLock} from '@react-icons/all-files/io/IoMdLock';
// import { ArrowForwardIcon } from '@chakra-ui/icons';


const Navbar = ({color}) => {
  return (
    <>
    <Flex gap={4} p={6} pl={10} pr={10} color={color} alignContent="-moz-initial">
        <Box mr={9}>
            <NavLink to={"/"}><text className="logo">Chargebee</text></NavLink>
        </Box>
        <Flex gap={8}>
            <NavLink to={"/product"}>Product</NavLink>
            <NavLink to={"/pricing"}>Pricing</NavLink>
            <NavLink to={"/solution"}>Solution</NavLink>
            <NavLink to={"/customers"}>Customers</NavLink>
            <NavLink to={"/resorces"}>Resorces</NavLink>
            <NavLink to={"/partner"}>Partners</NavLink>
        </Flex>
        <Spacer/>
        <Flex gap={8}>
           <NavLink to={"/english"}>
            <Flex>
                <Box p={1}><GiEarthAfricaEurope color="rgb(255,120,70)" /></Box><Text>English</Text>
            </Flex>
           </NavLink> 
           <NavLink to={"/login"}>
            <Flex>
                <Box p={1}><IoMdLock color="rgb(255,120,70)"/></Box>
                <Text>Log In  &#62;</Text>
            </Flex>
            </NavLink> 
            <NavLink to={"/signup"}>
                <Flex bg="rgb(255,120,70)" p="8px 15px 8px 15px" m="-2"><Text>Get a Demo  &#62;</Text></Flex>
            </NavLink>
        </Flex>
    </Flex>
    </>
  )
}

export default Navbar