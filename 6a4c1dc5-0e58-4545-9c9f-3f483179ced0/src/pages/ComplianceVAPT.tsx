import React from 'react';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';
import { CTABanner } from '../components/ui/CTABanner';
import { ClipboardCheckIcon, FileCheckIcon, ScanIcon, ShieldCheckIcon, FileIcon, CheckCircleIcon } from 'lucide-react';
const ComplianceVAPT: React.FC = () => {
  return <div className="bg-[#0A0A12] text-white">
      {/* Hero Section */}
      <Hero title="Simplify compliance. Strengthen resilience." subtitle="Automate security questionnaires, streamline compliance processes, and identify vulnerabilities before attackers do." primaryButtonText="Get Started" image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop" imageAlt="Compliance and security documentation" />
      {/* Security Questionnaire Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Automated Security Questionnaires
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Save hours of manual work with AI-powered response generation for
            security questionnaires.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card gradient className="p-6 mb-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                    <FileCheckIcon size={24} className="text-[#29A8FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">
                      Intelligent Response Generation
                    </h3>
                    <p className="text-[#B0B0B0]">
                      Our AI analyzes your security posture and automatically
                      generates accurate responses to security questionnaires.
                    </p>
                  </div>
                </div>
              </Card>
              <Card gradient className="p-6 mb-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                    <ClipboardCheckIcon size={24} className="text-[#29A8FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">
                      Template Library
                    </h3>
                    <p className="text-[#B0B0B0]">
                      Access a comprehensive library of pre-filled responses for
                      common security frameworks and questionnaires.
                    </p>
                  </div>
                </div>
              </Card>
              <Card gradient className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircleIcon size={24} className="text-[#29A8FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">
                      Evidence Collection
                    </h3>
                    <p className="text-[#B0B0B0]">
                      Automatically gather and organize supporting documentation
                      and evidence for compliance audits.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="bg-[#13131f] p-6 rounded-lg">
              <h3 className="text-lg font-bold font-montserrat mb-4">
                Security Questionnaire Preview
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2">
                    Q: Does your organization implement multi-factor
                    authentication?
                  </p>
                  <div className="bg-[#0A0A12] p-3 rounded border border-gray-800">
                    <p className="text-[#B0B0B0] text-sm">
                      <span className="text-[#29A8FF] font-semibold">
                        Auto-generated response:
                      </span>{' '}
                      Yes, Osto.one implements multi-factor authentication for
                      all user accounts across all systems and applications that
                      contain sensitive data. We support TOTP, SMS, and hardware
                      security keys.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">
                    Q: How often do you perform vulnerability scanning?
                  </p>
                  <div className="bg-[#0A0A12] p-3 rounded border border-gray-800">
                    <p className="text-[#B0B0B0] text-sm">
                      <span className="text-[#29A8FF] font-semibold">
                        Auto-generated response:
                      </span>{' '}
                      Osto.one performs automated vulnerability scanning on a
                      daily basis for critical systems and weekly for all other
                      systems. Full penetration tests are conducted quarterly by
                      an independent third party.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">
                    Q: Describe your data encryption policies.
                  </p>
                  <div className="bg-[#0A0A12] p-3 rounded border border-gray-800">
                    <p className="text-[#B0B0B0] text-sm">
                      <span className="text-[#29A8FF] font-semibold">
                        Auto-generated response:
                      </span>{' '}
                      All data is encrypted both in transit (TLS 1.3) and at
                      rest (AES-256). Encryption keys are managed through a
                      secure key management system with regular rotation and
                      strict access controls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VAPT Services Section */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            VAPT Services
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Comprehensive Vulnerability Assessment and Penetration Testing to
            identify and fix security weaknesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <ScanIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Vulnerability Assessment
                  </h3>
                  <p className="text-[#B0B0B0] mb-4">
                    Systematic review of security weaknesses in your systems and
                    applications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Automated and manual testing methodologies
                      </p>
                    </li>
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Comprehensive vulnerability identification
                      </p>
                    </li>
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Risk-based prioritization
                      </p>
                    </li>
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Detailed remediation guidance
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <ShieldCheckIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Penetration Testing
                  </h3>
                  <p className="text-[#B0B0B0] mb-4">
                    Simulated attacks to identify exploitable vulnerabilities in
                    your systems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Web application penetration testing
                      </p>
                    </li>
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Network infrastructure testing
                      </p>
                    </li>
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Cloud configuration assessment
                      </p>
                    </li>
                    <li className="flex items-start text-sm">
                      <div className="mr-2 mt-1 text-[#29A8FF]">•</div>
                      <p className="text-[#B0B0B0]">
                        Social engineering simulations
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-12">
            <div className="bg-[#13131f] p-6 rounded-lg">
              <h3 className="text-lg font-bold font-montserrat mb-4">
                VAPT Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[#0A0A12] p-4 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#29A8FF] font-bold">1</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-sm mb-2">
                    Scoping
                  </h4>
                  <p className="text-xs text-[#B0B0B0]">
                    Define testing boundaries and objectives
                  </p>
                </div>
                <div className="bg-[#0A0A12] p-4 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#29A8FF] font-bold">2</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-sm mb-2">
                    Testing
                  </h4>
                  <p className="text-xs text-[#B0B0B0]">
                    Execute comprehensive security assessments
                  </p>
                </div>
                <div className="bg-[#0A0A12] p-4 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#29A8FF] font-bold">3</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-sm mb-2">
                    Analysis
                  </h4>
                  <p className="text-xs text-[#B0B0B0]">
                    Evaluate findings and prioritize risks
                  </p>
                </div>
                <div className="bg-[#0A0A12] p-4 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#29A8FF] font-bold">4</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-sm mb-2">
                    Remediation
                  </h4>
                  <p className="text-xs text-[#B0B0B0]">
                    Implement fixes and verify solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Compliance Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Compliance Support
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Meet regulatory requirements and industry standards with our
            comprehensive compliance solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover className="p-6">
              <div className="flex flex-col h-full">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <FileIcon size={24} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">
                  SOC 2
                </h3>
                <p className="text-[#B0B0B0] text-sm flex-grow">
                  Streamline your SOC 2 compliance journey with automated
                  controls, evidence collection, and gap analysis.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#B0B0B0]">
                      Implementation time
                    </span>
                    <span className="text-xs font-semibold">4-6 weeks</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex flex-col h-full">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <FileIcon size={24} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">GDPR</h3>
                <p className="text-[#B0B0B0] text-sm flex-grow">
                  Ensure GDPR compliance with data mapping, privacy controls,
                  and automated data subject request handling.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#B0B0B0]">
                      Implementation time
                    </span>
                    <span className="text-xs font-semibold">3-5 weeks</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex flex-col h-full">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <FileIcon size={24} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">
                  ISO 27001
                </h3>
                <p className="text-[#B0B0B0] text-sm flex-grow">
                  Achieve ISO 27001 certification with our comprehensive
                  information security management system framework.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#B0B0B0]">
                      Implementation time
                    </span>
                    <span className="text-xs font-semibold">8-12 weeks</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Interactive Form Preview */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Start Your Compliance Journey
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Complete our quick assessment to see which compliance frameworks
            apply to your business.
          </p>
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-bold font-montserrat mb-6">
                Compliance Assessment
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What type of data does your organization process?
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="pii" className="mr-2" />
                      <label htmlFor="pii" className="text-sm text-[#B0B0B0]">
                        Personal Identifiable Information (PII)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="payment" className="mr-2" />
                      <label htmlFor="payment" className="text-sm text-[#B0B0B0]">
                        Payment Card Data
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="health" className="mr-2" />
                      <label htmlFor="health" className="text-sm text-[#B0B0B0]">
                        Health Information
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="intellectual" className="mr-2" />
                      <label htmlFor="intellectual" className="text-sm text-[#B0B0B0]">
                        Intellectual Property
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Where are your customers located?
                  </label>
                  <select className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm">
                    <option>United States</option>
                    <option>European Union</option>
                    <option>United Kingdom</option>
                    <option>Asia Pacific</option>
                    <option>Global</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What is your primary industry?
                  </label>
                  <select className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm">
                    <option>Technology / SaaS</option>
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                    <option>E-commerce</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What compliance frameworks are you interested in?
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="soc2" className="mr-2" />
                      <label htmlFor="soc2" className="text-sm text-[#B0B0B0]">
                        SOC 2
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="gdpr" className="mr-2" />
                      <label htmlFor="gdpr" className="text-sm text-[#B0B0B0]">
                        GDPR
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="iso" className="mr-2" />
                      <label htmlFor="iso" className="text-sm text-[#B0B0B0]">
                        ISO 27001
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="hipaa" className="mr-2" />
                      <label htmlFor="hipaa" className="text-sm text-[#B0B0B0]">
                        HIPAA
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="pci" className="mr-2" />
                      <label htmlFor="pci" className="text-sm text-[#B0B0B0]">
                        PCI DSS
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-white font-montserrat font-semibold py-2 px-4 rounded-md hover:shadow-[0_0_15px_rgba(41,168,255,0.5)] transition-all duration-300">
                    Get Compliance Recommendations
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <CTABanner title="Ready to simplify your compliance journey?" subtitle="Get started with Osto.one's compliance and VAPT solutions today." buttonText="Request Demo" buttonLink="/demo" />
    </div>;
};
export default ComplianceVAPT;