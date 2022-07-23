import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const DataContext = createContext();

export const AllDataContext = ({children}) => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get("https://json-server-dk.herokuapp.com/chargebee-sample-sata")
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))
    },[]);
// console.log(data)

  return (
    <DataContext.Provider
       value={data}
    >
        {children}
    </DataContext.Provider>
  )
}
