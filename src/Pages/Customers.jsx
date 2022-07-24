import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AllCompanies from '../Components/Customers/AllCompanies';
import CompanyLogo from '../Components/Customers/CompanyLogo';
import CustomerPart1 from '../Components/Customers/CustomerPart1';
import VideoComponent from '../Components/Customers/VideoComponent';
import { DataContext } from '../Context/AllDataContext';
import Footer from '../Components/Home/Footer';

const Customers = () => {

  const {companies}=useContext(DataContext);

  console.log(companies)
  return (
    <>
        <CustomerPart1 />
        <CompanyLogo url={
          [
            "https://webstatic.chargebee.com/assets/web/510/images/customers/logos/freshworks-light-bg.png",
            "https://www.chargebee.com/static/resources/customers/calendly.png",
            "https://webstatic.chargebee.com/assets/web/510/images/customers/logos/linuxacademy-logo.png",
            "https://webstatic.chargebee.com/assets/web/510/images/customers/logos/fujitsu.png"
          ]
          }
          height={"40px"}
        />
        <Flex gap={10} justifyContent="space-between">
          <Flex w={"50%"} pl={16} h="350px">
            <Image src="https://webstatic.chargebee.com/assets/web/510/images/case-study/freshdesk/fd-wall.jpg" borderRadius="10px"/>
            <Box bg={"rgb(63,49,165)"} position="absolute" left="290px" width="35%" height="350px" borderRightRadius="10px" p="60px 20px 42px 60px">
              <Image src='https://webstatic.chargebee.com/assets/web/510/images/customers/logos/transparent/freshdesk.png' w={"50%"} />
              <Text color={"white"} p="20px 10px 30px 10px" fontSize={"22px"}>From 500 to 80,000 Customers: How Freshdesk Unlocked Massive Scale</Text>
              <Link color={"rgb(254,120,71)"} fontWeight="500" _hover={{textDecoration: "none"}} pl={3}>READ THE STORY &#8594;</Link>
            </Box>
          </Flex>
          <Box w={"40%"} p={10}>
            <Image src="https://www.chargebee.com/static/resources/customers/freedom-logo.png" width="30%" pb={10} ml="50px"/>
            <Text fontSize={"21px"} ml={"11%"} color="gray.600">We didn't have another choice, we never had to choose between Chargebee and another provider. Chargebee was the clear winner.</Text>
            <Flex alignItems={"center"} pl={14} pt={8} gap={4}>
                <Image src='https://webstatic.chargebee.com/assets/web/510/images/case-study/freedom-fred.png' width={10} h={10} borderRadius="50%"/>
                <Text fontSize={"14px"} color="gray.500">Fred Stutzman, CEO, Freedom</Text>
            </Flex>
        </Box>
        </Flex>
        <CompanyLogo url={
          [
            "https://www.chargebee.com/static/resources/customers/percona.png",
            "https://www.chargebee.com/static/resources/customers/cosmos.png",
            "https://www.chargebee.com/static/resources/customers/freedom-logo.png",
            "https://www.chargebee.com/static/resources/customers/crew.svg",
            "https://www.chargebee.com/static/resources/customers/gigwell.png"
          ]
          }
          height="30px"
        />
        <Flex justifyContent="center" pb={16}>
          <VideoComponent />
        </Flex>
        <Box bg={"rgb(241,241,245)"} p="50px 50px 100px 70px">
          <AllCompanies companies={companies}/>
        </Box>
        <Footer/>
    </>
  )
}

export default Customers