import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Panel() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
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
  return (
    <div>
      {userDetails 
      ? 
    //   (
       { {userDetails.role} ==="Admin" ? <Navigate to="/admin" /> : <Navigate to="/voter" /> }
        // <>
         
        //   <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
        //   <div>
        //     <p>Email: {userDetails.email}</p>
        //     <p>First Name: {userDetails.firstName}</p>
        //     <p>Role: {userDetails.role}</p>
        //   </div>
        //   <button className="btn btn-primary" onClick={handleLogout}>
        //     Logout
        //   </button>
        // </>
    //   ) : (
    //     <p>Loading...</p>
    //   )
      }
    </div>
  );
}
export default Panel;
