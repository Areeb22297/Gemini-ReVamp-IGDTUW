
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can contribute?",
      answer: "Any student passionate about technology can participate. We welcome students from all backgrounds, especially those interested in developing solutions for social good."
    },
    {
      question: "Where can we reach out in case of queries?",
      answer: "You can reach us via email at dscigdtuw@gmail.com or through our Discord channel. Our team responds promptly to all queries."
    },
    {
      question: "Do I need to have coding experience to participate?",
      answer: "While coding experience is beneficial, it's not mandatory. We welcome participants with diverse skill sets including design, project management, and domain expertise."
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "After the hackathon, all projects will receive feedback from our mentors. Winners will be announced and prizes distributed. We also provide opportunities for top projects to be further developed with support from our partners."
    },
    {
      question: "How can I stay updated on hackathon announcements and events?",
      answer: "Join our Discord server and follow us on social media platforms. We regularly share updates, resources, and important announcements through these channels."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-devcation-blue/90 to-devcation-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 neon-text">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              index={index} 
            />
          ))}
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z" fill="white"/>
              <path d="M23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="white"/>
            </svg>
            Join Discord
          </a>
          
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2zm6.93 20.56-1.4.54c-.62.24-1.42.3-2.4.3-2.98 0-5.2-1.16-5.2-4.05V9.08l2.04.42v9.92c0 1.76.92 2.23 2.56 2.23.42 0 .96-.02 1.3-.12l3.1-1.32V19.3z" fill="white"/>
            </svg>
            Join WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-card/60 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-devcation-teal/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left"
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-devcation-teal transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 max-h-0 ${isOpen ? 'max-h-96' : ''}`}
      >
        <div className="p-5 pt-0 text-gray-300 border-t border-white/10">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
