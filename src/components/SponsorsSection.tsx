
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Rotaract",
      logo: "https://devcation-2025.vercel.app/sponsors/rcigdtuw.jpg",
      link: "#"
    },
    {
      name: "Unstop",
      logo: "https://devcation-2025.vercel.app/unstop.jpg",
      link: "#"
    },
    {
      name: "CodeCrafter",
      logo: "https://devcation-2025.vercel.app/codecrafters.jpg",
      link: "#"
    },
    {
      name: "Sprint",
      logo: "https://devcation-2025.vercel.app/sprint.jpg",
      link: "#"
    },
    {
      name: "Interview Buddy",
      logo: "https://devcation-2025.vercel.app/sponsors/interview_buddy.png",
      link: "#"
    },
    {
      name: "Geekroom",
      logo: "https://devcation-2025.vercel.app/geekroom.jpg",
      link: "#"
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-devcation-blue to-devcation-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 neon-text">
          Sponsors
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-white/10 hover:border-devcation-teal/40 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-devcation-teal/10 to-devcation-lavender/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
