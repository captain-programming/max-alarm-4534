import { Box, Heading, Input, Flex, Image, Container, Text } from '@chakra-ui/react'
import React from 'react'

const Subscription = ({bottom}) => {
  return (
    <>
      <Flex style={{backgroundImage:"linear-gradient(120deg, rgb(60,34,152)40%, rgb(108,29,137)"}} height="440px">
            <Box width={"48%"} pt="100px" pl={7}>
                <Heading fontSize={"40px"} lineHeight={"50px"} color={"white"}>Get a Demo Customized to Your Subscription Workflow</Heading>
                <Flex mt={6} gap={6}>
                    <Input type={"text"} placeholder="email@company.com" borderRadius={"30px"} p="25px" color={"white"} width={"60%"}/>
                    <button className='home-page-getdemo'>Get a Demo</button>
                </Flex>
            </Box>
            <Box>
                <Flex position={"relative"} top="390px" left={"60px"}>
                    <Image src="https://webstatic.chargebee.com/assets/web/510/images/footer/calendly.svg" width={"100px"}/>
                    <Image src="https://webstatic.chargebee.com/assets/web/510/images/footer/okta.svg" width={"100px"}/>
                    <Image src="https://webstatic.chargebee.com/assets/web/510/images/footer/freshworks.svg" width={"100px"}/>
                    <Image src="https://webstatic.chargebee.com/assets/web/510/images/footer/getaccept.svg" width={"100px"}/>
                </Flex>
            </Box>
            <Container position={"absolute"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} width="28%" height={"430px"} left="62%" borderRadius={20}  bottom={bottom} padding={"50px 30px 30px 40px"}>
                <Image src='https://webstatic.chargebee.com/assets/web/510/images/footer/robin-lambert.png' borderRadius={"50%"} width="100px" />
                <Text mt={5}>Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not all situations that'll come up in the future.</Text>
                <Text fontWeight="bold" mt={5}>Robin Lambert,</Text>
                <Text fontSize={"14px"}>Co-founder & CPO, Livestorm</Text>

            </Container>
      </Flex>

    </>
  )
}

export default Subscription