import React from 'react'
import { Flex, Container, Box, Grid, Heading, GridItem, Link, Text } from '@chakra-ui/react'

const DesignBilling = () => {
  return (
    <>
      <Container maxWidth="full" mt="150px" mb="120px">
        <Flex justifyContent={"space-between"}>
            <Box width={"25%"} p="0px 10px 10px 50px">
                <Heading fontSize={"30px"}>Designed to go Beyond Billing.</Heading>
                <Text mt={"30px"} color="gray.600">Get the freedom to experiment, launch, and scale strategies as fast as you can think of them.</Text>
            </Box>
            <Grid width={"67%"} templateColumns="repeat(2, 1fr)" p={"0px 90px 10px 10px"} gap="25px">
                <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} borderRadius="15px" padding={5}>
                    <Heading size={"md"}>Rethink Pricing</Heading>
                    <Text mt="15px" color={"gray.600"}>Pricing models. GrandFathering. One-click Roll-back. Doesn't get easier!</Text>
                    <Link>Learn more</Link>
                </GridItem>
                <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} borderRadius="15px" padding={5}>
                    <Heading size={"md"}>Scale Globally</Heading>
                    <Text mt="15px" color={"gray.600"}>Currencies, compliance & taxes, all handles already.</Text>
                    <Link>Learn more</Link>
                </GridItem>
                <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} borderRadius="15px" padding={5}>
                    <Heading size={"md"}>Capture New Segments</Heading>
                    <Text mt="15px" color={"gray.600"}>March upmarket, go product-led, and everywhere between.</Text>
                    <Link>Learn more</Link>
                </GridItem>
                <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" bg={"white"} borderRadius="15px" padding={5}>
                    <Heading size={"md"}>Launch into Subscriptions</Heading>
                    <Text mt="15px" color={"gray.600"}>Pilot a recurring revenue model without breaking what's working</Text>
                    <Link>Learn more</Link>
                </GridItem>
            </Grid>
        </Flex>
      </Container>
    </>
  )
}

export default DesignBilling