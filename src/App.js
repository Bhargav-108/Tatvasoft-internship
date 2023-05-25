import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import SignIn from "./Components/SignIn";
import Form from "./Components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex w-screen h-auto bg-[#F5F4E8]  flex-col">
      <Navbar />
      <ToastContainer />
      <main className="w-screen p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Login" element={<SignIn />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
