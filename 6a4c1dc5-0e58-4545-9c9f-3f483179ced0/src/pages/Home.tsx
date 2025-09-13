import React from 'react';
import { Hero } from '../components/ui/Hero';
import { FeatureCard, SolutionCard } from '../components/ui/Card';
import { CTABanner } from '../components/ui/CTABanner';
import { Link } from 'react-router-dom';
import { ShieldIcon, ClockIcon, BrainIcon, ShieldCheckIcon, FileCheckIcon, NetworkIcon, CloudIcon, ClipboardCheckIcon, ScanIcon, BotIcon, UserPlus2Icon, SettingsIcon, RocketIcon } from 'lucide-react';
const Home: React.FC = () => {
  return <div className="bg-[#0A0A12] text-white">
      {/* Hero Section */}
      <Hero title="Enterprise-Grade Cybersecurity for Startups — Live in 9 Minutes." subtitle="Protect your endpoints, networks, and cloud with AI-powered defense built for speed, scale, and compliance." primaryButtonText="Get Started" secondaryButtonText="Request Demo" image="https://images.unsplash.com/photo-1581092160607-cea11730eb71?q=80&w=1000&auto=format&fit=crop" imageAlt="Cybersecurity dashboard visualization" />
      {/* Value Proposition Section */}
      <section className="py-16 bg-[#0A0A12]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">
            Why Choose{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#29A8FF] to-[#6C63FF]">
              Osto.one
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<ClockIcon size={24} />} title="Fast Deployment" description="Go live in just 9 minutes, not weeks. Quick setup with minimal configuration required." />
            <FeatureCard icon={<BrainIcon size={24} />} title="AI-Powered Security" description="Detect and respond in real-time with automation and machine learning technology." />
            <FeatureCard icon={<ShieldCheckIcon size={24} />} title="Complete Protection" description="Endpoint, Network, and Cloud security in one unified platform." />
            <FeatureCard icon={<FileCheckIcon size={24} />} title="Compliance Ready" description="Automated questionnaire & audit support for all major compliance frameworks." />
          </div>
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="py-16 bg-[#0A0A12]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Trusted by Growing Startups
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Join hundreds of innovative startups that trust Osto.one for their
            cybersecurity needs.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Client logo" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Slack_icon.svg" alt="Client logo" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Client logo" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="Client logo" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" alt="Client logo" className="h-6 md:h-8" />
          </div>
          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-[#13131f] rounded-lg">
                <span className="text-3xl font-bold text-[#29A8FF]">500+</span>
                <span className="text-[#B0B0B0] text-sm">
                  Startups Protected
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#13131f] rounded-lg">
                <span className="text-3xl font-bold text-[#29A8FF]">99.9%</span>
                <span className="text-[#B0B0B0] text-sm">Uptime</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#13131f] rounded-lg">
                <span className="text-3xl font-bold text-[#29A8FF]">24/7</span>
                <span className="text-[#B0B0B0] text-sm">Support</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#13131f] rounded-lg">
                <span className="text-3xl font-bold text-[#29A8FF]">5M+</span>
                <span className="text-[#B0B0B0] text-sm">Threats Blocked</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Preview Section */}
      <section className="py-16 bg-[#0A0A12]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Comprehensive Security Solutions
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Our platform provides end-to-end protection across your entire
            digital infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SolutionCard icon={<ShieldIcon size={24} />} title="Endpoint Security" description="Protect every device with next-gen antimalware, device control, and data loss prevention." linkUrl="/endpoint-security" />
            <SolutionCard icon={<NetworkIcon size={24} />} title="Network Security" description="Monitor and defend your network with Zero Trust access, real-time traffic analysis, and web filtering." linkUrl="/network-security" />
            <SolutionCard icon={<CloudIcon size={24} />} title="Cloud Security" description="Safeguard apps, APIs, and cloud infrastructure with AI-driven posture management and vulnerability scans." linkUrl="/cloud-security" />
            <SolutionCard icon={<ClipboardCheckIcon size={24} />} title="Compliance Support" description="Automate security questionnaires and meet standards like SOC2, GDPR, and ISO without stress." linkUrl="/compliance-vapt" />
            <SolutionCard icon={<ScanIcon size={24} />} title="VAPT-as-a-Service" description="Run on-demand Vulnerability Assessment & Penetration Testing to uncover and fix risks fast." linkUrl="/compliance-vapt" />
            <SolutionCard icon={<BotIcon size={24} />} title="AI-Powered Automation" description="Leverage machine learning for smarter, faster, and automated threat detection and response." linkUrl="/" />
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-[#0A0A12]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            From Signup to Security — in 3 Steps
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Get enterprise-grade protection up and running in just minutes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative flex flex-col items-center text-center p-6">
              <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#29A8FF] to-transparent md:w-1 md:h-full md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 md:bg-gradient-to-b"></div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] flex items-center justify-center mb-6">
                <UserPlus2Icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3">
                Step 1: Sign Up
              </h3>
              <p className="text-[#B0B0B0]">
                Create your account and provide basic information about your
                organization.
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center p-6">
              <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#29A8FF] to-transparent md:w-1 md:h-full md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 md:bg-gradient-to-b"></div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] flex items-center justify-center mb-6">
                <SettingsIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3">
                Step 2: Configure
              </h3>
              <p className="text-[#B0B0B0]">
                Select your protection modules and customize settings to match
                your needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] flex items-center justify-center mb-6">
                <RocketIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3">
                Step 3: Go Live
              </h3>
              <p className="text-[#B0B0B0]">
                Deploy your security solution and enjoy full protection in just
                9 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <CTABanner title="Ready to secure your startup in minutes?" subtitle="Join hundreds of startups already protected by Osto.one." buttonText="Start Free Trial" buttonLink="/demo" />
    </div>;
};
export default Home;