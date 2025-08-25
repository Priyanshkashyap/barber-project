import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BSignup() {
  const [bpassword, setbpassword] = useState("");
  const [bphone, setbphone] = useState("");
  const [bname, setbname] = useState("");
  const [signupSuccessb, setSignupSuccessb] = useState(false); 
  

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/backend/signupbarber", {
        bname,
        bpassword,
        bphone,
      });

      console.log("Server response:", response.data);
      if (response.data.success) {
        setSignupSuccessb(true); 
      } else {
        alert(response.data.message || "Signup failed");
      }
      alert("Data sent successfully for signup!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Something went wrong with signing up barber!");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Input Barber Details</h2>

      <input
        type="text"
        placeholder="Barber Name"
        value={bname}
        onChange={(e) => setbname(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Enter Barber's Password"
        value={bpassword}
        onChange={(e) => setbpassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={bphone}
        onChange={(e) => setbphone(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleSubmit}>Submit</button>
      {signupSuccessb && (
              <p style={{ marginTop: "15px", color: "green" }}>
                Signup successful! 👉 <Link to="/ULogin">Login here</Link>
              </p>  )}
       <p>
        Already have an account?{" "}
        <Link to="/BLogin">Login here</Link>
      </p>
    </div>
  );
}
