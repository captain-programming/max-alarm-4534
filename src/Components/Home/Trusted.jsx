import { Container, Heading, Text, Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Trusted = () => {
  return (
    <>
      <Container boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} maxW="65%" padding={"70px 110px 80px 100px"} color={"rgb(24,17,101)"} mt="200px" mb="200px">
        <Heading>Trusted partner in 4500+ growth stories...</Heading>
        <Flex mt="30px" justifyContent={"space-between"}>
            <Box w={"17%"}>
                <Heading>94%</Heading>
                <Text pt={3}>Most likely to recommend</Text>
            </Box>
            <Box w={"17%"}>
                <Heading>1.3</Heading>
                <Text pt={3}>Avg. months to go live</Text>
            </Box>
            <Box w={"20%"}>
                <Heading>#1</Heading>
                <Text pt={3}>Subscription Billing Software</Text>
            </Box>
            <Box w={"15%"}>
                <Heading>98%</Heading>
                <Text pt={3}>Rated 4+ stars on 5</Text>
            </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Trusted