import React, { useState } from 'react';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircleIcon, ClockIcon, CalendarIcon, FileCheckIcon, LockIcon } from 'lucide-react';
const DemoTrial: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return <div className="bg-[#0A0A12] text-white">
      {/* Hero Section */}
      <Hero title="Try Osto for free — secure your startup today." subtitle="Experience enterprise-grade cybersecurity with a free trial or schedule a personalized demo with our security experts." backgroundPattern={true} />
      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              {!formSubmitted ? <Card className="p-6">
                  <h2 className="text-2xl font-bold font-montserrat mb-6">
                    Get Started
                  </h2>
                  {/* Step Indicator */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between">
                      <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-[#29A8FF]' : 'text-[#B0B0B0]'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep >= 1 ? 'bg-[#29A8FF]/20 border border-[#29A8FF]' : 'bg-[#13131f] border border-gray-800'}`}>
                          1
                        </div>
                        <span className="text-xs">Info</span>
                      </div>
                      <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 2 ? 'bg-[#29A8FF]' : 'bg-gray-800'}`}></div>
                      <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-[#29A8FF]' : 'text-[#B0B0B0]'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep >= 2 ? 'bg-[#29A8FF]/20 border border-[#29A8FF]' : 'bg-[#13131f] border border-gray-800'}`}>
                          2
                        </div>
                        <span className="text-xs">Needs</span>
                      </div>
                      <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 3 ? 'bg-[#29A8FF]' : 'bg-gray-800'}`}></div>
                      <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-[#29A8FF]' : 'text-[#B0B0B0]'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep >= 3 ? 'bg-[#29A8FF]/20 border border-[#29A8FF]' : 'bg-[#13131f] border border-gray-800'}`}>
                          3
                        </div>
                        <span className="text-xs">Schedule</span>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <input type="text" id="name" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent" required />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Work Email
                          </label>
                          <input type="email" id="email" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent" required />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <input type="text" id="company" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent" required />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium mb-2">
                            Job Title
                          </label>
                          <input type="text" id="role" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent" required />
                        </div>
                        <div className="pt-4">
                          <Button onClick={nextStep} fullWidth>
                            Next
                          </Button>
                        </div>
                      </div>}
                    {/* Step 2: Security Needs */}
                    {currentStep === 2 && <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            What are your primary security concerns?
                          </label>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input type="checkbox" id="endpoint" className="mr-2" />
                              <label htmlFor="endpoint" className="text-sm text-[#B0B0B0]">
                                Endpoint Security
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="network" className="mr-2" />
                              <label htmlFor="network" className="text-sm text-[#B0B0B0]">
                                Network Security
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="cloud" className="mr-2" />
                              <label htmlFor="cloud" className="text-sm text-[#B0B0B0]">
                                Cloud Security
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="compliance" className="mr-2" />
                              <label htmlFor="compliance" className="text-sm text-[#B0B0B0]">
                                Compliance & VAPT
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="team-size" className="block text-sm font-medium mb-2">
                            Team Size
                          </label>
                          <select id="team-size" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent">
                            <option>1-10 employees</option>
                            <option>11-50 employees</option>
                            <option>51-200 employees</option>
                            <option>201-500 employees</option>
                            <option>500+ employees</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                            Implementation Timeline
                          </label>
                          <select id="timeline" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent">
                            <option>Immediately</option>
                            <option>Within 1 month</option>
                            <option>Within 3 months</option>
                            <option>Just exploring options</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Additional Information
                          </label>
                          <textarea id="message" rows={3} className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent" placeholder="Tell us about your specific security needs or questions..."></textarea>
                        </div>
                        <div className="flex gap-4 pt-4">
                          <Button variant="outline" onClick={prevStep}>
                            Back
                          </Button>
                          <Button onClick={nextStep} fullWidth>
                            Next
                          </Button>
                        </div>
                      </div>}
                    {/* Step 3: Schedule Demo */}
                    {currentStep === 3 && <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Preferred Contact Method
                          </label>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input type="radio" id="demo" name="contact" className="mr-2" />
                              <label htmlFor="demo" className="text-sm text-[#B0B0B0]">
                                Schedule a Demo
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="trial" name="contact" className="mr-2" />
                              <label htmlFor="trial" className="text-sm text-[#B0B0B0]">
                                Start Free Trial
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="call" name="contact" className="mr-2" />
                              <label htmlFor="call" className="text-sm text-[#B0B0B0]">
                                Request a Call
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium mb-2">
                            Preferred Date
                          </label>
                          <input type="date" id="date" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent" />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium mb-2">
                            Preferred Time
                          </label>
                          <select id="time" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent">
                            <option>9:00 AM - 10:00 AM</option>
                            <option>10:00 AM - 11:00 AM</option>
                            <option>11:00 AM - 12:00 PM</option>
                            <option>1:00 PM - 2:00 PM</option>
                            <option>2:00 PM - 3:00 PM</option>
                            <option>3:00 PM - 4:00 PM</option>
                            <option>4:00 PM - 5:00 PM</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timezone" className="block text-sm font-medium mb-2">
                            Timezone
                          </label>
                          <select id="timezone" className="w-full bg-[#0A0A12] border border-gray-800 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#29A8FF]/50 focus:border-transparent">
                            <option>Pacific Time (PT)</option>
                            <option>Mountain Time (MT)</option>
                            <option>Central Time (CT)</option>
                            <option>Eastern Time (ET)</option>
                            <option>Greenwich Mean Time (GMT)</option>
                            <option>Central European Time (CET)</option>
                          </select>
                        </div>
                        <div className="flex items-center pt-2">
                          <input type="checkbox" id="terms" className="mr-2" required />
                          <label htmlFor="terms" className="text-xs text-[#B0B0B0]">
                            I agree to Osto's{' '}
                            <a href="#" className="text-[#29A8FF]">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-[#29A8FF]">
                              Privacy Policy
                            </a>
                          </label>
                        </div>
                        <div className="flex gap-4 pt-4">
                          <Button variant="outline" onClick={prevStep}>
                            Back
                          </Button>
                          <Button type="submit" fullWidth>
                            Submit Request
                          </Button>
                        </div>
                      </div>}
                  </form>
                </Card> : <Card className="p-6 text-center">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[#29A8FF]/20 flex items-center justify-center mb-6">
                      <CheckCircleIcon size={32} className="text-[#29A8FF]" />
                    </div>
                    <h2 className="text-2xl font-bold font-montserrat mb-4">
                      Thank You!
                    </h2>
                    <p className="text-[#B0B0B0] mb-6 max-w-md mx-auto">
                      Your request has been submitted successfully. One of our
                      security experts will contact you shortly.
                    </p>
                    <Button>Return to Home</Button>
                  </div>
                </Card>}
            </div>
            {/* Right Column - Benefits */}
            <div>
              <h2 className="text-2xl font-bold font-montserrat mb-6">
                Why Choose Osto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                    <ClockIcon size={24} className="text-[#29A8FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">
                      Fast Deployment
                    </h3>
                    <p className="text-[#B0B0B0]">
                      Get up and running in just 9 minutes with our streamlined
                      onboarding process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                    <LockIcon size={24} className="text-[#29A8FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-[#B0B0B0]">
                      Access the same level of protection used by Fortune 500
                      companies, tailored for startups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                    <CalendarIcon size={24} className="text-[#29A8FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">
                      No Long-Term Contracts
                    </h3>
                    <p className="text-[#B0B0B0]">
                      Flexible monthly subscriptions that grow with your
                      business, with no lock-in periods.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-[#29A8FF]/20 to-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-4">
                    <FileCheckIcon size={24} className="text-[#29A8FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">
                      Compliance Ready
                    </h3>
                    <p className="text-[#B0B0B0]">
                      Meet security requirements for SOC 2, GDPR, ISO 27001, and
                      other frameworks with ease.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-[#13131f] p-6 rounded-lg border-l-4 border-[#29A8FF]">
                <h3 className="font-montserrat font-bold mb-2">
                  Free Trial Includes:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      14 days of full platform access
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Security assessment report
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Personalized onboarding session
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 text-[#29A8FF]">•</div>
                    <p className="text-[#B0B0B0] text-sm">
                      Unlimited support during trial period
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Security Assessment Quiz */}
      <section className="py-16 bg-[#0A0A12]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-6">
            Quick Security Assessment
          </h2>
          <p className="text-[#B0B0B0] text-center mb-12 max-w-2xl mx-auto">
            Answer a few questions to get an instant evaluation of your current
            security posture.
          </p>
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-bold font-montserrat mb-6">
                Security Quiz
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-3">
                    1. Do you currently have endpoint protection on all company
                    devices?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="ep-yes" name="endpoint" className="mr-2" />
                      <label htmlFor="ep-yes" className="text-sm text-[#B0B0B0]">
                        Yes, on all devices
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="ep-some" name="endpoint" className="mr-2" />
                      <label htmlFor="ep-some" className="text-sm text-[#B0B0B0]">
                        Yes, but only on some devices
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="ep-no" name="endpoint" className="mr-2" />
                      <label htmlFor="ep-no" className="text-sm text-[#B0B0B0]">
                        No
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="ep-unsure" name="endpoint" className="mr-2" />
                      <label htmlFor="ep-unsure" className="text-sm text-[#B0B0B0]">
                        Not sure
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">
                    2. How often do you perform security updates and patches?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="patch-auto" name="patches" className="mr-2" />
                      <label htmlFor="patch-auto" className="text-sm text-[#B0B0B0]">
                        Automatically as they're released
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="patch-monthly" name="patches" className="mr-2" />
                      <label htmlFor="patch-monthly" className="text-sm text-[#B0B0B0]">
                        Monthly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="patch-quarterly" name="patches" className="mr-2" />
                      <label htmlFor="patch-quarterly" className="text-sm text-[#B0B0B0]">
                        Quarterly or less frequently
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="patch-never" name="patches" className="mr-2" />
                      <label htmlFor="patch-never" className="text-sm text-[#B0B0B0]">
                        We don't have a regular schedule
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">
                    3. Do you have multi-factor authentication enabled?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="mfa-all" name="mfa" className="mr-2" />
                      <label htmlFor="mfa-all" className="text-sm text-[#B0B0B0]">
                        Yes, for all systems and users
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="mfa-some" name="mfa" className="mr-2" />
                      <label htmlFor="mfa-some" className="text-sm text-[#B0B0B0]">
                        Yes, but only for critical systems
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="mfa-no" name="mfa" className="mr-2" />
                      <label htmlFor="mfa-no" className="text-sm text-[#B0B0B0]">
                        No
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="mfa-unsure" name="mfa" className="mr-2" />
                      <label htmlFor="mfa-unsure" className="text-sm text-[#B0B0B0]">
                        Not sure
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button fullWidth>Get Your Security Score</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default DemoTrial;