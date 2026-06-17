import React from 'react';
import { Target, Users, MapPin, Briefcase } from 'lucide-react';

export default function DesktopAbout() {
  return (
    <div className="py-20 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#3E2723] mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          "We believe real learning in construction happens on site, not just on paper."
        </p>
      </div>

      <div className="flex gap-16 items-center mb-20">
        <div className="flex-1">
          <img src="/images/logo.jpg" alt="Company Logo" className="w-full max-w-sm mx-auto shadow-sm rounded-lg p-8 bg-[#FDFBF7]" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#8B5E34] mb-6">Building Since 2005</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mahindra Construction Company is a civil construction firm specializing in residential and turnkey building projects. With over 20 years of experience, we focus on delivering structurally strong, high-quality construction with timely execution.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our approach is deeply practical and on-site driven. Every project is executed with attention to detail, proper planning, and strong site supervision to ensure long-lasting results.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-20">
        <div className="bg-[#F8F5F0] p-8 rounded-xl text-center border-b-4 border-[#C49A45]">
          <Briefcase size={40} className="mx-auto text-[#8B5E34] mb-4" />
          <h3 className="font-bold text-xl mb-2">Industry</h3>
          <p className="text-gray-600">Construction</p>
        </div>
        <div className="bg-[#F8F5F0] p-8 rounded-xl text-center border-b-4 border-[#C49A45]">
          <Users size={40} className="mx-auto text-[#8B5E34] mb-4" />
          <h3 className="font-bold text-xl mb-2">Company Size</h3>
          <p className="text-gray-600">40-50 Employees</p>
        </div>
        <div className="bg-[#F8F5F0] p-8 rounded-xl text-center border-b-4 border-[#C49A45]">
          <Target size={40} className="mx-auto text-[#8B5E34] mb-4" />
          <h3 className="font-bold text-xl mb-2">Specialties</h3>
          <p className="text-gray-600">Bungalows, Towers</p>
        </div>
        <div className="bg-[#F8F5F0] p-8 rounded-xl text-center border-b-4 border-[#C49A45]">
          <MapPin size={40} className="mx-auto text-[#8B5E34] mb-4" />
          <h3 className="font-bold text-xl mb-2">Headquarters</h3>
          <p className="text-gray-600">Kharghar, Navi Mumbai</p>
        </div>
      </div>
    </div>
  );
}
