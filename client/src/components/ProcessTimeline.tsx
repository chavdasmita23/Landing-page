import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle, ArrowRight, Clock, Clipboard, AlertCircle } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Initial Assessment",
    description: "Evaluation of eligibility across immigration programs.",
    details: "Our experts conduct a comprehensive analysis of your profile to determine your eligibility for various Canadian immigration pathways, including Express Entry, Provincial Nominee Programs, and Family Sponsorship.",
    timeframe: "1-2 weeks",
    requirements: ["Education credentials", "Language test results", "Work experience details", "Personal information"],
    keyTips: ["Complete all required forms accurately", "Prepare digital copies of all documents", "Be honest and thorough in your information"],
    icon: <Clipboard className="h-8 w-8" />,
    color: "#2563EB"
  },
  {
    number: 2,
    title: "Express Entry Profile Creation",
    description: "Strategic planning to maximize CRS scores.",
    details: "We create and optimize your Express Entry profile to achieve the highest possible Comprehensive Ranking System (CRS) score, significantly increasing your chances of receiving an Invitation to Apply.",
    timeframe: "2-3 weeks",
    requirements: ["Educational Credential Assessment (ECA)", "Language test results meeting minimum requirements", "Detailed employment history", "Police clearance certificates"],
    keyTips: ["Focus on improving language scores", "Document all relevant work experience", "Consider provincial nomination options", "Ensure accurate NOC job code selection"],
    icon: <TrendingUp className="h-8 w-8" />,
    color: "#E31937"
  },
  {
    number: 3,
    title: "Provincial Nomination (if applicable)",
    description: "Support for PNP application processes.",
    details: "For those eligible, we guide you through the Provincial Nominee Program application process, which can provide an additional 600 CRS points in Express Entry or serve as a direct pathway to permanent residency.",
    timeframe: "3-6 months",
    requirements: ["Provincial application forms", "Connection to province (job offer, education, etc.)", "Proof of settlement funds", "Additional province-specific documents"],
    keyTips: ["Research provincial programs thoroughly", "Understand the commitment to reside in the nominating province", "Prepare for potential interviews", "Meet all province-specific requirements"],
    icon: <Map className="h-8 w-8" />,
    color: "#2563EB"
  },
  {
    number: 4,
    title: "Invitation to Apply",
    description: "Thorough preparation after receiving ITA.",
    details: "Once you receive an Invitation to Apply (ITA), we help you prepare and organize all necessary documentation within the 60-day submission window to ensure a complete and accurate permanent residence application.",
    timeframe: "60 days from ITA",
    requirements: ["Medical examination", "Biometrics", "Updated police certificates", "Proof of funds"],
    keyTips: ["Schedule medical exams promptly", "Double-check document translations", "Ensure all forms are signed and dated", "Keep records of all communications"],
    icon: <Mail className="h-8 w-8" />,
    color: "#E31937"
  },
  {
    number: 5,
    title: "PR Application Submission",
    description: "Complete documentation and submission to IRCC.",
    details: "We carefully review and submit your permanent residence application to Immigration, Refugees and Citizenship Canada (IRCC), ensuring all documents meet the required standards and formats.",
    timeframe: "Processing time: 6-12 months",
    requirements: ["Complete application package", "Application fees payment", "Supporting documents as requested", "Additional information if requested"],
    keyTips: ["Respond promptly to any requests for additional information", "Keep your contact information updated", "Track application status regularly", "Maintain valid status in current country of residence"],
    icon: <Send className="h-8 w-8" />,
    color: "#2563EB"
  },
  {
    number: 6,
    title: "Visa Grant",
    description: "Final verification and follow-up.",
    details: "We guide you through the final steps after approval, including obtaining your Confirmation of Permanent Residence (COPR) and permanent resident visa, and preparing for your landing in Canada.",
    timeframe: "1-3 months after approval",
    requirements: ["Passport for visa stamping", "Photos meeting specifications", "Final declarations", "Landing plans"],
    keyTips: ["Ensure passport validity (at least 6 months)", "Plan your first entry to Canada", "Research settlement services", "Prepare for integration into Canadian society"],
    icon: <CheckCircle className="h-8 w-8" />,
    color: "#10B981"
  }
];

