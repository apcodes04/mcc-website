import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function MobileContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#3E2723] mb-4">Contact Us</h1>
        <p className="text-gray-600">Get in touch to discuss your next project.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Contact Info */}
        <div className="bg-[#3E2723] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B5E34] rounded-full opacity-20 -mr-10 -mt-10"></div>
          <h2 className="text-2xl font-bold mb-6 relative z-10 text-[#C49A45]">Info</h2>
          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-[#C49A45] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300">9967313495 (Omkar)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={24} className="text-[#C49A45] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 break-all">mcc.kharghar@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-[#C49A45] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-sm">
                  703 Siddhi Belleza, Sec 35 D,<br/>Kharghar Navi Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Request Proposal</h2>
          
          {submitted ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 text-center">
              <h3 className="text-lg font-bold mb-2">Request Sent!</h3>
              <p className="text-sm">We will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-[#8B5E34] underline text-sm">Submit another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Property Type</label>
                <select className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C49A45] outline-none">
                  <option>Single family home</option>
                  <option>Townhome</option>
                  <option>Commercial</option>
                  <option>Land</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Budget (Rupees)</label>
                <select className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C49A45] outline-none">
                  <option>Less than ₹50 Lakhs</option>
                  <option>₹50 Lakhs to ₹1 Crore</option>
                  <option>₹1 Crore to ₹5 Crores</option>
                  <option>₹5 Crores+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C49A45] outline-none resize-none"
                  defaultValue="Hello, I am interested in working together. Please review my request."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#8B5E34] hover:bg-[#3E2723] text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2">
                Send <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
