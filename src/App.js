import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import ScrollToTopOnReload from "./components/ScrollToTopOnReload";

function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnReload/>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
