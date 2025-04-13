import React from 'react';
import { ExternalLink } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Rotaract",
      logo: "https://devcation-2025.vercel.app/sponsors/rcigdtuw.jpg",
      link: "#",
    },
    {
      name: "Unstop",
      logo: "https://devcation-2025.vercel.app/unstop.jpg",
      link: "#",
    },
    {
      name: "CodeCrafter",
      logo: "https://devcation-2025.vercel.app/codecrafters.jpg",
      link: "#",
    },
    {
      name: "Sprint",
      logo: "https://devcation-2025.vercel.app/sprint.jpg",
      link: "#",
    },
    {
      name: "Interview Buddy",
      logo: "https://devcation-2025.vercel.app/sponsors/interview_buddy.png",
      link: "#",
    },
    {
      name: "Geekroom",
      logo: "https://devcation-2025.vercel.app/geekroom.jpg",
      link: "#",
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-devcation-blue to-devcation-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 neon-text">
          Our Sponsors
        </h2>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          We extend our heartfelt gratitude to our sponsors who have made Devcation'25 possible. Their support enables us to create a platform for innovation and learning.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-devcation-teal/20 to-devcation-lavender/10 backdrop-blur-sm border border-devcation-teal/30 hover:border-devcation-teal/70 transition-all duration-300 group animate-fade-in shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
              
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-devcation-teal/5 to-devcation-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="py-2 px-6 rounded-full bg-devcation-teal/20 border border-devcation-teal/30 text-sm font-medium text-white">
                {sponsor.name}
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-white mb-4">Interested in sponsoring Devcation'25?</h3>
          <p className="text-gray-300 mb-6">Join our growing list of sponsors and support the next generation of tech innovators.</p>
          <button className="bg-gradient-to-r from-devcation-teal/80 to-devcation-lavender/80 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:from-devcation-teal hover:to-devcation-lavender transition-all duration-300">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
