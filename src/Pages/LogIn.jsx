import React, { useState } from 'react';
import {Box, Button, Flex, Heading, Input, Link, Text, Container, Image} from "@chakra-ui/react";
import { useNavigate, NavLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';


const Login = () => {
  const [show, setShow] = useState("password")
  const navigate= useNavigate();

  // const handleSignup=() =>{
  //   navigate("/create-account")
  // }
  return (
    <>
      <Box bg={"rgb(234,235,245)"} height="100vh">
        <Flex justifyContent={"space-between"} p="20px 40px 40px 40px">
          <NavLink to={"/"}><text className="logo">Chargebee</text></NavLink>
          <Flex gap={2} alignItems={"center"}>
            <Text>Don't have an account?</Text>
            <NavLink to="/create-account"><button >Sign up →</button></NavLink>
          </Flex>
        </Flex>
        <Container boxShadow="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} maxW={"60%"} borderRadius="10px" p="30px 50px 50px 50px" h={"420px"}>
          
          <Flex>
            <Box width={"60%"}>
              <Flex direction={"column"} gap="20px" mt="25px" w="80%">
                <Image src='https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.2.8/images/brand/cn-logo-white.svg' w={"10%"} bg="rgb(98,0,234)" p={1} borderRadius="10px"/>
                <Text mt="10px" fontSize={"11px"} color="gray.500" letterSpacing={2}>THE CHARGEBEE COMPASS</Text>
                <Heading mt={-4} size={"sm"} fontWeight="500">Get valuable insights for your business and learn through product stories from around the world.</Heading>
                <Flex>
                  <Image src='https://play-lh.googleusercontent.com/xObxAEuAKkXn12lNcAFLzI493ea1DsnS37UiUTgiVte8m3LjH616ARYE_TKFqJfuY6TM=w240-h480-rw' width={"40%"} h="120px"/>
                  <Box fontSize={"12px"} pl="20px">
                  <Text color={"gray.500"}>We send curated editions of engaging stories to your inbox every 2 weeks.</Text>
                  <Flex>
                    <Link mt={"10px"} color="blue">Subscribe to our newsletter here</Link>
                    <ArrowForwardIcon/>
                  </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Flex direction={"column"} gap="15px" mt={6}>
              <Heading size={"xs"} color="blackAlpha.600">Sign in to Chargebee!!</Heading>
              <Input type="email" placeholder='name@company.com' required/>
              <Flex>
                <Input type={show} placeholder='password' required/>
                <Button variant="ghost" color="blue" 
                 onClick={()=> setShow((show==="password") ? "text" : "password")}
                >
                  Show
                </Button>
              </Flex>
              <Flex justifyContent={"space-between"} alignItems="center">
                <button className='login-form-signin' onClick={()=> navigate("/")}>Sign In</button>
                <Link fontSize={"12px"} color="blackAlpha.700">Forgot password?</Link>
              </Flex>
              <Flex alignItems={"center"}>
                  <Box flex={1} h="1px" bg={"gray.300"} />
                    <Text textAlign={"center"} w="30px">or</Text>
                  <Box flex={1} h="1px" bg={"gray.300"} />
              </Flex>

                <Flex bg={"rgb(67,132,244)"} width="72%" color="white" border={"1px solid rgb(67,132,244)"} h={10} gap="10px" margin={"auto"}>
                  <Image src='https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png' width="40px" bg="white"/>
                  <button>Sign in with Google</button>
                </Flex>
                  <Link color={"blue"} fontSize="15px" textAlign={"center"}>Sign in with Single Sign-On</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Login