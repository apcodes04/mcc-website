import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MobileHome from './pages/MobileHome';
import MobileAbout from './pages/MobileAbout';
import MobileContact from './pages/MobileContact';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function MobileApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Mobile Header */}
      <header className="bg-[#FDFBF7] shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center p-4">
          <Link to="/">
            <img src="/images/logo.jpg" alt="Mahindra Construction Company Logo" className="h-12 object-contain" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#8B5E34]">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col">
            <Link to="/" className="p-4 border-b border-gray-50 text-[#8B5E34] font-semibold text-lg">Home</Link>
            <Link to="/about" className="p-4 border-b border-gray-50 text-[#8B5E34] font-semibold text-lg">About Us</Link>
            <Link to="/contact" className="p-4 text-[#8B5E34] font-semibold text-lg">Contact Us</Link>
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
      <footer className="bg-[#3E2723] text-white py-8 px-6 text-center flex flex-col items-center">
        <img src="/images/logo.jpg" alt="Logo" className="h-24 mx-auto mb-6 bg-white rounded-lg p-2 shadow-sm object-contain" />
        <p className="text-gray-300 text-sm mb-6">Building Strength, Delivering Trust.</p>
        
        <div className="flex flex-col gap-3 text-sm mb-6">
          <p className="flex items-center justify-center gap-2"><Phone size={16} className="text-[#C49A45]" /> 9967313495</p>
          <p className="flex items-center justify-center gap-2"><MapPin size={16} className="text-[#C49A45] flex-shrink-0" /> Kharghar, Navi Mumbai</p>
        </div>

        <div className="flex justify-center gap-6 text-[#C49A45] font-semibold mb-6">
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
