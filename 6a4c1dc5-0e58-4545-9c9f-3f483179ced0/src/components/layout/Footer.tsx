import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#0A0A12] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-transparent bg-clip-text font-montserrat">
                Osto.one
              </span>
            </Link>
            <p className="text-[#B0B0B0] text-sm mb-4">
              Cybersecurity for Startups
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Solutions */}
          <div className="col-span-1">
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">
              Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/endpoint-security" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  Endpoint Security
                </Link>
              </li>
              <li>
                <Link to="/network-security" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  Network Security
                </Link>
              </li>
              <li>
                <Link to="/cloud-security" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link to="/compliance-vapt" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  Compliance & VAPT
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MailIcon size={18} className="text-[#29A8FF] mr-2 mt-0.5" />
                <a href="mailto:info@osto.one" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  info@osto.one
                </a>
              </li>
              <li className="flex items-start">
                <PhoneIcon size={18} className="text-[#29A8FF] mr-2 mt-0.5" />
                <a href="tel:+11234567890" className="text-[#B0B0B0] hover:text-[#29A8FF] transition-colors text-sm">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon size={18} className="text-[#29A8FF] mr-2 mt-0.5" />
                <span className="text-[#B0B0B0] text-sm">
                  123 Security Ave, San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-[#B0B0B0] text-sm">
            &copy; {currentYear} Osto.one. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};