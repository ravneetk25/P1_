import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import EndpointSecurity from './pages/EndpointSecurity';
import NetworkSecurity from './pages/NetworkSecurity';
import CloudSecurity from './pages/CloudSecurity';
import ComplianceVAPT from './pages/ComplianceVAPT';
import AboutUs from './pages/AboutUs';
import DemoTrial from './pages/DemoTrial';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#0A0A12] text-white font-inter">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/endpoint-security" element={<EndpointSecurity />} />
            <Route path="/network-security" element={<NetworkSecurity />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/compliance-vapt" element={<ComplianceVAPT />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/demo" element={<DemoTrial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}