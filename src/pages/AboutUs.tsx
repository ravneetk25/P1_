//import React from 'react';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';


// Adjust path if component is in a different folder

//import { CTABanner } from '../components/ui/CTABanner';
import { LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const AboutUs: React.FC = () => {
  return <div className="bg-[#0A0A12] text-white">
      {/* Hero Section */}
      <Hero title="Empowering startups with enterprise-grade security." subtitle="We're on a mission to make advanced cybersecurity accessible, affordable, and easy to implement for growing companies." image="/images/about.jpeg" backgroundPattern={true} />
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-[#B0B0B0] mb-8">
              At Osto, we believe that every startup deserves
              enterprise-grade security, regardless of size or budget. Our
              mission is to democratize cybersecurity by making advanced
              protection accessible, affordable, and easy to implement for
              growing companies.
            </p>
            <p className="text-lg text-[#B0B0B0]">
              We're committed to helping startups build secure foundations from
              day one, enabling them to focus on growth while we handle the
              complex security challenges of the digital world.
            </p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="p-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-full"></div>
                  <img src="/images/ceo.jpeg" alt="CEO" className="w-full h-full object-cover" />

                </div>
                <h3 className="text-xl font-bold font-montserrat mb-1">
                  Karmesh Gupta
                </h3>
                <p className="text-[#29A8FF] text-sm mb-3">CEO & Founder</p>
                <p className="text-[#B0B0B0] text-sm mb-4">
                  Former CISO at a Fortune 500 company with 15+ years of
                  experience in cybersecurity.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-full"></div>
                 <img src="/images/cto.jpeg" alt="CTO" className="w-full h-full object-cover" />

                </div>
                <h3 className="text-xl font-bold font-montserrat mb-1">
                  Praveen Gupta
                </h3>
                <p className="text-[#29A8FF] text-sm mb-3">CTO</p>
                <p className="text-[#B0B0B0] text-sm mb-4">
                  AI and machine learning expert with a background in threat
                  detection and response systems.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-full"></div>
                  <img src="/images/senior.jpeg" alt="CSO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-1">
                  Minhaj Uddin
                </h3>
                <p className="text-[#29A8FF] text-sm mb-3">
                  Senior Software Engineer
                </p>
                <p className="text-[#B0B0B0] text-sm mb-4">
                  Ethical hacker and security researcher with expertise in cloud
                  security and compliance.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#13131f] p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-transparent bg-clip-text mb-2">
                500+
              </div>
              <p className="text-[#B0B0B0]">Startups Protected</p>
            </div>
            <div className="bg-[#13131f] p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-transparent bg-clip-text mb-2">
                5M+
              </div>
              <p className="text-[#B0B0B0]">Threats Blocked</p>
            </div>
            <div className="bg-[#13131f] p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-transparent bg-clip-text mb-2">
                99.9%
              </div>
              <p className="text-[#B0B0B0]">Uptime</p>
            </div>
            <div className="bg-[#13131f] p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-transparent bg-clip-text mb-2">
                15+
              </div>
              <p className="text-[#B0B0B0]">Countries Served</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Section */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-full mb-4">
                  <MailIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Email Us
                </h3>
                <a href="mailto:connect@osto.one" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                 connect@osto.one
                </a>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-full mb-4">
                  <PhoneIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Call Us
                </h3>
                <a href="tel:+91 9119106555" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors">
                  +91 9119106555
                </a>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-full mb-4">
                  <MapPinIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Visit Us
                </h3>
                <p className="text-[#B0B0B0]">
                  307, Wing-B, Raj Arcade CHS Ltd
                  <br />
                  Mahavir Nagar, Kandiwali (West), Maharashtra, 400067
                  <br />
                  India
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
    </div>;
};
export default AboutUs;