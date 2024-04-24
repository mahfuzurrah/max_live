import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import ScrollToTopOnReload from "./components/ScrollToTopOnReload";
import Models from "./pages/Models";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import Datasets from "./pages/Datasets";


function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnReload />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/models" element={<Models />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
