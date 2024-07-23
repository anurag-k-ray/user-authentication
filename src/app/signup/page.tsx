"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const SignupPage = () => {
  const [signUpData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });
  //handler for setting the signup data
  const handleSignupData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setSignupData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        border: "1px solid black",
      }}
    >
      <h1>Signup Page</h1>
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        name="username"
        value={signUpData.username}
        onChange={handleSignupData}
      />
      <label htmlFor="email">User Email</label>
      <input
        type="email"
        name="email"
        value={signUpData.email}
        onChange={handleSignupData}
      />
      <label htmlFor="username">User Password</label>
      <input
        type="password"
        name="password"
        value={signUpData.password}
        onChange={handleSignupData}
      />
      <button>Signup</button>
      <Link href="/login">Go to login</Link>
    </div>
  );
};
export default SignupPage;
