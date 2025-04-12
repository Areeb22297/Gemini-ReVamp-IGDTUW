
import React from 'react';
import { Brain, GraduationCap, Heart, Lightbulb, BadgeDollarSign, Cpu } from 'lucide-react';

const TracksSection = () => {
  const tracks = [
    {
      title: "HealthTech",
      description: "Develop solutions for healthcare challenges, medical innovations and patient care improvements.",
      icon: <Heart className="h-16 w-16" />,
      color: "from-pink-500 to-red-500",
      iconBg: "bg-red-400/20",
    },
    {
      title: "EdTech",
      description: "Create educational platforms, learning tools, and accessibility improvements for education.",
      icon: <GraduationCap className="h-16 w-16" />,
      color: "from-blue-500 to-indigo-500",
      iconBg: "bg-blue-400/20",
    },
    {
      title: "Sustainable Development",
      description: "Build technology solutions for climate change, renewable energy, and sustainable communities.",
      icon: <Lightbulb className="h-16 w-16" />,
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-400/20",
    },
    {
      title: "FinTech",
      description: "Develop financial technology innovations, payment solutions, and financial inclusion tools.",
      icon: <BadgeDollarSign className="h-16 w-16" />,
      color: "from-yellow-500 to-amber-500",
      iconBg: "bg-yellow-400/20",
    },
    {
      title: "AI & Machine Learning",
      description: "Create AI-powered solutions across various domains to solve real-world problems.",
      icon: <Brain className="h-16 w-16" />,
      color: "from-purple-500 to-violet-500",
      iconBg: "bg-purple-400/20",
    },
    {
      title: "Open Innovation",
      description: "Build any creative solution that addresses an important problem or improves people's lives.",
      icon: <Cpu className="h-16 w-16" />,
      color: "from-devcation-teal to-devcation-lavender",
      iconBg: "bg-devcation-teal/20",
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-b from-devcation-blue to-devcation-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 neon-text">
          Tracks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl bg-card/60 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className={`${track.iconBg} p-4 rounded-full w-24 h-24 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {track.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{track.title}</h3>
                <p className="text-gray-300">{track.description}</p>
                
                <div className={`absolute -bottom-2 -right-2 w-32 h-32 rounded-full bg-gradient-to-br ${track.color} opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
