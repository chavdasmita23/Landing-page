
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, TrendingUp, ArrowRightCircle } from "lucide-react";

export default function WhyChooseUs() {
  const [activePoint, setActivePoint] = useState(clientPainPoints[0].id);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-3">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Vvelox Global Business Advisory?</h2>
          <div className="w-16 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our immigration specialists solve your most challenging pain points with expertise and precision
          </p>
        </div>

        {/* Desktop View - Side by Side */}
        <div className="hidden lg:grid grid-cols-12 gap-6 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Side - Navigation */}
          <div className="col-span-5 bg-gradient-to-br from-blue-50 to-gray-50 p-6">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-[#E31937] pl-3">Client Pain Points</h3>
              <div className="space-y-2">
                {clientPainPoints.map((point) => (
                  <button 
                    key={point.id}
                    onClick={() => setActivePoint(point.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start ${
                      activePoint === point.id 
                        ? "bg-blue-600 text-white shadow-lg" 
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="mr-3 mt-1">
                      {activePoint === point.id ? (
                        <CheckCircle className="h-5 w-5 text-white" />
                      ) : (
                        <ArrowRightCircle className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <span className="font-medium">{point.question}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="col-span-7 p-8">
            {clientPainPoints.map((point) => (
              <div 
                key={point.id}
                className={`transition-all duration-500 ${
                  activePoint === point.id ? "opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{point.question}</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#E31937]/10 p-3 rounded-full mr-4">
                      <TrendingUp className="h-6 w-6 text-[#E31937]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Solution</h4>
                      <p className="text-gray-600">{point.answer}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h4 className="text-md font-semibold text-gray-700 mb-3">How We Help You</h4>
                    <ul className="space-y-2">
                      {point.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile View - Tabs */}
        <div className="lg:hidden">
          <Tabs defaultValue={clientPainPoints[0].id} className="w-full" onValueChange={setActivePoint}>
            <div className="relative mb-8">
              <TabsList className="w-full h-auto flex flex-nowrap overflow-x-auto pb-4 justify-start gap-2 bg-transparent">
                {clientPainPoints.map((point, index) => (
                  <TabsTrigger
                    key={point.id}
                    value={point.id}
                    className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-200 text-sm ${
                      activePoint === point.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Point {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {clientPainPoints.map((point) => (
              <TabsContent key={point.id} value={point.id} className="mt-2 animate-fadeIn">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-50 to-red-50 p-4">
                    <h3 className="text-xl font-bold text-gray-800">{point.question}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4">{point.answer}</p>
                    
                    <h4 className="text-md font-semibold text-gray-700 mb-2">How We Help You</h4>
                    <ul className="space-y-2">
                      {point.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}

const clientPainPoints = [
  {
    id: "express-entry-eligibility",
    question: "Confused About Express Entry Eligibility?",
    answer: "Our Express Entry specialists analyze your profile comprehensively to identify the ideal immigration program match, maximizing your CRS score and ensuring successful entry into the pool.",
    benefits: [
      "Comprehensive profile assessment against all Express Entry programs",
      "Program-specific eligibility verification",
      "Strategic recommendations based on your unique qualifications",
      "Clear explanations of complex eligibility criteria"
    ],
    image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "crs-points-calculation",
    question: "Struggling with CRS Points Calculation?",
    answer: "Our point-optimization experts conduct thorough assessments to identify every legitimate point-scoring opportunity in your profile, frequently finding 10-20 additional points others miss.",
    benefits: [
      "Detailed CRS score breakdown analysis",
      "Identification of overlooked point opportunities",
      "Strategic recommendations for score improvement",
      "Guidance on documentation to maximize points claims"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "documentation-requirements",
    question: "Overwhelmed by Documentation Requirements?",
    answer: "Our document specialists meticulously verify every document against IRCC requirements, ensuring your evidence meets the exact standards that prevent costly rejections.",
    benefits: [
      "Comprehensive document checklists tailored to your application",
      "Detailed verification against IRCC standards",
      "Guidance on obtaining difficult documents",
      "Strategic presentation of supporting evidence"
    ],
    image: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "processing-delays",
    question: "Frustrated by Lengthy Processing Delays?",
    answer: "Our streamlined process and strategic application timing reduce processing delays by 25% compared to self-managed applications, with proactive follow-ups to keep your case moving.",
    benefits: [
      "Strategic submission timing to avoid peak processing periods",
      "Proactive follow-up protocols with immigration authorities",
      "Real-time application status tracking",
      "Early identification and resolution of potential delays"
    ],
    image: "https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "provincial-nomination",
    question: "Uncertain About Provincial Nomination Options?",
    answer: "Our PNP specialists stay current with the frequently changing eligibility criteria across all Canadian provinces and territories, directing you only to programs where you'll qualify.",
    benefits: [
      "Comprehensive assessment against all provincial programs",
      "Real-time updates on program changes and openings",
      "Strategic multi-province application planning",
      "Connection with provincial employers where applicable"
    ],
    image: "https://images.unsplash.com/photo-1553547369-12d1ca99402b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "previous-rejection",
    question: "Recovering from a Previous Rejection?",
    answer: "Our rejection-recovery team specializes in analyzing previous refusals, addressing the specific issues, and creating compelling new applications with 94% success rate for previously refused clients.",
    benefits: [
      "Detailed refusal letter analysis and interpretation",
      "Identification of specific weaknesses in previous applications",
      "Strategic resubmission planning and timing",
      "Enhanced documentation to overcome previous concerns"
    ],
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];
