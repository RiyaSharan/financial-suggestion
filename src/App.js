import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from "./components/Navbar";
import Expense from "./pages/Expense";
import Investment from "./pages/Investment";
import Retirement from "./pages/Retirement";
import Credit from "./pages/Credit";
import Tax from "./pages/Tax";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/retirement" element={<Retirement />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
