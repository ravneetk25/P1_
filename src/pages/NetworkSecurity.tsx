import React from 'react';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';
//import { CTABanner } from '../components/ui/CTABanner';
import { NetworkIcon, ShieldCheckIcon, LineChartIcon, ActivityIcon, EyeIcon } from 'lucide-react';
const NetworkSecurity: React.FC = () => {
  return <div className="bg-[#0A0A12] text-white">
      {/* Hero Section */}
      <Hero title="Zero Trust. Total Visibility." subtitle="Secure your network infrastructure with advanced monitoring, Zero Trust access controls, and real-time threat detection." primaryButtonText="Get Started" image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop" imageAlt="Network security visualization" />
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">
            Comprehensive Network Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <ShieldCheckIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Zero Trust Network Access
                  </h3>
                  <p className="text-[#B0B0B0]">
                    Implement least-privilege access controls that verify every
                    user and device before granting access to your network
                    resources.
                  </p>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <EyeIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Web Filtering
                  </h3>
                  <p className="text-[#B0B0B0]">
                    Block access to malicious websites and content categories
                    that pose security risks to your organization.
                  </p>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <LineChartIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Traffic Analysis
                  </h3>
                  <p className="text-[#B0B0B0]">
                    Monitor network traffic patterns to detect anomalies and
                    potential security threats in real-time.
                  </p>
                </div>
              </div>
            </Card>
            <Card hover className="p-6">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                  <ActivityIcon size={24} className="text-[#29A8FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat mb-2">
                    Anomaly Detection
                  </h3>
                  <p className="text-[#B0B0B0]">
                    Leverage AI to automatically identify unusual patterns that
                    may indicate a breach or attack in progress.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Traffic Analysis Section */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Real-Time Traffic Monitoring
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Visualize and analyze your network traffic to quickly identify and
            respond to threats.
          </p>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] rounded-lg blur opacity-30"></div>
            <img src="/images/traffic.jpeg" alt="Network traffic analysis dashboard" className="relative rounded-lg w-full shadow-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#13131f] p-6 rounded-lg">
              <h4 className="font-montserrat font-bold mb-2">
                Traffic Patterns
              </h4>
              <p className="text-[#B0B0B0] text-sm">
                Identify unusual traffic spikes or communication with suspicious
                IP addresses.
              </p>
            </div>
            <div className="bg-[#13131f] p-6 rounded-lg">
              <h4 className="font-montserrat font-bold mb-2">
                Threat Intelligence
              </h4>
              <p className="text-[#B0B0B0] text-sm">
                Compare network activity against known threat signatures and
                malicious behaviors.
              </p>
            </div>
            <div className="bg-[#13131f] p-6 rounded-lg">
              <h4 className="font-montserrat font-bold mb-2">
                Automated Responses
              </h4>
              <p className="text-[#B0B0B0] text-sm">
                Configure automatic actions when suspicious activity is detected
                to contain threats.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Network Diagram */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Interactive Network Diagram
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Visualize your network topology and security status in real-time.
          </p>
          <div className="bg-[#13131f] p-6 rounded-lg relative mx-auto max-w-4xl">
            <div className="aspect-video">
              <div className="w-full h-full bg-[#0A0A12] rounded-lg p-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <NetworkIcon size={64} className="mx-auto mb-4 text-[#29A8FF]/50" />
                    <p className="text-[#B0B0B0]">
                      Interactive network diagram visualization
                    </p>
                    <p className="text-[#B0B0B0] text-sm mt-2">
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#0A0A12] p-3 rounded-lg text-center">
                <p className="text-sm font-bold">24</p>
                <p className="text-xs text-[#B0B0B0]">Active Devices</p>
              </div>
              <div className="bg-[#0A0A12] p-3 rounded-lg text-center">
                <p className="text-sm font-bold">3</p>
                <p className="text-xs text-[#B0B0B0]">Security Alerts</p>
              </div>
              <div className="bg-[#0A0A12] p-3 rounded-lg text-center">
                <p className="text-sm font-bold">98%</p>
                <p className="text-xs text-[#B0B0B0]">Network Health</p>
              </div>
              <div className="bg-[#0A0A12] p-3 rounded-lg text-center">
                <p className="text-sm font-bold">1.2 GB/s</p>
                <p className="text-xs text-[#B0B0B0]">Traffic Volume</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Key Benefits
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Why Osto's network security solution is essential for your
            business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Breach Prevention
                </h3>
                <p className="text-[#B0B0B0]">
                  Stop network intrusions before they can compromise your
                  sensitive data or systems.
                </p>
              </div>
            </Card>
            <Card hover>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-4">
                  <EyeIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Complete Visibility
                </h3>
                <p className="text-[#B0B0B0]">
                  Gain full transparency into all network activity, including
                  encrypted traffic.
                </p>
              </div>
            </Card>
            <Card hover>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF]/20 to-[#6C63FF]/20 flex items-center justify-center mx-auto mb-4">
                  <ActivityIcon size={32} className="text-[#29A8FF]" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Rapid Response
                </h3>
                <p className="text-[#B0B0B0]">
                  Automatically detect and respond to threats in real-time,
                  minimizing potential damage.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
    </div>;
};
export default NetworkSecurity;