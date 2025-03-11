import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const timelineSteps = [
    {
      id: 1,
      title: "Initial Assessment",
      description: "Our experts evaluate your profile to determine eligibility for various immigration pathways.",
      icon: "📋",
      details: [
        "Comprehensive profile evaluation",
        "Identification of optimal immigration pathways",
        "Customized immigration roadmap",
        "Potential point score calculation"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Express Entry Profile Creation",
      description: "We create and optimize your Express Entry profile to maximize your CRS score.",
      icon: "🖥️",
      details: [
        "Express Entry profile creation",
        "CRS score optimization strategies",
        "Documentation preparation guidance",
        "Educational Credential Assessment assistance"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Provincial Nomination",
      description: "We identify and apply for the most suitable Provincial Nominee Program if applicable.",
      icon: "🏢",
      details: [
        "Provincial program eligibility assessment",
        "Application preparation for specific streams",
        "Employment validation support",
        "Provincial documentation assistance"
      ],
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Invitation to Apply",
      description: "Upon receiving an ITA, we prepare and submit your complete PR application.",
      icon: "✉️",
      details: [
        "Comprehensive application preparation",
        "Document verification and submission",
        "Application status tracking",
        "Response to additional requests from IRCC"
      ],
      image: "https://images.unsplash.com/photo-1626180583122-c256e0ea4d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "PR Approval & Landing",
      description: "We guide you through the final steps after approval, including landing preparations.",
      icon: "🛬",
      details: [
        "PR card application assistance",
        "Landing preparation guidance",
        "Settlement resources and recommendations",
        "Post-landing support and integration advice"
      ],
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const [activeStep, setActiveStep] = useState(timelineSteps[0].id);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">SIMPLIFIED PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            The Canadian PR Process
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Your journey to Canada made simple with our guided approach
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-16 relative">
          <div className="hidden md:block absolute h-1 bg-gray-200 top-1/2 transform -translate-y-1/2 left-0 right-0 z-0"></div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {timelineSteps.map((step) => (
              <div 
                key={step.id} 
                className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 my-4 md:my-0 ${
                  activeStep === step.id ? "scale-110" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div 
                  className={`z-10 flex items-center justify-center w-16 h-16 rounded-full text-2xl
                    ${activeStep === step.id ? "bg-[#2563EB] text-white shadow-lg" : "bg-white text-gray-600 border-2 border-gray-200"}
                  `}
                >
                  {step.icon}
                </div>
                <div className={`mt-4 text-center ${activeStep === step.id ? "font-bold text-[#2563EB]" : "text-gray-600"}`}>
                  <div className="text-xl md:whitespace-nowrap">{step.id}. {step.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        {timelineSteps.map((step) => (
          <div 
            key={step.id}
            className={`transition-all duration-500 ${
              activeStep === step.id ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden absolute"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  <span className="text-[#2563EB]">Step {step.id}:</span> {step.title}
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  {step.description}
                </p>
                <div className="space-y-4">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToAssessment}
                  className="mt-8 bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:translate-y-[-3px] group"
                >
                  Start Your Journey 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-4xl font-bold mb-1">{step.id}</div>
                    <div className="text-xl font-medium">{step.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}