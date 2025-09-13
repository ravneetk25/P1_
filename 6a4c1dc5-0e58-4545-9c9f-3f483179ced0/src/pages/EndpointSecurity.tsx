import React from 'react';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';
import { CTABanner } from '../components/ui/CTABanner';
import { ShieldIcon, ShieldCheckIcon, ShieldXIcon, FileIcon } from 'lucide-react';
const EndpointSecurity: React.FC = () => {
  return <div className="bg-[#0A0A12] text-white">
      {/* Hero Section */}
      <Hero title="Secure every endpoint — laptops, servers, and devices." subtitle="Protect your business with next-generation endpoint security that stops threats before they can cause damage." primaryButtonText="Get Started" image="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1000&auto=format&fit=crop" imageAlt="Endpoint security visualization" />
      {/* Feature Deep-Dive Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">
            Advanced Protection Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <ShieldCheckIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Next-Gen Antimalware
                  </h3>
                  <p className="text-[#B0B0B0]">
                    AI-powered protection against known and unknown threats,
                    including zero-day exploits, ransomware, and advanced
                    persistent threats.
                  </p>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <ShieldXIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Device Control
                  </h3>
                  <p className="text-[#B0B0B0]">
                    Manage and restrict the use of USB drives, external devices,
                    and removable media to prevent data leaks and malware
                    introduction.
                  </p>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <ShieldIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Application Control
                  </h3>
                  <p className="text-[#B0B0B0]">
                    Whitelist and blacklist applications to ensure only
                    authorized software runs on your systems, reducing the
                    attack surface and preventing malicious executables.
                  </p>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <FileIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Data Loss Prevention
                  </h3>
                  <p className="text-[#B0B0B0]">
                    Identify and protect sensitive data from unauthorized
                    access, transfer, or exfiltration with content-aware
                    policies and monitoring.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Real-World Use Cases
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            See how Osto.one's endpoint security protects businesses like yours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover className="p-6">
              <h3 className="text-xl font-bold font-montserrat mb-3">
                File Upload Blocking
              </h3>
              <p className="text-[#B0B0B0] mb-4">
                Prevent unauthorized file uploads to cloud services and sharing
                platforms, protecting sensitive company data.
              </p>
              <div className="bg-[#0A0A12] p-3 rounded-lg">
                <p className="text-xs text-[#B0B0B0]">
                  <span className="text-[#29A8FF]">Alert:</span> Blocked
                  unauthorized upload of customer_data.xlsx to personal Dropbox
                  account.
                </p>
              </div>
            </Card>
            <Card hover className="p-6">
              <h3 className="text-xl font-bold font-montserrat mb-3">
                PII Detection
              </h3>
              <p className="text-[#B0B0B0] mb-4">
                Automatically identify and protect personally identifiable
                information across your endpoints.
              </p>
              <div className="bg-[#0A0A12] p-3 rounded-lg">
                <p className="text-xs text-[#B0B0B0]">
                  <span className="text-[#29A8FF]">Alert:</span> Detected 47
                  credit card numbers in unencrypted spreadsheet on marketing
                  laptop.
                </p>
              </div>
            </Card>
            <Card hover className="p-6">
              <h3 className="text-xl font-bold font-montserrat mb-3">
                Policy Enforcement
              </h3>
              <p className="text-[#B0B0B0] mb-4">
                Ensure compliance with company security policies across all
                endpoints automatically.
              </p>
              <div className="bg-[#0A0A12] p-3 rounded-lg">
                <p className="text-xs text-[#B0B0B0]">
                  <span className="text-[#29A8FF]">Action:</span> Enforced disk
                  encryption on 23 devices out of compliance with security
                  policy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Key Benefits
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Why Osto.one's endpoint security stands above the rest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon size={32} className="text-[#29A8FF]" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-2">
                Risk Reduction
              </h3>
              <p className="text-[#B0B0B0]">
                Minimize security incidents with proactive protection that stops
                threats before they impact your business.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-4">
                <FileIcon size={32} className="text-[#29A8FF]" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-2">
                Compliance Support
              </h3>
              <p className="text-[#B0B0B0]">
                Meet regulatory requirements with built-in controls and detailed
                audit logs for all endpoint activity.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-4">
                <ShieldIcon size={32} className="text-[#29A8FF]" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-2">
                Real-Time Monitoring
              </h3>
              <p className="text-[#B0B0B0]">
                Get instant visibility into threats and security events across
                all your endpoints from a single dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Dashboard Visual */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Powerful, Intuitive Dashboard
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Monitor and manage your endpoint security from a single, unified
            console.
          </p>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] rounded-lg blur opacity-30"></div>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Endpoint security dashboard" className="relative rounded-lg w-full shadow-2xl" />
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <CTABanner title="Ready to secure your endpoints?" subtitle="Get started with Osto.one's endpoint security solution today." buttonText="Start Free Trial" buttonLink="/demo" />
    </div>;
};
export default EndpointSecurity;