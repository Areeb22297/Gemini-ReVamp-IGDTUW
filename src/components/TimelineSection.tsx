import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, Rocket, Award, Users } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      title: "Opening Ceremony & Registration",
      description: "Submission for all Mini Events and the Registration for the Hackathon Starts",
      date: "April 4th, 2025",
      icon: <Calendar className="h-6 w-6 text-white" />,
      color: "devcation-teal",
    },
    {
      title: "Hacking Period Starts!",
      description: "Get ready to code, create, and innovate!",
      date: "April 8th, 2025",
      icon: <Rocket className="h-6 w-6 text-white" />,
      color: "devcation-pink",
    },
    {
      title: "Hacking Period Ends",
      description: "Make sure to wrap up your projects and prepare for submission.",
      date: "April 12th, 2025",
      icon: <Clock className="h-6 w-6 text-white" />,
      color: "devcation-yellow",
    },
    {
      title: "Mentorship Round Starts",
      description: "Providing mentorship and feedback for every submitted project",
      date: "April 13th, 2025",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "devcation-lavender",
    },
    {
      title: "Winners Announcement",
      description: "Final results and prize distribution",
      date: "April 16th, 2025",
      icon: <Award className="h-6 w-6 text-white" />,
      color: "devcation-orange",
    }
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-timeline-enter');
          
          // Animate the line when timeline is in view
          const lineElement = document.querySelector('.timeline-line');
          if (lineElement) {
            lineElement.classList.add('timeline-line-animate');
          }
          
          const lineMobileElement = document.querySelector('.timeline-line-mobile');
          if (lineMobileElement) {
            lineMobileElement.classList.add('timeline-line-animate');
          }
        }
      });
    }, { threshold: 0.1 });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-devcation-blue/90 to-devcation-blue overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={timelineRef}>
        <h2 className="text-4xl font-bold text-center mb-16 neon-text">
          Timeline
        </h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line - now with z-index-0 to ensure it stays behind everything */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 timeline-line z-0"></div>
          
          <div className="space-y-20">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative timeline-item opacity-0 ${index % 2 === 0 ? 'translate-x-[-50px]' : 'translate-x-[50px]'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div 
                    className={`bg-gradient-to-br from-${event.color}/20 to-${event.color}/5 p-6 rounded-xl shadow-xl backdrop-blur-sm border border-${event.color}/30 hover:border-${event.color}/70 transition-all duration-300 card-glow`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-3">{event.description}</p>
                    <span className={`text-${event.color} font-semibold`}>{event.date}</span>
                  </div>
                </div>
                
                {/* Icon container with z-index-10 to place it above the line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-card/70 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group animate-fade-in">
                    {event.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Mobile timeline line - now with z-index-0 to ensure it stays behind everything */}
          <div className="absolute left-4 top-0 h-full w-1.5 timeline-line-mobile z-0"></div>
          
          <div className="space-y-10">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className="ml-12 relative timeline-item opacity-0 translate-x-[-30px]"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Mobile icon container with z-index-10 to place it above the line */}
                <div className="absolute -left-12 top-4 flex items-center justify-center z-10">
                  <div className={`h-8 w-8 rounded-full bg-${event.color} flex items-center justify-center shadow-lg pulse-${event.color} z-10`}>
                    {React.cloneElement(event.icon, { className: "h-4 w-4 text-white" })}
                  </div>
                </div>
                
                <div 
                  className={`p-4 rounded-xl shadow-xl bg-gradient-to-br from-${event.color}/20 to-${event.color}/5 backdrop-blur-sm border border-${event.color}/30 card-glow`}
                >
                  <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{event.description}</p>
                  <span className={`text-${event.color} text-sm font-semibold`}>{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
