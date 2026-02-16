import React, { useState } from 'react';
import { Tv, Wifi, Dumbbell, GraduationCap } from 'lucide-react';

const UseCases: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const useCases = [
    {
      icon: Tv,
      title: 'Cable TV Operators (LCOs)',
      description: 'Automate monthly bill collections, reduce cash hassle',
      stats: 'Reliable Collections',
    },
    {
      icon: Wifi,
      title: 'Regional ISPs',
      description: 'Collect broadband fees reliably, avoid late payments',
      stats: 'Zero Defaults',
    },
    {
      icon: Dumbbell,
      title: 'Gyms & Fitness Studios',
      description: 'Keep memberships active with seamless recurring billing',
      stats: 'Active Memberships',
    },
    {
      icon: GraduationCap,
      title: 'Tuition & Coaching Centers',
      description: 'Ensure steady fee collections, reduce student drop-offs',
      stats: 'Steady Revenue',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Solutions (Offline SMB First)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "If your business depends on monthly collections, SubversePay makes it predictable and easy."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`glassmorphic rounded-2xl p-6 h-64 transition-all duration-500 cursor-pointer ${
                hoveredCard === index ? 'transform rotate-y-180' : ''
              }`}>
                {hoveredCard !== index ? (
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <useCase.icon className="h-16 w-16 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      {useCase.stats}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center h-full text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;