import React, { useContext } from 'react'
import { Container, Flex, Image } from '@chakra-ui/react';
import { DataContext} from '../../Context/AllDataContext';

const SlidingWindow = () => {
    const {companies}= useContext(DataContext)
    console.log(companies)
  return (
    <>
      <Container position={"relative"} placeItems="center" overflow={"hidden"} maxW="70%" mt="70px">
        <Flex className='scrolling' gap={16} alignItems="center" justifyContent={"center"}>
            {companies.map((d)=>(

            <Image src={d.logo} width="100px" height={"10%"} key={d.id}/>
            ))}
            {
                companies.map((t)=>(
                    <Image src={t.logo} width="100px" height={"10%"} key={t.id}/>
                ))
            }
        </Flex>
      </Container>
    </>
  )
}

export default SlidingWindow