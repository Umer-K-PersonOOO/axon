import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/HomePage";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Navbar from "./components/Navbar";
import ContactPage from "./components/ContactPage";
import AnnoucementPage from "./components/AnnoucementPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/axon" element={<AboutPage />} />
        <Route path="/axon/suite" element={<HomePage />} />
        <Route path="/axon/contact-us" element={<ContactPage />} />
        <Route path="/axon/announcements" element={<AnnoucementPage />} />
        {/*  AboutPage */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
