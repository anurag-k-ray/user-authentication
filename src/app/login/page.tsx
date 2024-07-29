"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
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
  //LOGIN_HANDLER: On click of login button
  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", loginData);
      console.log("LOGIN RESPONSE", response);
      router.push("/profile");
    } catch (error) {
      console.log("ERROR ON LOGIN", error);
    }
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
      <button onClick={onLogin}>Login</button>
      <Link href="/signup">Go to Signup</Link>
    </div>
  );
};
export default LoginPage;
