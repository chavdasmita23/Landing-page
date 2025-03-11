
import { useState } from "react";
import { 
  CheckCircle, 
  Calculator, 
  FileText, 
  Clock, 
  Map, 
  RefreshCw
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState("entry-eligibility");
  
  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  const reasons = [
    {
      id: "entry-eligibility",
      title: "Confused About Express Entry Eligibility?",
      description: "Our Express Entry specialists analyze your profile comprehensively to identify the ideal immigration program match, maximizing your CRS score and ensuring successful entry into the pool.",
      icon: <CheckCircle className="h-10 w-10 text-[#2563EB]" />,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "crs-calculation",
      title: "Struggling with CRS Points Calculation?",
      description: "Our point-optimization experts conduct thorough assessments to identify every legitimate point-scoring opportunity in your profile, frequently finding 10-20 additional points others miss.",
      icon: <Calculator className="h-10 w-10 text-[#E31937]" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "documentation",
      title: "Overwhelmed by Documentation Requirements?",
      description: "Our document specialists meticulously verify every document against IRCC requirements, ensuring your evidence meets the exact standards that prevent costly rejections.",
      icon: <FileText className="h-10 w-10 text-[#2563EB]" />,
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "processing-delays",
      title: "Frustrated by Lengthy Processing Delays?",
      description: "Our streamlined process and strategic application timing reduce processing delays by 25% compared to self-managed applications, with proactive follow-ups to keep your case moving.",
      icon: <Clock className="h-10 w-10 text-[#E31937]" />,
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "pnp-options",
      title: "Uncertain About Provincial Nomination Options?",
      description: "Our PNP specialists stay current with the frequently changing eligibility criteria across all Canadian provinces and territories, directing you only to programs where you'll qualify.",
      icon: <Map className="h-10 w-10 text-[#2563EB]" />,
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "previous-rejection",
      title: "Recovering from a Previous Rejection?",
      description: "Our rejection-recovery team specializes in analyzing previous refusals, addressing the specific issues, and creating compelling new applications with 94% success rate for previously refused clients.",
      icon: <RefreshCw className="h-10 w-10 text-[#E31937]" />,
      image: "https://images.unsplash.com/photo-1581574919402-5ab3c6278d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];
  
  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-white to-[#2563EB]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">EXPERT GUIDANCE</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Vvelox Global Business Advisory?</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Our specialized team offers comprehensive solutions to the most common immigration challenges, ensuring your journey to Canada is smooth and successful.
          </p>
        </div>
        
        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden border border-gray-100 hover:border-[#2563EB]/30 group"
            >
              <div className="p-6">
                <div className="mb-5">{reason.icon}</div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Programs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="grid md:grid-cols-2">
            {/* Federal Skilled Worker Program */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center mb-4">
                <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mr-3">MOST POPULAR</span>
                <h3 className="text-2xl font-bold text-gray-800">Federal Skilled Worker Program</h3>
              </div>
              <p className="text-gray-600 mb-6">For skilled workers with foreign work experience</p>
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Federal Skilled Worker Program" 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                    console.log("Federal Skilled Worker Program image error, using fallback");
                  }}
                />
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#2563EB] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Minimum 1 year continuous work experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#2563EB] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">NOC Job Type 0, A, or B</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#2563EB] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Language proficiency requirements</span>
                </li>
              </ul>
              <Button 
                onClick={scrollToAssessment}
                className="w-full bg-[#2563EB] hover:bg-blue-700 text-white"
              >
                Check Your Eligibility
              </Button>
            </div>
            
            {/* Federal Skilled Trades Program */}
            <div className="p-8">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Federal Skilled Trades Program</h3>
              </div>
              <p className="text-gray-600 mb-6">For qualified skilled trades workers</p>
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Federal Skilled Trades Program" 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1574159134936-1020f5e4c5d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                    console.log("Federal Skilled Trades Program image error, using fallback");
                  }}
                />
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#E31937] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">2 years within last 5 years in a skilled trade</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#E31937] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Meet minimum language requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#E31937] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Qualified trade certification or job offer</span>
                </li>
              </ul>
              <Button 
                onClick={scrollToAssessment}
                variant="outline"
                className="w-full border-[#E31937] text-[#E31937] hover:bg-[#E31937] hover:text-white"
              >
                Check Your Eligibility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
