import React, { useEffect, useRef } from 'react';
import { ArrowDown, Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Parallax effect for the background elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply parallax transformations to floating elements
      document.querySelectorAll('.parallax-element').forEach((element, index) => {
        const speed = 0.05 + (index * 0.02);
        const yPos = -scrollY * speed;
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0) rotate(${scrollY * 0.02}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden flex items-center"
      ref={parallaxRef}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-devcation-blue/70 to-devcation-blue/90"></div>
      </div>
      
      {/* Parallax floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-devcation-teal/10 blur-3xl"></div>
        <div className="parallax-element absolute top-[30%] right-[10%] w-80 h-80 rounded-full bg-devcation-lavender/10 blur-3xl"></div>
        <div className="parallax-element absolute bottom-[20%] left-[20%] w-72 h-72 rounded-full bg-devcation-pink/10 blur-3xl"></div>
        <div className="parallax-element absolute top-[70%] right-[25%] w-56 h-56 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="parallax-element absolute top-[40%] left-[40%] w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            <span className="neon-text">Welcome to</span>
            <br />
            <span className="text-white">Devcation<span className="text-devcation-teal">'25</span></span>
          </h1>
          
          <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in">
            A week-long technical festival celebrating diversity in the TechForGood Domain
          </p>
          
          <button className="bg-gradient-to-r from-devcation-pink to-devcation-lavender text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-glow">
            Register Now
          </button>
          
          <div className="flex justify-center lg:justify-start mt-8 space-x-4">
            <SocialIcon icon={<Twitter className="h-5 w-5" />} />
            <SocialIcon icon={<Facebook className="h-5 w-5" />} />
            <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
            <SocialIcon icon={<Instagram className="h-5 w-5" />} />
            <SocialIcon icon={<Youtube className="h-5 w-5" />} />
          </div>
        </div>
        
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center animate-float">
          <img alt="Devcation 25" className="max-w-full lg:max-w-md rounded-lg shadow-2xl transform rotate-3" src="/images/devcation25.jpg" />
        </div>
      </div>
      
      {!isMobile && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-10 animate-bounce">
          <button 
            onClick={scrollToAbout} 
            className="text-white hover:text-devcation-teal transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-center space-x-16 md:space-x-32 py-6">
          <StatItem value="4.6/5+" label="Hacker rating" />
          <StatItem value="300+" label="Hacks" />
          <StatItem value="25+" label="Speakers and mentors" />
          <StatItem value="500+" label="Hackers" />
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="text-white hover:text-devcation-teal transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20">
    {icon}
  </a>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <p className="text-2xl md:text-3xl font-bold text-devcation-teal">{value}</p>
    <p className="text-xs md:text-sm text-gray-300">{label}</p>
  </div>
);

export default HeroSection;
