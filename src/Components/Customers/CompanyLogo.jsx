import React from 'react'
import { Image, Flex } from '@chakra-ui/react'

const CompanyLogo = ({url, height}) => {
  return(
    <>
      <Flex justifyContent={"space-between"} p="15% 50px 15% 50px">
        {url.map((img)=>(
            <Image src={img} w={"12%"} height={height} key={img}/>
        ))}
      </Flex>
    </>
  )
}

export default CompanyLogo