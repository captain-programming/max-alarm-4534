import React, { useContext } from 'react';
import AllRouters from './Routers/AllRouters';
import "./App.css";
import { DataContext } from './Context/AllDataContext';
import { Center, Spinner } from '@chakra-ui/react'

function App() {
  const {founderInfo, Plans, companies}=useContext(DataContext)

  // console.log(founderInfo)
  return (founderInfo===null) ? (
    <Center>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Center>
  ) : ( Plans===null ) ? 
  (
    <Center>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Center>
  ) :
  (companies===null) ? 
  (
    <Center>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Center>
  ):
  (
      <div className='App'>
        <AllRouters />
      </div>
  )
}

export default App;
