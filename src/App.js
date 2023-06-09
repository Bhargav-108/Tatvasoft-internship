import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import { useContext, useState } from "react";
import { Context } from "./index.js";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  const handleClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className="flex w-screen h-auto bg-[#ffffff]  flex-col">
      <Navbar />
      <ToastContainer />
      <main className="w-screen p-8 min-h-[700px] h-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
