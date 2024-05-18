import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <Link to="/">Home</Link>
         <br />
       <Link to="/panel">Panel</Link>
       <br />
       <Link to="/profile">Profile</Link>
       <br />
    </div>
  )
}

export default Navbar
