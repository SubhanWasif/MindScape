import React from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase"; // Import the signOut method from Firebase auth
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  let navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth) // Call the signOut method with the auth object
      .then(() => {
        // Redirect the user to the login page or any other appropriate page
        // Redirect to login page
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
