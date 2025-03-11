import { useState, useRef, useEffect } from "react";
import { 
  Clipboard, 
  FileCheck, 
  Award, 
  Mail, 
  FileText, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

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
    setActiveStep(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    // Automatically scroll to the active step when it changes
    if (timelineRef.current) {
      const activeElement = document.getElementById(`step-${activeStep}`);
      if (activeElement) {
        const containerWidth = timelineRef.current.clientWidth;
        const scrollLeft = activeElement.offsetLeft - (containerWidth / 2) + (activeElement.clientWidth / 2);
        timelineRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeStep]);

  const processSteps = [
    {
      number: 1,
      title: "Initial Assessment",
      description: "Comprehensive profile analysis to determine your best pathway.",
      details: [
        "Comprehensive profile analysis",
        "CRS score calculation",
        "Program eligibility verification"
      ],
      icon: <Clipboard className="h-8 w-8" />,
      color: "#2563EB",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1174&auto=format&fit=crop"
    },
    {
      number: 2,
      title: "Express Entry Profile Creation",
      description: "Strategic planning to maximize your CRS scores in the Express Entry pool.",
      details: [
        "Profile optimization strategies",
        "Document preparation",
        "Accurate profile submission"
      ],
      icon: <FileCheck className="h-8 w-8" />,
      color: "#10B981",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop"
    },
    {
      number: 3,
      title: "Provincial Nomination",
      description: "Support for PNP application processes to secure additional CRS points.",
      details: [
        "PNP stream identification",
        "Provincial application preparation",
        "Nomination certificate processing"
      ],
      icon: <Award className="h-8 w-8" />,
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1074&auto=format&fit=crop"
    },
    {
      number: 4,
      title: "Invitation to Apply",
      description: "Thorough preparation after receiving ITA for permanent residency.",
      details: [
        "ITA receipt and verification",
        "Application planning",
        "60-day response preparation"
      ],
      icon: <Mail className="h-8 w-8" />,
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?q=80&w=1170&auto=format&fit=crop"
    },
    {
      number: 5,
      title: "PR Application Submission",
      description: "Complete documentation and submission to IRCC for processing.",
      details: [
        "Final document compilation",
        "Application fee payment",
        "Accurate form submission"
      ],
      icon: <FileText className="h-8 w-8" />,
      color: "#EC4899",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop"
    },
    {
      number: 6,
      title: "Visa Grant",
      description: "Final verification to ensure successful receipt of your PR visa.",
      details: [
        "COPR document verification",
        "Landing instructions",
        "PR card application assistance"
      ],
      icon: <CheckCircle className="h-8 w-8" />,
      color: "#E31937",
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1169&auto=format&fit=crop"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#E31937]/10 px-3 py-1 rounded-full mb-2">
            <span className="text-[#E31937] font-semibold text-sm tracking-wider uppercase">YOUR JOURNEY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">The Canadian PR Process</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Your journey to Canada made simple with our guided approach.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div 
          ref={timelineRef}
          className="flex space-x-4 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        >
          {processSteps.map((step) => (
            <div 
              key={step.number}
              id={`step-${step.number}`}
              onClick={() => handleStepClick(step.number)}
              className={`flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg ${
                activeStep === step.number ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <div 
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  activeStep === step.number 
                    ? `bg-[${step.color}] text-white shadow-lg` 
                    : 'bg-gray-200 text-gray-600'
                }`}
                style={{ backgroundColor: activeStep === step.number ? step.color : '' }}
              >
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <span className={`text-sm font-medium whitespace-nowrap ${
                activeStep === step.number ? 'text-gray-900' : 'text-gray-600'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Active Step Content */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {processSteps.map((step) => (
            activeStep === step.number && (
              <div key={step.number} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image Section */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                    <div 
                      className="text-white inline-flex items-center justify-center rounded-full w-12 h-12 mb-3"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-2 h-20 rounded-full mr-4"
                      style={{ backgroundColor: step.color }}
                    ></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-1">STAGE {step.number}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-700">Key Activities:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div 
                              className="w-4 h-4 rounded-full mr-3"
                              style={{ backgroundColor: step.color }}
                            ></div>
                          </div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => handleStepClick(step.number > 1 ? step.number - 1 : processSteps.length)}
                      className="flex items-center text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 transform rotate-180" />
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={() => handleStepClick(step.number < processSteps.length ? step.number + 1 : 1)}
                      className="flex items-center text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <span>Next</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-xl border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Begin Your Canadian Journey?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step today with our expert guidance. We'll help you navigate each step of the process with confidence.
          </p>
          <Button 
            onClick={scrollToAssessment}
            className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold shadow-lg rounded-xl"
            size="lg"
          >
            Get Your Eligibility Assessment
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }
      `}</style>
    </section>
  );
}