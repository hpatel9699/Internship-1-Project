import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted", email, password);
    const loginAPIResponse = await axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      data: {
        email: email,
        password: password,
      },
    });
    console.log("Submitted", loginAPIResponse);
    if (loginAPIResponse.status === 201) {
      localStorage.setItem("token", loginAPIResponse.data.token);
      router.push("/todo");
    } else {
      alert("Login Failed!, Something went wrong");
    }
    console.log("Token", localStorage.getItem("token"));
  };

  return (
    <div className="login-box">
      <h2>Login for Todo</h2>
      <form>
        <div className="user-box">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="on"
          />
          <label>Password</label>
        </div>
        <a href="#" onClick={(e) => handleSubmit(e)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </a>{" "}
        <div>
          <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
}
