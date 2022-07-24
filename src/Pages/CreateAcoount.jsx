import React, { useState } from 'react';
import {Flex, Box, Image, Heading, Text, Center, Container, Input, Select, InputGroup, InputLeftAddon, Checkbox, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from 'react-router-dom';

const CreateAcoount = () => {
    const [changeSlider, setChangeSlider] = useState(0);
    const [country, setCountry] = useState("+91");
    const navigate=useNavigate();

    const submit=()=>{
        alert("Account is created")
        navigate("/login")
    }
  return (
    <>
      <Flex direction={"coloumn"}>
        <Flex width={"31%"} direction="column" justifyContent={"space-between"} color="white">
            <Flex direction={"column"} justifyContent="space-between">
                <Center bg={"rgb(180,181,181)"} pt="20px">
                    <Image src="https://webstatic.chargebee.com/assets/web/510/images/signup/customers/dailius-wilson-getaccept.png" width={"250px"} />
                </Center>
                <Box bg={"rgb(57,2,154)"} textAlign="center" padding={"20px 10px 20px 10px"}>
                    <Heading size={"lg"}>Dailius Wilson</Heading>
                    <Text>VP Sales & Growth</Text>
                </Box>
                
            </Flex>
            <Flex bg={"rgb(81,11,210)"} direction="column">
                <Flex direction={"column"} alignItems="center">
                    <Text fontWeight={"500"} textAlign="center" width={"70%"} p="30px 10px 30px 10px">
                    Chargebee is a fantastic solution that really meets the needs of any SaaS business. Our revenue grew 4x in 12 months, using Chargebee.
                    </Text>
                    <Image src="https://webstatic.chargebee.com/assets/web/510/images/signup/customers/get-accept-logo.svg" width={"150px"}/>
                </Flex>
                <Box padding={"50% 20px 28px 10px"}>
                    <Text textAlign={"center"} color={"rgb(255,164,103)"} fontSize="14px" fontWeight="500">BUILT FOR HYPER-GROWTH</Text>
                    <Flex justifyContent={"center"} gap='13px' mt={"15px"}>
                        <button onClick={()=>setChangeSlider(0)} className={(changeSlider===0) ? "signup-sliding-active" : "signup-sliding"}>

                        </button>
                        <button onClick={()=>setChangeSlider(0)} className={(changeSlider===1) ? "signup-sliding-active" : "signup-sliding"}>
                            
                        </button>
                        <button onClick={()=>setChangeSlider(0)} className={(changeSlider===2) ? "signup-sliding-active" : "signup-sliding"}>
                            
                        </button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
        <Box width={"69%"}>
        
            <Flex width={"60%"} justifyContent="space-between" margin={"auto"} fontWeight="bold" p={"50px 10px 50px 10px"}>
                <NavLink to={"/"}><text className="logo">Chargebee</text></NavLink>
                <NavLink to={"/login"}>Login →</NavLink>
            </Flex>
            <Container boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} maxW="600px" p={12} border="1px solid gray" borderRadius={"10px"} fontSize="17px" fontWeight={500} color="gray.600"> 
                <Flex direction={"column"} gap="10px">
                    <Text>Work email</Text>
                    <Input type="type" placeholder='(eg) google.m.@gmail.com' isRequired/>
                    <Text mt={"20px"}>Phone number</Text>
                    <Flex>
                        <Select size={"md"} width="40%" onChange={(e)=> setCountry(e.target.value)}>
                            <option value={"+91"} size={"md"}>India</option>
                            <option value={"+1"} size={"md"}>USA</option>
                            <option value={"+86"} size={"md"}>China</option>
                            <option value={"+7"} size={"md"}>Russia</option>
                            <option value={"+45"} size={"md"}>Denmark</option>
                            <option value={"+33"} size={"md"}>France</option>
                            <option value={"+354"} size={"md"}>Iceland</option>
                            <option value={"+60"} size={"md"}>Malaysia</option>
                            <option value={"+52"} size={"md"}>Mexico</option>
                            <option value={"+64"} size={"md"}>New Zealand</option>
                        </Select>
                        <InputGroup>
                            <InputLeftAddon children={country} bg="white" borderRadius={"none"}/>
                            <Input type='tel' size={"md"} required/>
                        </InputGroup>
                    </Flex>
                    <Checkbox mt={"20px"} mb="20px" fontSize="11px" fontWeight={100}>I want to be notified about the awesome happenings* at Chargebee</Checkbox>
                    <button className='complet-signup' onClick={submit}>Complete Signup -→</button>
                    <Text m="30px 0px" fontSize={"15px"}>By clicking on Complete Signup, you agree to our Terms and you acknowledge having read our <Link fontWeight={"bold"}>Privacy Notice</Link></Text>
                </Flex>
            </Container>
            
        </Box>
      </Flex>
    </>
  )
}

export default CreateAcoount