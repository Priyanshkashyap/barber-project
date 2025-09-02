import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function BLogin() {
  const [vbname, setvbname] = useState("");
  const [vbpassword, setvbpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/backend/logverifybarber", {
        vbname,
        vbpassword,
      });

      console.log("Server response from barber login:", response.data);

      if (response.data.success) {
        // ✅ Save barber info / token in localStorage
        localStorage.setItem("barberToken", response.data.token);
        localStorage.setItem("barberName", vbname);

        alert("Login successful ✅");
        navigate("/dashboard"); // redirect after login
      } else {
        alert(response.data.message || "Invalid login credentials");
      }
    } catch (error) {
      console.error("Error with barber verification:", error.response?.data || error.message);
      alert("Something went wrong with verifying barber!");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Input Barber Login Details</h2>
      <input
        type="text"
        placeholder="Barber Name"
        value={vbname}
        onChange={(e) => setvbname(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Enter Barber's Password for login"
        value={vbpassword}
        onChange={(e) => setvbpassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleSubmit}>Submit</button>

      <p>
        Dont have an account?{" "}
        <Link to="/BSignup">Sign up here</Link>
      </p>
    </div>
  );
}
