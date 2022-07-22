import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Heading, Text, Flex, Box } from '@chakra-ui/react'

const HeadingPricePage = () => {
  return (
    <>
        <Box>
          <Heading color="white" fontSize="70px" >Find a plan that's right for you</Heading>
            <Flex margin={4} gap={1}>
              <Text color="whiteAlpha.800" fontSize="20px">Or simply leverage the expertise of our consultation team.</Text>
              <Button variant="outline" size="sm" rightIcon={<ArrowForwardIcon />} _hover="none">TALK TO US</Button>
            </Flex>
        </Box>
    </>
  )
}

export default HeadingPricePage;