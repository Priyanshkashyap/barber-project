import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BLogin from "./BLogin";
import BSignup from "./bsignup";
import ULogin from "./ULogin";
import USignup from "./usignup";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/USignup" element={<USignup />} />
        <Route path="/BSignup" element={<BSignup />} />
        <Route path="/ULogin" element={<ULogin />} />
        <Route path="/BLogin" element={<BLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
