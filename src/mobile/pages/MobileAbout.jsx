import React from 'react';
import { Target, Users, MapPin, Briefcase } from 'lucide-react';

export default function MobileAbout() {
  return (
    <div className="py-12 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#3E2723] mb-4">About Us</h1>
        <p className="text-lg text-gray-600 italic">
          "Real learning in construction happens on site, not just on paper."
        </p>
      </div>

      <div className="mb-12">
        <img src="/images/logo.jpg" alt="Company Logo" className="w-full max-w-[250px] mx-auto shadow-sm rounded-lg p-6 bg-[#FDFBF7] mb-8" />
        <h2 className="text-2xl font-bold text-[#8B5E34] mb-4 text-center">Building Since 2005</h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-center">
          Mahindra Construction Company is a civil construction firm specializing in residential and turnkey building projects. With over 20 years of experience, we focus on delivering structurally strong construction with timely execution.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#F8F5F0] p-6 rounded-xl text-center border-b-4 border-[#C49A45]">
          <Briefcase size={32} className="mx-auto text-[#8B5E34] mb-3" />
          <h3 className="font-bold text-md mb-1">Industry</h3>
          <p className="text-gray-600 text-sm">Construction</p>
        </div>
        <div className="bg-[#F8F5F0] p-6 rounded-xl text-center border-b-4 border-[#C49A45]">
          <Users size={32} className="mx-auto text-[#8B5E34] mb-3" />
          <h3 className="font-bold text-md mb-1">Size</h3>
          <p className="text-gray-600 text-sm">40-50 Employees</p>
        </div>
        <div className="bg-[#F8F5F0] p-6 rounded-xl text-center border-b-4 border-[#C49A45]">
          <Target size={32} className="mx-auto text-[#8B5E34] mb-3" />
          <h3 className="font-bold text-md mb-1">Specialties</h3>
          <p className="text-gray-600 text-sm">Bungalows, Towers</p>
        </div>
        <div className="bg-[#F8F5F0] p-6 rounded-xl text-center border-b-4 border-[#C49A45]">
          <MapPin size={32} className="mx-auto text-[#8B5E34] mb-3" />
          <h3 className="font-bold text-md mb-1">HQ</h3>
          <p className="text-gray-600 text-sm">Navi Mumbai</p>
        </div>
      </div>
    </div>
  );
}
