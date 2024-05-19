import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register"
import Home from "./components/Home";
import Panel from "./components/panel";
import Voter from "./components/Voter";
import Admin from "./components/admin";
import Poll from "./components/Poll";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";
import ViewQuiz from "./components/ViewQuiz"
import ChatPanel from "./components/ChatPanel";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    
      <div className="App">
        {/* <div className="auth-wrapper"> */}
          {/* <div className="auth-inner"> */}
          <Router>
            <Navbar/>
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
               <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/panel" element={<Panel />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/voter" element={<Voter />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/chatpanel" element={<ChatPanel/>} />
              <Route path="/quiz/quizId" component={ViewQuiz} />
              <Route path='/quiz' element={<ViewQuiz/>}>
          <Route path=':quizId' element={<ViewQuiz/>}/>
        </Route> 
        <Route path='/poll' element={<Poll/>}>
          <Route path=':quizId' element={<Poll/>}/>
        </Route> 
            </Routes>
            <ToastContainer />
            </Router>
          </div>
         
        // </div>
      // </div>
    
  );
}

export default App;
