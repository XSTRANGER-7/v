import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Register";
import Home from "./components/Home";
import Panel from "./components/Panel";
import Voter from "./components/Voter";
import Admin from "./components/Admin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
import { useState } from "react";
import { auth } from "./components/firebase";

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
            </Routes>
            <ToastContainer />
            </Router>
          </div>
         
        // </div>
      // </div>
    
  );
}

export default App;
