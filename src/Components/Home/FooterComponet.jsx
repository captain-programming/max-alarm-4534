import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import {ChevronRightIcon} from "@chakra-ui/icons";

const FooterComponet = ({arr, title}) => {
  // console.log(arr)
  return (
    <>
      <Box>
        <Box padding="25px 10px 35px 0px">
          <Heading color={"blue"} fontWeight="500" size={"md"} _hover={{cursor: "pointer"}}>
            {title}<ChevronRightIcon/>
            </Heading>
          </Box>
        <Box lineHeight={7}>
           {arr.map((t)=>(
            <Text fontWeight={500} _hover={{cursor: "pointer", paddingLeft: "5px"}}>{t}</Text>
           ))}
        </Box>
      </Box>
    </>
  )
}

export default FooterComponet