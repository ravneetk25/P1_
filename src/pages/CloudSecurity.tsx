//import React from 'react';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';
//import { CTABanner } from '../components/ui/CTABanner';
import { ServerIcon, ScanIcon, CloudIcon } from 'lucide-react';
const CloudSecurity: React.FC = () => {
  return <div className="bg-[#0A0A12] text-white">
      {/* Hero Section */}
      <Hero title="Cloud security that scales with your startup." subtitle="Protect your cloud infrastructure, applications, and data with AI-powered security that grows with your business." primaryButtonText="Get Started" image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" imageAlt="Cloud security visualization" />
      {/* Submodules Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Comprehensive Cloud Protection
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Our multi-layered approach secures every aspect of your cloud
            environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* App Layer */}
            <div>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mb-4">
                  <ServerIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat">
                  App Layer Protection
                </h3>
              </div>
              <Card hover className="h-full">
                <h4 className="font-montserrat font-semibold mb-4">
                  Web App & API Protection
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Advanced WAF with custom rule sets
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Bot protection and management
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">DDoS mitigation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      API security with schema validation
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
            {/* Scanners */}
            <div>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mb-4">
                  <ScanIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat">
                  Security Scanners
                </h3>
              </div>
              <Card hover className="h-full">
                <h4 className="font-montserrat font-semibold mb-4">
                  Comprehensive Scanning
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Web application vulnerability scanning
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      API security testing
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Mobile app security analysis
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Container image scanning
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
            {/* Posture Management */}
            <div>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mb-4">
                  <CloudIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat">
                  Posture Management
                </h3>
              </div>
              <Card hover className="h-full">
                <h4 className="font-montserrat font-semibold mb-4">
                  Cloud & AI-based Security
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Cloud Security Posture Management (CSPM)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Infrastructure-as-Code scanning
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Continuous compliance monitoring
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      AI-driven misconfigurations detection
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
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
            See how Osto's cloud security helps startups secure their cloud
            environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover className="p-6">
              <h3 className="text-xl font-bold font-montserrat mb-3">
                SaaS Startup
              </h3>
              <p className="text-[#B0B0B0] mb-4">
                A SaaS startup used Osto to secure their AWS environment and
                customer data, achieving SOC 2 compliance in record time.
              </p>
              <div className="bg-[#0A0A12] p-3 rounded-lg">
            <p className="text-xs text-[#B0B0B0]">
              Achieved 100% security coverage across all cloud endpoints and
              reduced incident response time by 90% with automated workflows.
            </p>
            </div>
            </Card>
            <Card hover className="p-6">
              <h3 className="text-xl font-bold font-montserrat mb-3">
                FinTech Platform
              </h3>
              <p className="text-[#B0B0B0] mb-4">
                A financial technology company implemented Osto to protect
                sensitive financial data and meet strict regulatory
                requirements.
              </p>
              <div className="bg-[#0A0A12] p-3 rounded-lg">
                <p className="text-xs text-[#B0B0B0]">
                    All endpoints secured, zero downtime in the last year, and 24/7 automated
                    threat detection.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Compliance Reports Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Compliance Reporting
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Generate comprehensive compliance reports for audits and security
            reviews.
          </p>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] rounded-lg blur opacity-30"></div>
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop" alt="Cloud compliance dashboard" className="relative rounded-lg w-full shadow-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-[#13131f] p-4 rounded-lg text-center">
              <h4 className="font-montserrat font-semibold text-sm mb-1">
                SOC 2
              </h4>
              <div className="w-full bg-[#0A0A12] rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] h-2 rounded-full" style={{
                width: '92%'
              }}></div>
              </div>
              <p className="text-xs text-[#B0B0B0]">92% Compliant</p>
            </div>
            <div className="bg-[#13131f] p-4 rounded-lg text-center">
              <h4 className="font-montserrat font-semibold text-sm mb-1">
                GDPR
              </h4>
              <div className="w-full bg-[#0A0A12] rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] h-2 rounded-full" style={{
                width: '88%'
              }}></div>
              </div>
              <p className="text-xs text-[#B0B0B0]">88% Compliant</p>
            </div>
            <div className="bg-[#13131f] p-4 rounded-lg text-center">
              <h4 className="font-montserrat font-semibold text-sm mb-1">
                ISO 27001
              </h4>
              <div className="w-full bg-[#0A0A12] rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] h-2 rounded-full" style={{
                width: '95%'
              }}></div>
              </div>
              <p className="text-xs text-[#B0B0B0]">95% Compliant</p>
            </div>
            <div className="bg-[#13131f] p-4 rounded-lg text-center">
              <h4 className="font-montserrat font-semibold text-sm mb-1">
                HIPAA
              </h4>
              <div className="w-full bg-[#0A0A12] rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] h-2 rounded-full" style={{
                width: '90%'
              }}></div>
              </div>
              <p className="text-xs text-[#B0B0B0]">90% Compliant</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>;
};
export default CloudSecurity;