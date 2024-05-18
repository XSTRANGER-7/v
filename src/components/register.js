import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          role:role,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
<div className="auth-wrapper">
  <div className="auth-inner">
  <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

     

      <div className="mb-3">
        <label>Role</label>
        {/* <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        /> */}
       <select name="role" id="role" className="form-control" onChange={(e) => setRole(e.target.value)} required>
       <option value="" disabled selected>Select Role</option>
  <option value="admin">Admin</option>
  <option value="voter">Voter</option>
</select>
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
  </div>
</div>
    </>
  );
}
export default Register;
