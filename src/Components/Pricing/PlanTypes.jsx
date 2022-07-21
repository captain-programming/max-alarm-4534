import React from 'react';
import {Box, Heading, Stack, Text} from "@chakra-ui/react";

const Plan=({ title, desc, ...rest})=>{
    return(
        <Box padding="50px 10px 10px 10px" {...rest} color="white">
            <Heading fontSize="2xl">{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
};

const PlanTypes = () => {

  return (
    <Stack direction='row' width="94%">
      <Plan
        title='Launch'
        desc='For early-stage startups that want to spend more time developing and less on manual operations.'
      />
      <Plan
        title='Rise'
        desc='For agile startups that want to grow their revenue with quick experiments and data-driven decision making.'
      />
      <Plan
        title='Scale'
        desc='For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.'
      />
      <Plan
        title='Enterprise'
        desc='For large businesses looking for enterprise-class compliance while diversifying revenue streams.
        '
      />
    </Stack>
  )
}

export default PlanTypes