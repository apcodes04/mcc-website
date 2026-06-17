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

        <div className="flex justify-center gap-6 text-[#C8A97E] font-semibold mb-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/company/mahindra-construction-company/" target="_blank" rel="noreferrer" className="text-white hover:text-[#C8A97E] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/mahindraconstructioncompany" target="_blank" rel="noreferrer" className="text-white hover:text-[#C8A97E] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://wa.me/919967313495" target="_blank" rel="noreferrer" className="text-white hover:text-[#C8A97E] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
        
        <div className="pt-6 border-t border-gray-600 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Mahindra Construction Company.
        </div>
      </footer>
    </div>
  );
}
