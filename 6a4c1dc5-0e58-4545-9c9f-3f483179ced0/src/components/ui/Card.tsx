import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  gradient = false
}) => {
  return <div className={`
        bg-[#13131f] 
        rounded-xl 
        p-6 
        ${hover ? 'transition-all duration-300 hover:shadow-[0_0_25px_rgba(41,168,255,0.15)] hover:-translate-y-1' : ''}
        ${gradient ? 'border-t-2 border-transparent bg-gradient-to-b from-[#29A8FF]/10 to-transparent' : 'border border-gray-800'}
        ${className}
      `}>
      {children}
    </div>;
};
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return <Card hover className={`flex flex-col ${className}`}>
      <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-[#29A8FF]">{icon}</div>
      </div>
      <h3 className="text-white text-lg font-montserrat font-bold mb-2">
        {title}
      </h3>
      <p className="text-[#B0B0B0] text-sm">{description}</p>
    </Card>;
};
interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkUrl: string;
}
export const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  linkUrl
}) => {
  return <Card hover className="flex flex-col h-full">
      <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-[#29A8FF]">{icon}</div>
      </div>
      <h3 className="text-white text-lg font-montserrat font-bold mb-2">
        {title}
      </h3>
      <p className="text-[#B0B0B0] text-sm flex-grow">{description}</p>
      <a href={linkUrl} className="mt-4 inline-flex items-center text-[#29A8FF] text-sm font-medium hover:text-[#6C63FF] transition-colors">
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </Card>;
};