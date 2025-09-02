import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ULogin() {
  const [vuname, setvuname] = useState("");
  const [vupassword, setvupassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!vuname || !vupassword) {
      alert("Please enter both username and password");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/backend/logverifyuser", {
        vuname,
        vupassword,
      });

      console.log("Server response from user login:", response.data);

      if (response.data.success) {
        // ✅ Save user info / token in localStorage
        if (response.data.token) {
          localStorage.setItem("userToken", response.data.token);
        }
        localStorage.setItem("userName", vuname);

        alert("Login successful ✅");
        navigate("/dashboard"); // redirect to dashboard
      } else {
        alert(response.data.message || "Invalid login credentials");
      }
    } catch (error) {
      console.error("Error with user verification:", error.response?.data || error.message);
      alert("Something went wrong with verifying user!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>User Login</h2>

      <input
        type="text"
        placeholder="User Name"
        value={vuname}
        onChange={(e) => setvuname(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={vupassword}
        onChange={(e) => setvupassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Logging in..." : "Submit"}
      </button>

      <p style={{ marginTop: "10px" }}>
        Don’t have an account?{" "}
        <Link to="/USignup">Sign up here</Link>
      </p>
    </div>
  );
}
