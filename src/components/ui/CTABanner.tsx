import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}
export const CTABanner: React.FC<CTABannerProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink
}) => {
  return <div className="relative overflow-hidden py-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20"></div>
      {/* Glowing orbs for visual effect */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#29A8FF]/20 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#6C63FF]/20 rounded-full filter blur-[80px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-[#B0B0B0] mb-8 max-w-xl">{subtitle}</p>}
          <Link to={buttonLink}>
            <Button size="lg">{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>;
};