import React, { useContext } from 'react';
import AllRouters from './Routers/AllRouters';
import "./App.css";
import { DataContext } from './Context/AllDataContext';
import { Center, Spinner } from '@chakra-ui/react'

function App() {
  const data=useContext(DataContext)

  // console.log(data)
  return (data===null) ? (
        <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Center>
      ):(
      <div className='App'>
        <AllRouters />
      </div>
  );
}

export default App;
