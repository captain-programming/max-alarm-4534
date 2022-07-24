import React, { useState } from 'react';
import {Box, Container, Flex,  InputGroup,  Select, Text, Input, InputLeftElement, InputLeftAddon, RadioGroup, Radio, Stack, Grid, GridItem, Checkbox, Textarea, Link, Heading, Alert, AlertIcon, AlertTitle, AlertDescription, useDisclosure, CloseButton} from '@chakra-ui/react';
import {EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {NavLink} from "react-router-dom";

const GetDemo = () => {
   const {isOpen: isVisible, onClose, onOpen} = useDisclosure({defaultIsOpen: false})
   const [country, setCountry] = useState("+91");

  return isVisible ? (
    <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
    width="60%"
    margin="auto"
    mt={10}
    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
  >
    <AlertIcon boxSize='30px' mr={0}/>
    <Flex>
    <Box>
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Application submitted!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        Thanks for submitting your application. Our team will get back to you soon & check your email.
      </AlertDescription>
    </Box>
    <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={"-60px"}
        onClick={onClose}
      />
    </Flex>
  </Alert>
  ):(
    <>
      <Box bg="linear-gradient(120deg, rgb(66,1,163)40%, rgb(156,1,232))">
        <Flex justifyContent={"end"} p="4.8% 13.5% 2% 4%" color={"white"}>
            <NavLink to={"/"}><text className="logo">Chargebee</text></NavLink>
          </Flex>
          <Flex padding="2% 2% 2% 2%" width={"95%"}>
              <Box w="50%" color={"white"} padding="30px 120px 120px 140px">
                <Heading size={"2xl"} lineHeight="50px">Elevate Your Subscription Experience with Chargebee</Heading>
                <Text fontSize={"20px"} mt="30px">Get a demo that's customized around your unique subscription workflows and pain-points.</Text>
              </Box>
              <Flex w="50%">
              <Container boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} maxW={"80%"} borderRadius="10px" padding="50px">
                <Flex direction="column" gap={"10px"} fontSize="14px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<PhoneIcon color='gray.300' />}
                  />
                    <Input type="text" placeholder="First Name" size={"md"} variant='flushed' required/>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<EmailIcon color='gray.300' />}
                  />
                    <Input type="password" placeholder="Business Email" size={"md"} variant='flushed' required/>
                </InputGroup>
                <Flex>
                  <Select size={"md"} width="40%" variant='flushed' onChange={(e)=> setCountry(e.target.value)}>
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
                    <InputLeftAddon children={country} border={"none"} borderBottom="1px solid rgb(226,232,240)" borderLeft={"1px solid rgb(226,232,240)"} bg="white" borderRadius={"none"}/>
                    <Input type='tel' size={"md"} variant='flushed' required/>
                  </InputGroup>
                </Flex>
                <InputGroup>
                    <Input type="text" placeholder="Your website" variant='flushed' size={"md"}/>
                </InputGroup>
                <Text fontWeight={500}>Is your company headquartered in India?</Text>
                <RadioGroup defaultValue='yes' required>
                  <Stack spacing={4} direction='row'>
                    <Radio value='yes'>Yes</Radio>
                    <Radio value='no'>No</Radio>
                  </Stack>
                </RadioGroup>
                <Text fontWeight={500}>What payment provider do you use for processing payments?</Text>
                <Text fontSize={"12px"}>(Note: We only support Indian businesses using Razorpay or Stripe for online payments at the moment)</Text>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                  <GridItem><Checkbox required>Razorpay</Checkbox></GridItem>
                  <GridItem><Checkbox required>Stripe</Checkbox></GridItem>
                  <GridItem><Checkbox required>Offline payments</Checkbox></GridItem>
                </Grid>
                <Text fontWeight={"500"}>What problem can Chargebee solve for you?</Text>
                <Textarea></Textarea>
                <button className='get-demo-page-button' onClick={onOpen}>Schedule a Demo</button>
                <Text fontSize={"12px"}>By clicking on Schedule a Demo, you acknowledge having read our <Link color={"blue"}>Privacy Notice</Link></Text>
                </Flex>
              </Container>
              </Flex>
      </Flex>
      </Box >
      
    </>
  )
}

export default GetDemo
