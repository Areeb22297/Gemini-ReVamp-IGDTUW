import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-devcation-blue to-devcation-blue/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About GDG IGDTUW */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 neon-text text-center">
            About GDG IGDTUW
          </h2>
          
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-devcation-teal/20 animate-fade-in">
            <div className="relative">
              <div className="mt-4 text-gray-200 leading-relaxed">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <p className="mb-4">
                      Google Developer Groups IGDTUW is a community where students passionate about technology come together to learn, share, and grow.
                    </p>
                    <p className="mb-4">
                      We explore technology and use it to build products that bring about positive change in society. Our initiatives include mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, and open source programs.
                    </p>
                    <p className="text-center text-devcation-teal font-semibold mt-4">
                      We have helped more than 7000+ university students to expand their technical knowledge and skills.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="https://devcation-2025.vercel.app/assets/collage-CgbJk-hw.jpg" 
                        alt="GDG IGDTUW Events" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-devcation-blue/70 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Devcation'25 */}
        <div id="devcation">
          <h2 className="text-4xl font-bold mb-8 neon-text text-center">
            About Devcation'25
          </h2>
          
          <div className="bg-gradient-to-br from-devcation-purple/30 to-devcation-blue p-6 rounded-xl border border-devcation-teal/20 animate-fade-in shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://devcation-2025.vercel.app/header.png" 
                    alt="Devcation'25" 
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
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
      </div>
    </section>
  );
};

export default AboutSection;