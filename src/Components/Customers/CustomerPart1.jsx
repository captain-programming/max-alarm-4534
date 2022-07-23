import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Navbar from '../Home/Navbar';
import Styles from '../../Pages/Css/customer.module.css';

const CustomerPart1 = () => {
  return (
    <>
      <Box bg="rgb(241,240,244)" pb={40}>
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
      <Box w={"50%"} position="absolute" top={"180px"} left="50%">
                <Image src="https://webstatic.chargebee.com/assets/web/510/images/case-study/whiteboard/whiteboard-banner.jpg" w={"90%"}/>
      </Box>
      <Box>
        <Box w={"40%"}>
            <Image src="https://webstatic.chargebee.com/assets/web/510/images/home/testimonial/cb-study.png" />
            <Text fontSize={"2xl"}>... Integration was easy and the <span style={{fontWeight: "bold"}}>customer support provided was excellent.</span> This is huge considering how deficient many players in the space are when ...</Text>
            <Flex>
                <Image src='https://webstatic.chargebee.com/assets/web/510/images/case-study/voitek.jpeg' width={10} borderRadius="50%"/>
                <Text>customer support provided was excellent.</Text>
            </Flex>
        </Box>
      </Box>
    </>
  )
}

export default CustomerPart1