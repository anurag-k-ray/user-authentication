"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  //handler for setting the signup data
  const handleloginData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setLoginData((prevData) => {
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
      <h1>Login Page</h1>
      <label htmlFor="email">User Email</label>
      <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleloginData}
      />
      <label htmlFor="username">User Password</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleloginData}
      />
      <button>Login</button>
      <Link href="/signup">Go to Signup</Link>
    </div>
  );
};
export default LoginPage;
