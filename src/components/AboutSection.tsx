
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-devcation-blue to-devcation-blue/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* About GDG IGDTUW */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 neon-text">
              About GDG IGDTUW
            </h2>
            
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-devcation-teal/20 animate-fade-in">
              <div className="relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-6 text-gray-200 leading-relaxed">
                  <p className="mb-4">
                    Google Developer Groups IGDTUW is a community where students passionate about technology come together to learn, share, and grow.
                  </p>
                  <p className="mb-4">
                    We explore technology and use it to build products that bring about positive change in society. Our initiatives include mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, and open source programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Community Event" className="rounded-lg shadow-lg object-cover h-48" />
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Tech Workshop" className="rounded-lg shadow-lg object-cover h-48" />
                  </div>
                  <p className="mt-6 text-center text-devcation-teal font-semibold">
                    We have helped more than 7000+ university students to expand their technical knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Devcation'25 */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8 neon-text">
              About Devcation'25
            </h2>
            
            <div className="bg-gradient-to-br from-devcation-purple/30 to-devcation-blue p-6 rounded-xl border border-devcation-teal/20 animate-fade-in shadow-lg">
              
              <p className="text-gray-200 leading-relaxed mb-4">
                Devcation'25 is a week-long technical festival organized by GDG IGDTUW that celebrates diversity in the TechForGood Domain.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Our flagship event is the Devcation'25 hackathon which brings together innovative minds to build solutions for real-world problems. We provide a platform for participants to showcase their skills, learn from industry experts, and create technology that makes a positive impact.
              </p>
              <div className="mt-6 p-4 bg-devcation-blue/60 rounded-lg border border-devcation-teal/20">
                <h4 className="text-devcation-teal font-bold mb-2">Why Participate?</h4>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Connect with industry professionals</li>
                  <li>Learn new technologies and frameworks</li>
                  <li>Win exciting prizes and recognition</li>
                  <li>Build your portfolio with impactful projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
