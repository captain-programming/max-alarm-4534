import React from 'react';
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import Navbar from '../Home/Navbar';
import Styles from '../../Pages/Css/customer.module.css';

const CustomerPart1 = () => {
  return (
    <>
      <Box bg="rgb(241,240,244)" pb={"120px"}>
        <Navbar />
        <Flex w={"50%"} direction="column" justifyContent={"space-between"}>
            <Box>
                <Heading size={"xl"} fontSize="38px" w={"70%"} m="auto" mt={6} p={3} lineHeight="50px">Chargebee powers subscriptions for businesses of all sizes.</Heading>
                <Flex pl="17%" gap={10} pt={10}>
                    <button className={Styles.signCustomer}>Sign up for free</button>
                    <button className={Styles.talkButton}>Talk to us!</button>
                </Flex>
            </Box>
        </Flex>
      </Box>
      <Box w={"50%"} position="absolute" top={"170px"} left="50%">
                <Image src="https://webstatic.chargebee.com/assets/web/510/images/case-study/whiteboard/whiteboard-banner.jpg" w={"85%"} maxH={"410px"}/>
                <Box bg={"rgb(63,49,165)"} p={10} width={"85%"}>
                  <Image src='https://webstatic.chargebee.com/assets/web/510/images/case-study/whiteboard/whiteboard-logo-white.png' w={"40%"}/>
                  <Text color={"white"} p="20px 10px 30px 10px" fontSize={"22px"}>How whiteboard reduced Churn by 100% using Chargebee and increased their MRR by 35% with improved billing Operations</Text>
                 <Link color={"rgb(254,120,71)"} fontWeight="500" _hover={{textDecoration: "none"}} pl={3}>READ THE STORY &#8594;</Link>
                </Box>
      </Box>
      <Box>
        <Box w={"40%"}>
            <Image src="https://webstatic.chargebee.com/assets/web/510/images/home/testimonial/cb-study.png" width="60%" p={14} pb={10}/>
            <Text fontSize={"21px"} ml={"11%"} color="gray.600">... Integration was easy and the <span style={{fontWeight: "bold"}}>customer support provided was excellent.</span> This is huge considering how deficient many players in the space are when ...</Text>
            <Flex alignItems={"center"} pl={14} pt={8} gap={4}>
                <Image src='https://webstatic.chargebee.com/assets/web/510/images/case-study/voitek.jpeg' width={10} borderRadius="50%"/>
                <Text fontSize={"14px"} color="gray.500">Voitek Sobieszczanski, Director of Finance & Operations</Text>
            </Flex>
        </Box>
      </Box>
    </>
  )
}

export default CustomerPart1