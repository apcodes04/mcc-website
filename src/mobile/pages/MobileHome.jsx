import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home, Building, Hammer, HardHat } from 'lucide-react';

export default function MobileHome() {
  const services = [
    { title: "Residential Building", icon: <Home size={28} className="text-[#C8A97E]" /> },
    { title: "Turnkey Projects", icon: <Building size={28} className="text-[#C8A97E]" /> },
    { title: "RCC Structural Work", icon: <Hammer size={28} className="text-[#C8A97E]" /> },
    { title: "Renovation", icon: <HardHat size={28} className="text-[#C8A97E]" /> },
  ];

  const projects = [
    { title: "New Panvel, Sector 12", desc: "7-storey residential building; slabs completed", img: "/images/1.jpg" },
    { title: "Kharghar, Sector 30", desc: "Residential bungalow; RCC completed", img: "/images/2.jpg" },
    { title: "Khanda Colony, Panvel", desc: "Office remodelling project in progress", img: "/images/3.jpg" },
    { title: "Ulwe, Sector 5", desc: "G+4 clinic + hospital; footing completed", img: "/images/4.jpg" },
    { title: "Ulwe, Sector 2", desc: "G+4 residential building; piling stage", img: "/images/5.jpg" },
  ];

  return (
    <div>
      {/* Mobile Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/banner.mp4" type="video/mp4" />
          <img src="/images/1.jpg" alt="Construction Site" className="absolute inset-0 w-full h-full object-cover" />
        </video>
        <div className="relative z-20 text-center text-white px-6 w-full">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Building Strength,<br/><span className="text-[#C8A97E]">Delivering Trust</span></h1>
          <p className="text-lg mb-8 font-light drop-shadow-md text-gray-200">Over 20 years of excellence in civil construction.</p>
          <div className="flex flex-col gap-4">
            <Link to="/contact" className="bg-[#C8A97E] hover:bg-[#a6823a] text-white px-6 py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2">
              Request Proposal <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="bg-[#FAF6F0]/20 backdrop-blur-sm border border-[#FAF6F0]/50 text-white px-6 py-3 rounded-md font-semibold transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 bg-[#FAF6F0]">
        <h2 className="text-3xl font-bold text-[#1E1A18] mb-4 text-center">Expertise You Can Build On</h2>
        <p className="text-gray-600 text-center mb-8">
          Operating across Navi Mumbai with a practical, on-site driven approach. We believe in building with quality, transparency, and trust.
        </p>
        
        <div className="mb-10">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700 font-medium bg-[#FAF6F0] p-4 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle2 className="text-[#C8A97E] flex-shrink-0" /> End-to-End Execution
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium bg-[#FAF6F0] p-4 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle2 className="text-[#C8A97E] flex-shrink-0" /> Project Planning
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium bg-[#FAF6F0] p-4 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle2 className="text-[#C8A97E] flex-shrink-0" /> Site Supervision
            </li>
          </ul>
        </div>

        <div className="relative mt-8">
          <img src="/images/mcc about us.jpg" alt="About MCC" className="rounded-xl shadow-lg w-full" />
          <div className="absolute -bottom-4 -left-4 bg-[#6B5B4E] text-white p-4 rounded-lg shadow-xl border-2 border-[#FAF6F0]">
            <p className="text-2xl font-bold text-center">20+</p>
            <p className="text-xs uppercase tracking-wider">Years Exp.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F0EAE1] py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1E1A18] mb-3">Our Services</h2>
          <p className="text-gray-600">Comprehensive construction services.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-[#FAF6F0] p-6 rounded-xl shadow-sm text-center border border-gray-100">
              <div className="mb-4 p-3 bg-[#FAF6F0] rounded-full inline-block">
                {srv.icon}
              </div>
              <h3 className="text-md font-bold text-[#1E1A18] leading-tight">{srv.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1E1A18] mb-3">Ongoing Projects</h2>
          <p className="text-gray-600">Different Stages. One Commitment.</p>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg h-64">
              <img src={proj.img} alt={proj.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-lg font-bold text-white mb-1">{proj.title}</h3>
                <p className="text-gray-300 text-sm leading-tight">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
