import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MobileHome from './pages/MobileHome';
import MobileAbout from './pages/MobileAbout';
import MobileContact from './pages/MobileContact';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';

export default function MobileApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      {/* Mobile Header */}
      <header className="bg-[#FAF6F0] shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center p-4">
          <Link to="/" className="flex flex-col items-center">
            <img src="/images/mcclogo.jpg" alt="Mahindra Construction Company Logo" className="h-12 object-contain" />
            <span className="text-[#6B5B4E] text-[10px] font-bold mt-1 tracking-wide">Building Strength. Delivering Trust.</span>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#6B5B4E]">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#FAF6F0] shadow-lg border-t border-gray-100 flex flex-col">
            <Link to="/" className="p-4 border-b border-gray-50 text-[#6B5B4E] font-semibold text-lg">Home</Link>
            <Link to="/about" className="p-4 border-b border-gray-50 text-[#6B5B4E] font-semibold text-lg">About Us</Link>
            <Link to="/contact" className="p-4 text-[#6B5B4E] font-semibold text-lg">Contact Us</Link>
          </nav>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<MobileHome />} />
          <Route path="/about" element={<MobileAbout />} />
          <Route path="/contact" element={<MobileContact />} />
        </Routes>
      </main>

      {/* Mobile Footer */}
      <footer className="bg-[#1E1A18] text-white py-10 px-6 text-center flex flex-col items-center">
        <div className="bg-[#FAF6F0] rounded-lg p-3 mb-8 shadow-sm inline-flex flex-col items-center">
          <img src="/images/mcclogo.jpg" alt="Logo" className="h-20 object-contain" />
          <p className="text-[#6B5B4E] text-[10px] font-bold text-center mt-2 tracking-wide">Building Strength. Delivering Trust.</p>
        </div>
        
        <div className="flex flex-col gap-4 text-sm mb-8 w-full max-w-sm">
          <p className="flex items-center justify-center gap-2"><Phone size={16} className="text-[#C8A97E]" /> 9967313495</p>
          <div className="flex items-start justify-center gap-2 text-center">
            <Mail size={16} className="text-[#C8A97E] mt-1 flex-shrink-0" />
            <span className="flex flex-col items-center text-xs break-all">
              <span>mahendra.umbarkar@gmail.com</span>
              <span>omkar28.umbarkar@gmail.com</span>
            </span>
          </div>
          <p className="flex items-start justify-center gap-2 text-center leading-relaxed">
            <MapPin size={16} className="text-[#C8A97E] mt-1 flex-shrink-0" /> 
            <span>Navi Mumbai | Mumbai | Lonavla | Chiplun | Mahabaleshwar | Shindewadi</span>
          </p>
        </div>

        <div className="flex justify-center gap-6 text-[#C8A97E] font-semibold mb-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="pt-6 border-t border-gray-600 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Mahindra Construction Company.
        </div>
      </footer>
    </div>
  );
}
