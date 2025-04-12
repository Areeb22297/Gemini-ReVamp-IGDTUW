
import React from 'react';
import { Trophy, Gift, Medal, Award, Star } from 'lucide-react';

const PrizesSection = () => {
  const prizes = [
    {
      title: "Hack & Solve Winners",
      rewards: [
        "Cash Prize with swag kits",
        "Medals & certificates",
        "Social media shoutouts",
        "Interview Buddy Mock Interviews",
        "Codecrafter Membership",
        "Unstop Coupons"
      ],
      icon: <Trophy className="h-10 w-10 text-white" />,
      color: "from-yellow-400 to-yellow-600",
      gradient: "bg-gradient-to-br from-yellow-400/20 to-yellow-600/10",
      border: "border-yellow-500/40",
      shadow: "shadow-yellow-400/20",
      glow: "yellow-400"
    },
    {
      title: "Mini Event Winners",
      rewards: [
        "Goodies & certificates",
        "Social media shoutouts",
        "Unstop coupons"
      ],
      icon: <Star className="h-10 w-10 text-white" />,
      color: "from-blue-400 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-400/20 to-blue-600/10",
      border: "border-blue-500/40",
      shadow: "shadow-blue-400/20",
      glow: "blue-400"
    },
    {
      title: "All Finalists",
      rewards: [
        "Exciting goodies",
        "Certificates",
        "Unstop coupons"
      ],
      icon: <Medal className="h-10 w-10 text-white" />,
      color: "from-green-400 to-green-600",
      gradient: "bg-gradient-to-br from-green-400/20 to-green-600/10",
      border: "border-green-500/40",
      shadow: "shadow-green-400/20",
      glow: "green-400"
    },
    {
      title: "All Participants",
      rewards: [
        "Certificates",
        "50% unstop coupons",
        "Exclusive discount vouchers from IB"
      ],
      icon: <Gift className="h-10 w-10 text-white" />,
      color: "from-purple-400 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/10",
      border: "border-purple-500/40",
      shadow: "shadow-purple-400/20",
      glow: "purple-400"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-devcation-blue/90 to-devcation-blue relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-devcation-yellow/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-devcation-pink/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 neon-text">
          Prizes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prizes.map((prize, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl ${prize.gradient} backdrop-blur-sm ${prize.border} hover:border-white/30 transition-all duration-300 group animate-fade-in transform hover:-translate-y-1 hover:${prize.shadow}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: `0 4px 20px -5px rgba(0, 0, 0, 0.3), 0 0 15px -3px rgba(var(--${prize.glow}-rgb), 0.3)`
              }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity"></div>
              
              <div className="p-8 flex flex-col items-center relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${prize.color} rounded-full flex items-center justify-center mb-6 shadow-lg shadow-${prize.glow}/20 group-hover:shadow-${prize.glow}/40 transition-all duration-300 transform group-hover:scale-105`}>
                  {prize.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{prize.title}</h3>
                
                <ul className="space-y-3 text-gray-200 w-full flex flex-col items-center">
                  {prize.rewards.map((reward, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className={`h-2 w-2 rounded-full bg-${prize.glow} mt-1 mr-3 flex-shrink-0`}></span>
                      <span>{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(${prize.color})` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
