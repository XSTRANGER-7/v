import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

function Panel() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setUserDetails(docSnap.data());
            } else {
              console.log("No such document!");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          console.log("User is not logged in");
        }
        setLoading(false);
      });
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Jiyaiydjsklfhkl",userDetails)
  if (!userDetails) {
    return <Navigate to="/login" />;
    console.log("Taking to error")
  }

  if (userDetails.role === "admin") {
    return <Navigate to="/admin" />;
  }
  if (userDetails.role === "voter") {
    return <Navigate to="/voter" />;
  }
  return <Navigate to="/404" />;
}

export default Panel;
