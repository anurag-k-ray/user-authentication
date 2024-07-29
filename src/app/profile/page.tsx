"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState();
  const handleLogout = async () => {
    try {
      await axios.post("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log("Error on logout", error);
    }
  };
  //GET: User details
  const getUserDetails = async () => {
    try {
      
      const response = await axios.get("/api/users/userDetails");
      console.log("DETAILS", response);
    } catch (error) {
      
    }
  };
  return (
    <div>
      <p>I am profile page</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={getUserDetails}>User Details</button>
    </div>
  );
};
export default Profile;
