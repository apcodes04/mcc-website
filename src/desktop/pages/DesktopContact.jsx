import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function DesktopContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#3E2723] mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get in touch to discuss your next construction or renovation project.</p>
      </div>

      <div className="grid grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="bg-[#3E2723] text-white p-12 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5E34] rounded-full opacity-20 -mr-20 -mt-20"></div>
          <h2 className="text-3xl font-bold mb-8 relative z-10 text-[#C49A45]">Contact Information</h2>
          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <Phone size={28} className="text-[#C49A45] mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                <p className="text-gray-300">9967313495 (Omkar Umbarkar)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={28} className="text-[#C49A45] mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                <p className="text-gray-300">mcc.kharghar@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={28} className="text-[#C49A45] mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                <p className="text-gray-300">
                  703 Siddhi Belleza, Plot No 13, Sector 35 D,<br/>
                  Kharghar Navi Mumbai, Maharashtra 410210, IN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-[#3E2723] mb-8">Request a Proposal</h2>
          
          {submitted ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 text-center">
              <h3 className="text-xl font-bold mb-2">Request Sent Successfully!</h3>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-[#8B5E34] underline">Submit another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">What kind of property?</label>
                <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none transition">
                  <option>Single family home</option>
                  <option>Townhome</option>
                  <option>Condominium</option>
                  <option>Commercial</option>
                  <option>Land</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Budget (in Rupees)</label>
                <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none transition">
                  <option>Less than ₹50 Lakhs</option>
                  <option>₹50 Lakhs to ₹1 Crore</option>
                  <option>₹1 Crore to ₹2 Crores</option>
                  <option>₹2 Crores to ₹5 Crores</option>
                  <option>₹5 Crores+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#C49A45] outline-none transition resize-none"
                  defaultValue="Hello Mahindra Construction Company,&#10;&#10;I found your Service Page and I am interested in working together. Please review my project request and submit a proposal if it’s a good fit for you.&#10;&#10;Looking forward to learning more about your work."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#8B5E34] hover:bg-[#3E2723] text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2">
                Send Request <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
