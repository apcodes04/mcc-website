import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home, Building, Hammer, HardHat } from 'lucide-react';

export default function DesktopHome() {
  const services = [
    { title: "Residential Building", icon: <Home size={32} className="text-[#C49A45]" /> },
    { title: "Turnkey Projects", icon: <Building size={32} className="text-[#C49A45]" /> },
    { title: "RCC Structural Work", icon: <Hammer size={32} className="text-[#C49A45]" /> },
    { title: "Renovation & Redevelopment", icon: <HardHat size={32} className="text-[#C49A45]" /> },
  ];

  const projects = [
    { title: "New Panvel, Sector 12", desc: "7-storey residential building; slabs completed, brickwork underway", img: "/images/1.jpg" },
    { title: "Kharghar, Sector 30", desc: "Residential bungalow; RCC completed, moving into next phase", img: "/images/2.jpg" },
    { title: "Khanda Colony, Panvel", desc: "Office remodelling project (office + parking) in progress", img: "/images/3.jpg" },
    { title: "Ulwe, Sector 5", desc: "G+4 clinic + hospital; footing completed", img: "/images/4.jpg" },
    { title: "Ulwe, Sector 2", desc: "G+4 residential building; initial piling stage", img: "/images/5.jpg" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src="/images/1.jpg" alt="Construction Site" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">Building Strength,<br/><span className="text-[#C49A45]">Delivering Trust</span></h1>
          <p className="text-xl mb-8 font-light drop-shadow-md">Over 20 years of excellence in civil construction, specializing in residential and turnkey projects across Navi Mumbai.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-[#C49A45] hover:bg-[#a6823a] text-white px-8 py-3 rounded-md font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              Request a Proposal <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white px-8 py-3 rounded-md font-semibold transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto flex items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#3E2723] mb-6">Expertise You Can Build On</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We operate across Navi Mumbai, Mumbai, and surrounding regions, handling projects from planning to final completion with a practical, on-site driven approach. We believe in building with quality, transparency, and trust. Every project is executed with attention to detail, proper planning, and strong site supervision to ensure long-lasting results.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="text-[#C49A45]" /> End-to-End Execution</li>
            <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="text-[#C49A45]" /> Project Planning & Execution</li>
            <li className="flex items-center gap-3 text-gray-700 font-medium"><CheckCircle2 className="text-[#C49A45]" /> Site Supervision & Coordination</li>
          </ul>
        </div>
        <div className="flex-1 relative">
          <img src="/images/mcc about us.jpg" alt="About MCC" className="rounded-xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-[#8B5E34] text-white p-6 rounded-lg shadow-xl">
            <p className="text-4xl font-bold mb-1">20+</p>
            <p className="text-sm uppercase tracking-wider">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F8F5F0] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3E2723] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive civil construction services tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 group">
                <div className="mb-6 p-4 bg-[#FDFBF7] rounded-full inline-block group-hover:bg-[#C49A45]/10 transition-colors">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-[#3E2723] mb-3">{srv.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3E2723] mb-4">Ongoing Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">5 Projects. Different Stages. One Commitment — Quality Construction.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden shadow-lg h-80">
              <img src={proj.img} alt={proj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                <p className="text-gray-300 text-sm">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
