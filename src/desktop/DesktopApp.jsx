import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DesktopHome from './pages/DesktopHome';
import DesktopAbout from './pages/DesktopAbout';
import DesktopContact from './pages/DesktopContact';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function DesktopApp() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      {/* Top Header */}
      <div className="bg-[#1E1A18] text-white py-2 px-8 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Phone size={16} className="text-[#C8A97E]" /> 9967313495</span>
          <span className="flex items-center gap-2"><Mail size={16} className="text-[#C8A97E]" /> mahendra.umbarkar@gmail.com, omkar28.umbarkar@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-[#C8A97E]" /> Navi Mumbai | Mumbai | Lonavla | Chiplun | Mahabaleshwar | Shindewadi
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#FAF6F0] shadow-md py-4 px-8 sticky top-0 z-50 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center">
          <img src="/images/mcclogo.jpg" alt="Mahindra Construction Company Logo" className="h-16 object-contain" />
          <span className="text-[#6B5B4E] text-xs font-bold mt-1 tracking-wide">Building Strength. Delivering Trust.</span>
        </Link>
        <div className="flex gap-8 text-[#6B5B4E] font-semibold text-lg">
          <Link to="/" className="hover:text-[#C8A97E] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#C8A97E] transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-[#C8A97E] transition-colors">Contact Us</Link>
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
      <footer className="bg-[#1E1A18] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          <div>
            <div className="bg-[#FAF6F0] rounded-lg p-4 inline-block mb-6 shadow-sm">
              <img src="/images/mcclogo.jpg" alt="Logo" className="h-28 object-contain" />
              <p className="text-[#6B5B4E] text-xs font-bold text-center mt-2 tracking-wide">Building Strength. Delivering Trust.</p>
            </div>
            <p className="text-gray-300 leading-relaxed">Specializing in residential and turnkey building projects.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C8A97E]">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-[#C8A97E] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#C8A97E] transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-[#C8A97E] transition-colors">Contact Us</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C8A97E]">Contact Info</h3>
            <p className="flex items-center gap-2 mb-3"><Phone size={16} className="text-[#C8A97E]" /> 9967313495</p>
            <p className="flex items-start gap-2 mb-3"><Mail size={16} className="text-[#C8A97E] mt-1 flex-shrink-0" /> <span className="flex flex-col"><span>mahendra.umbarkar@gmail.com</span><span>omkar28.umbarkar@gmail.com</span></span></p>
            <p className="flex items-start gap-2 mb-2"><MapPin size={16} className="text-[#C8A97E] mt-1 flex-shrink-0" /> Navi Mumbai | Mumbai | Lonavla | Chiplun | Mahabaleshwar | Shindewadi</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-600 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mahindra Construction Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
