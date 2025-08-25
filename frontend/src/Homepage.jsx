import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "40px" }}>Welcome to the Barber Management System</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        <Link 
          to="/USignup" 
          style={{ textDecoration: "none", backgroundColor: "#3498db", color: "white", padding: "12px 25px", borderRadius: "8px", fontWeight: "bold", transition: "0.3s", fontSize: "16px", width: "200px", textAlign: "center" }}
        >
          Signup as User
        </Link>
        <Link 
          to="/BSignup" 
          style={{ textDecoration: "none", backgroundColor: "#2ecc71", color: "white", padding: "12px 25px", borderRadius: "8px", fontWeight: "bold", transition: "0.3s", fontSize: "16px", width: "200px", textAlign: "center" }}
        >
          Signup as Barber
        </Link>
      </div>
    </div>
  );
}
