import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/style.scss";

import reportWebVitals from "./reportWebVitals";

import Index from "./pages/index.js";
import IndexTwo from "./pages/index-two.js";
import IndexThree from "./pages/index-three.js";
import IndexFour from "./pages/index-four.js";
import IndexFive from "./pages/index-five.js";
import IndexSix from "./pages/index-six.js";
import Login from "./pages/auth/login.js";
import Signup from "./pages/auth/signup.js";
import ResetPassword from "./pages/auth/reset-password.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index-two" element={<IndexTwo />} />
      <Route path="/index-three" element={<IndexThree />} />
      <Route path="/index-four" element={<IndexFour />} />
      <Route path="/index-five" element={<IndexFive />} />
      <Route path="/index-six" element={<IndexSix />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
