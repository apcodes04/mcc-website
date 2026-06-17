import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DesktopHome from './pages/DesktopHome';
import DesktopAbout from './pages/DesktopAbout';
import DesktopContact from './pages/DesktopContact';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function DesktopApp() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <div className="bg-[#3E2723] text-white py-2 px-8 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><Phone size={16} /> 9967313495</span>
          <span className="flex items-center gap-2"><Mail size={16} /> mcc.kharghar@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} /> Kharghar Navi Mumbai, Maharashtra
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#FDFBF7] shadow-md py-4 px-8 sticky top-0 z-50 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Mahindra Construction Company Logo" className="h-16 object-contain" />
        </Link>
        <div className="flex gap-8 text-[#8B5E34] font-semibold text-lg">
          <Link to="/" className="hover:text-[#C49A45] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#C49A45] transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-[#C49A45] transition-colors">Contact Us</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<DesktopHome />} />
          <Route path="/about" element={<DesktopAbout />} />
          <Route path="/contact" element={<DesktopContact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E2723] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          <div>
            <img src="/images/logo.jpg" alt="Logo" className="h-28 mb-6 bg-white rounded-lg p-2 shadow-sm object-contain" />
            <p className="text-gray-300">Building Strength, Delivering Trust. Specializing in residential and turnkey building projects.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C49A45]">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-[#C49A45] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#C49A45] transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-[#C49A45] transition-colors">Contact Us</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C49A45]">Contact Info</h3>
            <p className="flex items-center gap-2 mb-2"><Phone size={16} /> 9967313495 (Omkar Umbarkar)</p>
            <p className="flex items-center gap-2 mb-2"><MapPin size={16} /> 703 Siddhi Belleza, Sec 35D, Kharghar, Navi Mumbai</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-600 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mahindra Construction Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
