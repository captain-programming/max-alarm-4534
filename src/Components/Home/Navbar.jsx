import { Flex, Text, Box, Spacer } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {GiEarthAfricaEurope} from '@react-icons/all-files/gi/GiEarthAfricaEurope';
import {IoMdLock} from '@react-icons/all-files/io/IoMdLock';
// import { ArrowForwardIcon } from '@chakra-ui/icons';
import {BiChevronRight} from '@react-icons/all-files/bi/BiChevronRight'


const Navbar = ({color}) => {
  return (
    <>
    <Flex gap={4} p={6} pl={10} pr={10} color={color}>
        <Box mr={9}>
            <NavLink to={"/"}><Text>Chargebee</Text></NavLink>
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
                <GiEarthAfricaEurope color="rgb(255,120,70)" />English
            </Flex>
           </NavLink> 
           <NavLink to={"/login"}>
            <Flex>
                <IoMdLock color="rgb(255,120,70)"/>
                Log In
                <BiChevronRight  />
            </Flex>
            </NavLink> 
            <NavLink to={"/signup"}>
                <Flex bg="rgb(255,120,70)" p="8px 15px 8px 15px" m="-2">Get a Demo <BiChevronRight   /></Flex>
            </NavLink>
        </Flex>
    </Flex>
    </>
  )
}

export default Navbar