import { Map, Mail, Send, TrendingUp } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  const handleStepClick = (index: number) => {
    setIsAnimating(true);
    setActiveStep(activeStep === index ? null : index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#E31937]/10 px-3 py-1 rounded-full mb-2">
            <span className="text-[#E31937] font-semibold text-sm tracking-wider uppercase">YOUR JOURNEY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">The Canadian PR Process</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Our streamlined approach guides you through each step of your immigration journey, ensuring a smooth path to your Canadian permanent residency.
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-6xl mx-auto relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-[#2563EB] via-[#E31937] to-[#10B981] top-28 w-[90%] mx-auto rounded-full shadow-sm"></div>
          
          {/* Timeline Steps */}
          <div className="grid grid-cols-6 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div 
                    className={`z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 transition-all duration-500 ${
                      activeStep === index ? 'scale-125 shadow-lg ring-4 ring-white' : 'hover:scale-110 transform hover:rotate-3'
                    } cursor-pointer relative overflow-hidden`}
                    style={{ backgroundColor: step.color }}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative z-10">{step.number}</span>
                  </div>
                  <h3 className="text-center font-bold text-gray-800 text-lg mb-1">{step.title}</h3>
                  <p className="text-center text-sm text-gray-600">{step.description}</p>
                  
                  {/* Expandable Details */}
                  <div 
                    className={`mt-4 bg-white rounded-lg shadow-lg p-6 transition-all duration-500 overflow-hidden ${
                      activeStep === index ? 'opacity-100 max-h-[500px] transform scale-100' : 'opacity-0 max-h-0 pointer-events-none transform scale-95'
                    }`}
                  >
                    <p className="text-gray-700 mb-4">{step.details}</p>
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Timeframe: {step.timeframe}</span>
                    </div>
                    <div className="mb-5">
                      <div className="flex items-center mb-3">
                        <div className="bg-gray-100 p-1 rounded-md mr-2">
                          <Clipboard className="h-4 w-4 text-gray-700" />
                        </div>
                        <h4 className="font-semibold text-gray-700">Key Requirements</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {step.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            <div 
                              className="h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 shadow-sm"
                              style={{ backgroundColor: step.color }}
                            >
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="bg-[#E31937]/10 p-1 rounded-md mr-2">
                          <AlertCircle className="h-4 w-4 text-[#E31937]" />
                        </div>
                        <h4 className="font-semibold text-gray-700">Expert Tips</h4>
                      </div>
                      <div className="border border-gray-100 p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm">
                        <ul className="divide-y divide-gray-100">
                          {step.keyTips.map((tip, idx) => (
                            <li key={idx} className="py-2 flex items-start group">
                              <div className="bg-white p-1 rounded-full shadow-sm mr-2 flex-shrink-0 mt-0.5 group-hover:bg-[#E31937] group-hover:text-white transition-colors duration-300">
                                <AlertCircle className="h-3 w-3 text-[#E31937] group-hover:text-white transition-colors duration-300" />
                              </div>
                              <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden max-w-lg mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="flex flex-col items-center mr-6">
                <div 
                  className={`text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md transition-all duration-300 ${
                    activeStep === index ? 'scale-110 ring-2 ring-white' : ''
                  } relative overflow-hidden`}
                  style={{ backgroundColor: step.color }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                  <span className="relative z-10">{step.number}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div 
                    className={`h-full w-0.5 bg-gray-200 mt-2 flex-grow transition-all duration-500 ${
                      activeStep === index ? 'opacity-100' : 'opacity-70'
                    }`}
                    style={{
                      background: `linear-gradient(to bottom, ${step.color}, #e5e7eb)`
                    }}
                  ></div>
                )}
              </div>
              <div className="flex-grow">
                <Card 
                  className={`bg-white hover:shadow-lg transition-all duration-300 cursor-pointer ${
                    activeStep === index ? 'ring-2 shadow-xl scale-[1.03]' : 'hover:scale-[1.02]'
                  } rounded-xl overflow-hidden`}
                  style={{ 
                    borderColor: activeStep === index ? step.color : 'transparent',
                    borderWidth: activeStep === index ? '2px' : '0px'
                  }}
                  onClick={() => handleStepClick(index)}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ${
                        activeStep === index ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700 mb-4">{step.details}</p>
                      
                      <div className="flex items-center mb-3">
                        <Clock className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Timeframe: {step.timeframe}</span>
                      </div>
                      
                      <div className="mb-5">
                        <div className="flex items-center mb-3">
                          <div className="bg-gray-100 p-1 rounded-md mr-2">
                            <Clipboard className="h-4 w-4 text-gray-700" />
                          </div>
                          <h4 className="font-semibold text-gray-700">Key Requirements</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {step.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                              <div 
                                className="h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 shadow-sm"
                                style={{ backgroundColor: step.color }}
                              >
                                <CheckCircle className="h-3 w-3 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-3">
                          <div className="bg-[#E31937]/10 p-1 rounded-md mr-2">
                            <AlertCircle className="h-4 w-4 text-[#E31937]" />
                          </div>
                          <h4 className="font-semibold text-gray-700">Expert Tips</h4>
                        </div>
                        <div className="border border-gray-100 p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm">
                          <ul className="divide-y divide-gray-100">
                            {step.keyTips.map((tip, idx) => (
                              <li key={idx} className="py-2 flex items-start group">
                                <div className="bg-white p-1 rounded-full shadow-sm mr-2 flex-shrink-0 mt-0.5 group-hover:bg-[#E31937] group-hover:text-white transition-colors duration-300">
                                  <AlertCircle className="h-3 w-3 text-[#E31937] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline Legend */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Why Our Clients Trust Our Process</h3>
            <div className="w-16 h-1 bg-[#2563EB] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-[#2563EB] text-white p-4 rounded-full mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Average Timeline</h3>
              <p className="text-gray-600">8-12 months for Express Entry</p>
              <div className="w-0 group-hover:w-full h-0.5 bg-[#2563EB] mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-[#E31937] text-white p-4 rounded-full mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Clipboard className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Process Complexity</h3>
              <p className="text-gray-600">We handle all paperwork for you</p>
              <div className="w-0 group-hover:w-full h-0.5 bg-[#E31937] mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-[#10B981] text-white p-4 rounded-full mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Success Rate</h3>
              <p className="text-gray-600">97% first-time approval rate</p>
              <div className="w-0 group-hover:w-full h-0.5 bg-[#10B981] mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl mx-auto border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Begin Your Canadian Journey?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of immigration specialists is ready to guide you through every step of the process, ensuring your best chance at success.
            </p>
            <Button
              onClick={scrollToAssessment}
              className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-6 font-bold text-lg shadow-lg group transition-all duration-300 hover:translate-y-[-3px] relative overflow-hidden"
            >
              <span className="relative z-10">Start Your PR Journey Today</span>
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
