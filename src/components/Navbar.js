import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
         <Link to="/">Home</Link>
       <Link to="/panel">Panel</Link>
       <Link to="/profile">Profile</Link>
    </div>
  )
}

export default navbar
