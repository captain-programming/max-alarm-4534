import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PlanInformation = () => {
  const [planData, setPlanData] = useState([]);

  useEffect(()=>{
    axios.get("https://json-server-dk.herokuapp.com/chargebeeSampleData")
    .then((res)=> setPlanData(res.data))
    .catch((err)=> console.log(err))
  }, []);

  console.log(planData);
  return (
    <div>PlanInformation</div>
  )
}

export default PlanInformation