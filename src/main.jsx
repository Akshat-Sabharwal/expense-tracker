import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { Auth } from "./pages/authentication/Auth.jsx";
import { Dashboard } from "./pages/dashboard/Dashboard.jsx";
import { UserContextProvider } from "./Context/UserContext.jsx";

const router = (
  <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(router);
