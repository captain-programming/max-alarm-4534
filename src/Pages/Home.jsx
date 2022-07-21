import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <NavLink to={"/pricing"}>Price</NavLink>
    </div>
  )
}

export default Home