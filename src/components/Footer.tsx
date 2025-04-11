
import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-devcation-blue/95 border-t border-devcation-teal/20 py-10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 left-20 w-72 h-72 rounded-full bg-devcation-teal/5 blur-3xl"></div>
      <div className="absolute -bottom-20 right-20 w-72 h-72 rounded-full bg-devcation-lavender/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              alt="GDG IGDTUW Logo" 
              className="h-14" 
              src="/images/GDC.png" 
            />
          </div>
          
          <div className="my-6 md:my-0 flex space-x-4">
            <SocialIcon icon={<Twitter className="h-5 w-5" />} />
            <SocialIcon icon={<Facebook className="h-5 w-5" />} />
            <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
            <SocialIcon icon={<Instagram className="h-5 w-5" />} />
            <SocialIcon icon={<Youtube className="h-5 w-5" />} />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Google Developer Groups - IGDTUW. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">Designed with 💙 by Mohammad Areeb Ansari</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="text-white hover:text-devcation-teal transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20">
    {icon}
  </a>
);

export default Footer;
