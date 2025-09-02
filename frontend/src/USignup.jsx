import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function USignup() {
  const [uname, setuname] = useState("");
  const [upassword, setupassword] = useState("");
  const [uphone, setuphone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!uname || !upassword || !uphone) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/backend/signupuser", {
        uname,
        upassword,
        uphone,
      });

      console.log("Server response:", response.data);

      if (response.data.success) {
        // ✅ Save to localStorage
        if (response.data.token) {
          localStorage.setItem("userToken", response.data.token);
        }
        localStorage.setItem("userName", uname);

        alert("Signup successful ✅");
        navigate("/dashboard"); // redirect to dashboard
      } else {
        alert(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Something went wrong with user signup!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Signup as User</h2>

      <input
        type="text"
        placeholder="User Name"
        value={uname}
        onChange={(e) => setuname(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={upassword}
        onChange={(e) => setupassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={uphone}
        onChange={(e) => setuphone(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Signing up..." : "Submit"}
      </button>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <Link to="/ULogin">Login here</Link>
      </p>
    </div>
  );
}
