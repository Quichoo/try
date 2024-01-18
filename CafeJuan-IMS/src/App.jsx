import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Inventory } from './pages/Inventory/Inventory';
import { Profile } from './pages/Profile/Profile';
import { Order } from './pages/Order/Order';
import { Login } from './pages/Login/Login'
import { FaHome, FaArchive, FaTable } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="sidenav">
        <ul>
          <li>
            <Link to="/">LOGO</Link>
          </li>
          <li>
            <Link to="/"><FaHome/></Link>
          </li>
          <li>
            <Link to="/Inventory"><FaTable /></Link>
          </li>
          <li>
            <Link to="/Order"><FaArchive /></Link>
          </li>
          <li>
            <Link to="/Profile"><IoPersonCircleOutline /></Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
