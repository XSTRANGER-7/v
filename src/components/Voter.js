import React from 'react'
import Navbar from './Navbar'
import VoterQuizList from './VoterQuizList'

const Voter = () => {
  console.log("On voter panel")
  return (
    <div>
      <Navbar/>
      <h1>Voter Panel</h1>
      <VoterQuizList/>
    </div>
  )
}

export default Voter
