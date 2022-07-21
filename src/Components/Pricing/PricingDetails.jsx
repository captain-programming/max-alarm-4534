import React from 'react';
import { Flex, Tabs, TabList, Tab, Box } from '@chakra-ui/react';

const PricingDetails = () => {
  return (
        <Box>
          <Flex gap="7%">
            <Flex>
              <Tabs variant="soft-rounded" colorScheme="red" size="sm" bg="rgb(137,93,200)">
                <TabList>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>ANNUAL</Tab>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>MONTHLY</Tab>
                </TabList>
              </Tabs>
            </Flex>
            <Flex>
            <Tabs variant="soft-rounded" size="sm" bg="rgb(137,93,200)">
                <TabList>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>USD</Tab>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>EUR</Tab>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>GBP</Tab>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>AUD</Tab>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>CAD</Tab>
                    <Tab _selected={{ color: 'rgb(68,0,162)', bg: 'rgb(255,254,254)' }}>INR</Tab>
                </TabList>
              </Tabs>   
            </Flex>
          </Flex>
        </Box>
  )
}

export default PricingDetails