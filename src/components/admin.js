import React from 'react'
import Navbar from './Navbar'
import Write from './Write'
import QuizList from './QuizList'
import ViewQuiz from './ViewQuiz'

const Admin = () => {
  console.log("On admin panel")
  
  return (

    <div>
        <Navbar/>
      <h1>Admin Panel</h1>
      <h1 className="text-xl font-bold underline">
      Hello world!
    </h1>
      <Write/>
      <br /><br />
      <QuizList/>

      <br /><br />
    </div>
  )
}

export default Admin
