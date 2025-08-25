import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ULogin(){
const [vuname, setvuname] = useState("");
const [vupassword, setvupassword] = useState("");
const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/backend/logverifyuser", {
        vuname,
        vupassword,
      });
      alert("Data sent for verification successfully!");
    } catch (error) {
      console.error("Error with user verification:", error.response?.data || error.message);
      alert("Something went wrong with verifying user!");
    }
  };
    return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Input User Login Details</h2>
      <input
        type="text"
        placeholder="User Name"
        value={vuname}
        onChange={(e) => setvuname(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Enter User's Password for login"
        value={vupassword}
        onChange={(e) => setvupassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleSubmit}>Submit</button>
      <p>
              Dont have an account?{" "}
              <Link to="/USignup">Sign up here</Link>
            </p>
    </div>
  );
}
