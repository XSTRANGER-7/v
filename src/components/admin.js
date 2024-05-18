import React from 'react'
import Navbar from './Navbar'
import Write from './Write'

const Admin = () => {
  console.log("On admin panel")
  
  return (

    <div>
        <Navbar/>
      <h1>Admin Panel</h1>
      <Write/>
    </div>
  )
}

export default Admin
