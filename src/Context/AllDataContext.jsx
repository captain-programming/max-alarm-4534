import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const DataContext = createContext();

export const AllDataContext = ({children}) => {
    const [founderInfo, setFounderInfo] = useState(null);
    const [plans, setPlans] = useState(null);
    const [companies, setSetCompanies] = useState(null);

    const fetchData = (url, store) => {
      axios.get(url)
        .then((res)=> store(res.data))
        .catch((err)=> console.log(err))
    }

    useEffect(()=>{
        fetchData("https://json-server-dk.herokuapp.com/chargebee-founderInfo", setFounderInfo);
        fetchData("https://json-server-dk.herokuapp.com/chargebee-plans", setPlans);
        fetchData("https://json-server-dk.herokuapp.com/chargebee-companies", setSetCompanies);
    },[]);
// console.log(companies)

  return (
    <DataContext.Provider
       value={{
        founderInfo: founderInfo,
        palns: plans,
        companies: companies
       }}
    >
        {children}
    </DataContext.Provider>
  )
}
