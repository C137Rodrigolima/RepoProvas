import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import DisciplineTests from "./pages/DisciplineTests";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/tests" element={<DisciplineTests />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
