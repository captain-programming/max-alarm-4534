import React from 'react'
import { Box } from "@chakra-ui/react";
import ReactPlayer from 'react-player';

const VideoComponent = () => {

  return (
    <>
    <Box>
        <ReactPlayer url="https://youtu.be/R9XgyoLQ9qw" controls width={750} height={450}/>
    </Box>
    </>
  )
}

export default VideoComponent