import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Error404 from "../pages/error404/Error404";
import Logement from "../pages/logement/Logement";
import AboutUs from "../pages/about-us/AboutUs";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/error-404" element={<Error404 />} />
        <Route path="/*" element={<Navigate replace to="/error-404" />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Navigation;
