
import React from 'react';
import { Linkedin } from 'lucide-react';

const JudgeMentorSection = () => {
  const judges = [
    {
      name: "Kartik Mathur",
      image: "https://devcation-2025.vercel.app/Kartik.jpeg",
      linkedin: "#"
    },
    {
      name: "Vani Chitkara",
      image: "https://devcation-2025.vercel.app/vani.jpeg",
      linkedin: "#"
    },
    {
      name: "Aarnav Jindal",
      image: "https://devcation-2025.vercel.app/aarnav.jpg",
      linkedin: "#"
    }
  ];

  const mentors = [
    // First row
    {
      name: "Radhika Bansal",
      image: "https://devcation-2025.vercel.app/mentors/RadhikaBansal_Devcation.jpeg",
      linkedin: "#"
    },
    {
      name: "Sanidhya Goel",
      image: "https://devcation-2025.vercel.app/mentors/SanidhyaGoel.jpeg",
      linkedin: "#"
    },
    {
      name: "Tejaswi Tyagi",
      image: "https://devcation-2025.vercel.app/mentors/TejaswiTyagi_Mentor.jpg",
      linkedin: "#"
    },
    {
      name: "Akanksha Jha",
      image: "https://devcation-2025.vercel.app/mentors/AkankshaJha_Mentor.jpg",
      linkedin: "#"
    },
    // Second row
    {
      name: "Vikranth Udandarao",
      image: "https://devcation-2025.vercel.app/mentors/VikranthUdandarao_Mentor.jpg",
      linkedin: "#"
    },
    {
      name: "Rudra Pratap Dash",
      image: "https://devcation-2025.vercel.app/mentors/RudraPratapDash.jpg",
      linkedin: "#"
    },
    {
      name: "Aishvi",
      image: "https://devcation-2025.vercel.app/mentors/Aishvi.png",
      linkedin: "#"
    },
    {
      name: "Pratham Batra",
      image: "https://devcation-2025.vercel.app/mentors/PrathamBatra_Mentor.jpeg",
      linkedin: "#"
    }
  ];

  return (
    <>
      <section id="judges" className="py-20 bg-gradient-to-b from-devcation-blue/90 to-devcation-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            Judges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {judges.map((judge, index) => (
              <ProfileCard key={index} person={judge} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="mentors" className="py-20 bg-gradient-to-b from-devcation-blue to-devcation-blue/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            Mentors
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.slice(0, 4).map((mentor, index) => (
              <ProfileCard key={index} person={mentor} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {mentors.slice(4).map((mentor, index) => (
              <ProfileCard key={index} person={mentor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ProfileCard = ({ person }) => {
  return (
    <div className="group relative w-full max-w-xs animate-fade-in">
      <div className="overflow-hidden rounded-xl bg-card/60 backdrop-blur-sm border border-white/10 hover:border-devcation-teal/50 transition-all duration-300 h-72">
        <div className="h-full overflow-hidden relative">
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-devcation-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{person.name}</h3>
            <a 
              href={person.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-300 hover:text-blue-100"
            >
              <Linkedin className="h-5 w-5 mr-1" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-32 h-32 rounded-full bg-gradient-to-br from-devcation-teal to-devcation-lavender opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  );
};

export default JudgeMentorSection;
