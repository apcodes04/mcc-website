import React from 'react';
import { Target, Users, MapPin, Briefcase } from 'lucide-react';

export default function DesktopAbout() {
  return (
    <div className="py-20 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#1E1A18] mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          "We believe real learning in construction happens on site, not just on paper."
        </p>
      </div>

      <div className="flex gap-16 items-start mb-20">
        <div className="flex-1 flex flex-col items-center">
          <img src="/images/mcclogo.jpg" alt="Company Logo" className="w-full max-w-sm mx-auto shadow-sm rounded-lg p-8 bg-[#FAF6F0] mb-6" />
          <div className="bg-[#FAF6F0] border border-[#C8A97E]/30 p-6 rounded-lg text-center shadow-sm w-full max-w-sm">
            <p className="text-[#6B5B4E] font-semibold text-lg italic">
              “Engineered for strength.<br/>Executed with discipline.<br/>Delivered with integrity.”
            </p>
          </div>
        </div>
        <div className="flex-1 pt-4">
          <h2 className="text-3xl font-bold text-[#6B5B4E] mb-6">Building Since 2005</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mahindra Construction Company is an engineer-led civil contracting firm specializing in residential construction projects across Navi Mumbai and Mumbai regions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With strong technical supervision and disciplined site execution, we focus on delivering structurally sound, cost-efficient, and timely construction solutions. Our approach combines engineering expertise, practical field experience, and professional project management systems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to building long-term client relationships through transparency, reliability, and quality workmanship.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-24">
        <div className="bg-[#F0EAE1] p-8 rounded-xl text-center border-b-4 border-[#C8A97E]">
          <Briefcase size={40} className="mx-auto text-[#6B5B4E] mb-4" />
          <h3 className="font-bold text-xl mb-2">Industry</h3>
          <p className="text-gray-600">Construction</p>
        </div>
        <div className="bg-[#F0EAE1] p-8 rounded-xl text-center border-b-4 border-[#C8A97E]">
          <Users size={40} className="mx-auto text-[#6B5B4E] mb-4" />
          <h3 className="font-bold text-xl mb-2">Company Size</h3>
          <p className="text-gray-600">15-20 Employees</p>
        </div>
        <div className="bg-[#F0EAE1] p-8 rounded-xl text-center border-b-4 border-[#C8A97E]">
          <Target size={40} className="mx-auto text-[#6B5B4E] mb-4" />
          <h3 className="font-bold text-xl mb-2">Specialties</h3>
          <p className="text-gray-600">Bungalows, Towers</p>
        </div>
        <div className="bg-[#F0EAE1] p-8 rounded-xl text-center border-b-4 border-[#C8A97E]">
          <MapPin size={40} className="mx-auto text-[#6B5B4E] mb-4" />
          <h3 className="font-bold text-xl mb-2">Headquarters</h3>
          <p className="text-gray-600">Kharghar, Navi Mumbai</p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-[#1E1A18] text-center mb-16">Our Leadership</h2>
        
        {/* Founder */}
        <div className="flex gap-12 items-center mb-20 bg-[#E6D3A9] p-10 rounded-2xl shadow-md border border-transparent">
          <div className="w-1/3 flex flex-col items-center">
            <img src="/images/mahindra.jpg" alt="Mr. Mahendra Umbarkar" className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-white mb-6" />
            <h3 className="text-2xl font-bold text-[#5C3317]">Mr. Mahendra Umbarkar</h3>
            <p className="text-[#5C3317] font-bold text-lg">Founder & Director</p>
            <p className="text-sm text-[#5C3317]/90 font-bold mt-2">B.E. M.I.E Civil</p>
          </div>
          <div className="w-2/3">
            <p className="text-[#3E2723] leading-relaxed mb-4">
              Mr. Mahendra Umbarkar is our founder and driving force behind the company. With years of hands-on experience in the construction industry, he built the foundation of the business on the principles of quality workmanship, integrity, and reliability.
            </p>
            <p className="text-[#3E2723] leading-relaxed mb-4">
              Starting with small-scale construction projects, Mr. Umbarkar gradually expanded operations through dedication, practical knowledge, and a strong commitment to delivering durable and well-executed structures. His deep understanding of on-site execution, labour management, and project coordination has helped the company successfully complete multiple residential and structural projects.
            </p>
            <p className="text-[#3E2723] leading-relaxed mb-4">
              Under his leadership, the company has consistently focused on maintaining high construction standards while ensuring timely completion of projects. His vision is to continue building spaces that are not only structurally strong but also built with trust and transparency.
            </p>
            <p className="text-[#3E2723] leading-relaxed font-bold">
              Today, the company continues to grow with the same core values established by its founder — hard work, honesty, and commitment to excellence.
            </p>
          </div>
        </div>

        {/* Project Manager */}
        <div className="flex gap-12 items-center bg-[#E6D3A9] p-10 rounded-2xl shadow-md border border-transparent">
          <div className="w-2/3 text-right">
            <h3 className="text-2xl font-bold text-[#5C3317] mb-2">Mr. Omkar Umbarkar</h3>
            <p className="text-[#5C3317] font-bold text-lg">Project Manager</p>
            <p className="text-sm text-[#5C3317]/90 font-bold mt-2 mb-6">MBA - Marketing</p>
            <p className="text-[#3E2723] leading-relaxed mb-4">
              Omkar serves as the operational backbone on site, translating engineering plans into tangible structures. With a keen eye for detail and a rigorous approach to daily project management, he ensures that every phase of construction meets our stringent quality and safety standards.
            </p>
            <p className="text-[#3E2723] leading-relaxed">
              From coordinating with site engineers and labor teams to monitoring material procurement and tracking progress, Omkar's proactive management style keeps our residential and turnkey projects moving efficiently towards timely completion.
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <img src="/images/omkar.jpg" alt="Omkar Umbarkar" className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
