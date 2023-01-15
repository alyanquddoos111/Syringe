import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/login";
import Clinic from "./components/clinicSignup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <div>
     <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Clinic/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/clinicSignup' element={<Clinic/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};
