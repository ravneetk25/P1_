import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
  imageAlt?: string;
  backgroundPattern?: boolean;
}
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink = '/demo',
  secondaryButtonText,
  secondaryButtonLink = '/demo',
  image,
  imageAlt = 'Hero image',
  backgroundPattern = true
}) => {
  return <div className="relative overflow-hidden pt-16">
      {backgroundPattern && <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#29A8FF]/5 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#29A8FF]/10 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#6C63FF]/10 rounded-full filter blur-[100px]"></div>
        </div>}
      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6" data-aos="fade-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#29A8FF] to-[#6C63FF]">
                {title}
              </span>
            </h1>
            <p className="text-[#B0B0B0] text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="100">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
              {primaryButtonText && <Link to={primaryButtonLink}>
                  <Button size="lg">{primaryButtonText}</Button>
                </Link>}
              {secondaryButtonText && <Link to={secondaryButtonLink}>
                  <Button variant="secondary" size="lg">
                    {secondaryButtonText}
                  </Button>
                </Link>}
            </div>
          </div>
          {image && <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] rounded-lg blur opacity-30"></div>
                <img src={image} alt={imageAlt} className="relative rounded-lg w-full shadow-2xl" />
              </div>
            </div>}
        </div>
      </div>
    </div>;
};