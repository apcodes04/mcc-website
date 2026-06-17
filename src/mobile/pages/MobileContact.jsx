import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function MobileContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const propertyType = formData.get('propertyType');
    const budget = formData.get('budget');
    const message = formData.get('message');

    const text = `*New Proposal Request!*%0A%0A*Name:* ${name}%0A*Mobile:* ${mobile}%0A*Property Type:* ${propertyType}%0A*Budget:* ${budget}%0A%0A*Message:*%0A${message}`;
    
    const phone = "919967313495";
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');

    setSubmitted(true);
  };

  return (
    <div className="py-12 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1E1A18] mb-4">Contact Us</h1>
        <p className="text-gray-600">Get in touch to discuss your next project.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Contact Info */}
        <div className="bg-[#1E1A18] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#6B5B4E] rounded-full opacity-20 -mr-10 -mt-10"></div>
          <h2 className="text-2xl font-bold mb-6 relative z-10 text-[#C8A97E]">Info</h2>
          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-[#C8A97E] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300">9967313495 (Omkar)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={24} className="text-[#C8A97E] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 break-all flex flex-col text-sm">
                  <span>mahendra.umbarkar@gmail.com</span>
                  <span className="mt-1">omkar28.umbarkar@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-[#C8A97E] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-sm">
                  Navi Mumbai | Mumbai | Lonavla | Chiplun | Mahabaleshwar | Shindewadi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#FAF6F0] p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1E1A18] mb-6">Request Proposal</h2>
          
          {submitted ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 text-center">
              <h3 className="text-lg font-bold mb-2">Request Sent!</h3>
              <p className="text-sm">We will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-[#6B5B4E] underline text-sm">Submit another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                <input name="name" type="text" required placeholder="Your full name" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C8A97E] outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                <input name="mobile" type="tel" required placeholder="Your mobile number" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C8A97E] outline-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Property Type</label>
                <select name="propertyType" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C8A97E] outline-none">
                  <option>Single family home</option>
                  <option>Townhome</option>
                  <option>Commercial</option>
                  <option>Land</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Budget (Rupees)</label>
                <select name="budget" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C8A97E] outline-none">
                  <option>Less than ₹50 Lakhs</option>
                  <option>₹50 Lakhs to ₹1 Crore</option>
                  <option>₹1 Crore to ₹5 Crores</option>
                  <option>₹5 Crores+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#C8A97E] outline-none resize-none"
                  defaultValue="Hello, I am interested in working together. Please review my request."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#6B5B4E] hover:bg-[#1E1A18] text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2">
                Send <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
