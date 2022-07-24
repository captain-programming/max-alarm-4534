import React from 'react'
import {Box, Button, Image, Text, Grid, GridItem, Flex, Spacer} from "@chakra-ui/react";

const AllCompanies = ({companies}) => {
  return (
    <>
        <Box width={"88%"} margin={"auto"}>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              {companies.map((item)=>(
                <GridItem 
                boxShadow="0 4px 12px 0 rgb(0 0 0 / 12%), 0 12px 40px 0 rgb(0 0 0 / 14%);" 
                bg={"white"} key={item.id} p={10} pb={2} borderRadius="10px"
                >
                  <Image src={item.logo} w={40} mb={8} h={8}/>
                  <Text fontSize={"18px"} fontWeight="500" fontFamily='basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' >{item.description}</Text>
                  <Flex>
                    <Spacer />
                    <Button variant="ghost" color="blue" fontSize={25} fontWeight="bold">
                        &#8594;
                    </Button>
                  </Flex>
                </GridItem> 
              ))}
            </Grid>
        </Box>
    </>
  )
}

export default AllCompanies