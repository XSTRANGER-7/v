import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (user) => {
    if (user) {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("No user details found in Firestore");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData(user);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  console.log("Landed on profile page");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div><div> 
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
              alt="User profile"
            />
          </div>
          <h3>Welcome {userDetails.firstName}</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            <p>Role: {userDetails.role}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
    </div></div>
  );
}

export default Profile;
