import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { FilterProvider } from "./context/FilterContext";
import CreateTest from "./pages/CreateTest";
import DisciplineTests from "./pages/DisciplineTests";
import Header from "./pages/Header";
import InstructorTests from "./pages/InstructorTests";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export const pathsWithoutHeader = ['/', '/signup'];

function App() {

  return (
    <AuthProvider>
      <FilterProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/tests" element={<DisciplineTests />} />
            <Route path="/tests/instructor" element={<InstructorTests />} />
            <Route path="/tests/create" element={<CreateTest />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </AuthProvider>
  );
}

export default App;
