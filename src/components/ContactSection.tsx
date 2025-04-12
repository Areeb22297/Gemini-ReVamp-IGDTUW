
import React from 'react';
import { Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-devcation-blue to-devcation-blue/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 neon-text">Join Our Chapter</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Contact us</h3>
              <a href="mailto:dscigdtuw@gmail.com" className="text-gray-300 hover:text-devcation-teal flex items-center gap-2">
                <Mail className="h-5 w-5" />
                dscigdtuw@gmail.com
              </a>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3">Follow us</h3>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Youtube className="h-5 w-5" />} href="#" />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 neon-text">Send us a message</h2>
            <p className="text-gray-300 mb-6">Send your message here and we will try to get back to you as soon as possible.</p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-devcation-teal/70"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-devcation-teal/70"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-devcation-teal/70"
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card/60 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-devcation-teal/70 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-devcation-teal to-devcation-lavender text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-devcation-teal/20 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-devcation-teal transition-colors"
  >
    {icon}
  </a>
);

export default ContactSection;
