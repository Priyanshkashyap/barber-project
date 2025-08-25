import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function USignup() {
  const [upassword, setupassword] = useState("");
  const [uphone, setuphone] = useState("");
  const [uname, setuname] = useState("");
  const [signupSuccessu, setSignupSuccessu] = useState(false); 

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/backend/signupuser", {
        uname,
        upassword,
        uphone,
      });

      console.log("Server response:", response.data);

      if (response.data.success) {
        setSignupSuccessu(true); 
      } else {
        alert(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Something went wrong with user signup!");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Input User Details</h2>

      <input
        type="text"
        placeholder="User Name"
        value={uname}
        onChange={(e) => setuname(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Enter User's Password"
        value={upassword}
        onChange={(e) => setupassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="tel"
        placeholder="Phone Number of user"
        value={uphone}
        onChange={(e) => setuphone(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleSubmit}>Submit</button>

      {signupSuccessu && (
        <p style={{ marginTop: "15px", color: "green" }}>
          Signup successful! 👉 <Link to="/ULogin">Login here</Link>
        </p>
        
      )}
       <p>
              Already have an account?{" "}
              <Link to="/ULogin">Login here</Link>
            </p>
    </div>
  );
}
