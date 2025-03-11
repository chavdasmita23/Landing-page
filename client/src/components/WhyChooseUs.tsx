import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CheckCircle,
  Calculator,
  FileText,
  Hourglass,
  Map,
  RotateCcw,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  Users,
  Clock,
  Award,
  ArrowRight,
  Heart,
  TrendingUp,
  Smile,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    question: "Confused About Express Entry Eligibility?",
    title: "Express Entry Eligibility",
    description: "Our Express Entry specialists analyze your profile comprehensively to identify the ideal immigration program match, maximizing your CRS score and ensuring successful entry into the pool.",
    features: [
      "Comprehensive program matching across all Express Entry streams",
      "Detailed eligibility assessment for each immigration pathway",
      "Strategic recommendations based on your unique profile",
      "Clear explanation of requirements and next steps",
    ],
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    question: "Struggling with CRS Points Calculation?",
    title: "CRS Points Optimization",
    description: "Our point-optimization experts conduct thorough assessments to identify every legitimate point-scoring opportunity in your profile, frequently finding 10-20 additional points others miss.",
    features: [
      "Detailed CRS score breakdown and analysis",
      "Identification of point-improvement opportunities",
      "Strategic guidance for language testing optimization",
      "Education credential assessment strategies",
    ],
  },
  {
    icon: <FileText className="h-6 w-6" />,
    question: "Overwhelmed by Documentation Requirements?",
    title: "Document Verification",
    description: "Our document specialists meticulously verify every document against IRCC requirements, ensuring your evidence meets the exact standards that prevent costly rejections.",
    features: [
      "Comprehensive document checklist customized to your case",
      "Format and content verification for all submissions",
      "Translation and certification guidance",
      "Document submission strategies and organization",
    ],
  },
  {
    icon: <Hourglass className="h-6 w-6" />,
    question: "Frustrated by Lengthy Processing Delays?",
    title: "Processing Time Optimization",
    description: "Our streamlined process and strategic application timing reduce processing delays by 25% compared to self-managed applications, with proactive follow-ups to keep your case moving.",
    features: [
      "Strategic application timing recommendations",
      "Regular status check updates and monitoring",
      "Proactive communication with immigration authorities",
      "Expedited processing strategies when available",
    ],
  },
  {
    icon: <Map className="h-6 w-6" />,
    question: "Uncertain About Provincial Nomination Options?",
    title: "Provincial Nomination Expertise",
    description: "Our PNP specialists stay current with the frequently changing eligibility criteria across all Canadian provinces and territories, directing you only to programs where you'll qualify.",
    features: [
      "Comprehensive PNP program matching across all provinces",
      "Occupation-specific stream identification",
      "Connection to province evaluation and strategies",
      "Provincial labor market needs analysis",
    ],
  },
  {
    icon: <RotateCcw className="h-6 w-6" />,
    question: "Recovering from a Previous Rejection?",
    title: "Rejection Recovery",
    description: "Our rejection-recovery team specializes in analyzing previous refusals, addressing the specific issues, and creating compelling new applications with high success rates for previously refused clients.",
    features: [
      "Detailed rejection analysis and root cause identification",
      "Customized reapplication strategy development",
      "Addressing deficiencies in previous applications",
      "Strengthening evidence and documentation",
    ],
  },
];

const reasons = [
  {
    title: "Healthcare System",
    description: "Benefit from Canada's comprehensive universal healthcare system providing quality medical services.",
    icon: <Heart className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bullets: [
      "Universal healthcare coverage for permanent residents",
      "World-class medical facilities and professionals",
      "Comprehensive coverage for essential medical services",
      "Focus on preventive care and wellness",
    ],
  },
  {
    title: "Strong Economy",
    description: "Enjoy opportunities in a resilient economy with diverse industries and high living standards.",
    icon: <TrendingUp className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1616587896595-16aca8aaa001?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bullets: [
      "Multiple thriving sectors including tech and finance",
      "Stable banking and economic systems",
      "Strong employment protections",
      "Competitive salaries and benefits",
    ],
  },
  {
    title: "Quality Lifestyle",
    description: "Experience high quality of life with clean environments, safety, and cultural diversity.",
    icon: <Smile className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bullets: [
      "Consistently ranked among top countries for quality of life",
      "Safe communities and low crime rates",
      "Clean environment with abundant natural spaces",
      "Diverse, inclusive, and multicultural society",
    ],
  },
  {
    title: "World-Class Education",
    description: "Access to globally recognized universities and education institutions for you and your family.",
    icon: <GraduationCap className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bullets: [
      "Internationally recognized education system",
      "Affordable higher education compared to other countries",
      "Quality public education from kindergarten to high school",
      "Numerous scholarship opportunities",
    ],
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    country: "India",
    text: "Vvelox helped me optimize my CRS score by 22 points, which made all the difference in receiving my ITA. Their experts guided me through every step of the process.",
    rating: 5,
    service: "Express Entry",
  },
  {
    name: "Ahmad Khalid",
    country: "Pakistan",
    text: "After a previous rejection, I was hesitant to try again. Vvelox's rejection recovery team identified exactly where my application went wrong and helped me secure provincial nomination.",
    rating: 5,
    service: "PNP Application",
  },
  {
    name: "Li Wei",
    country: "China",
    text: "The document verification service saved me from potential rejection. Their attention to detail caught several issues that I would have missed on my own.",
    rating: 5,
    service: "Document Verification",
  },
];

export default function WhyChooseUs() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("expertise");

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Canadian landscape image for the hero section
  const canadianLandscapeImage = "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Immigration Expertise
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our experienced team offers specialized immigration expertise for every step of your Canadian PR journey, addressing your specific challenges with proven solutions.
          </p>
        </div>

        <Tabs defaultValue="expertise" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="expertise" className="text-base">Our Expertise</TabsTrigger>
              {/*Removed Testimonials Tab*/}
            </TabsList>
          </div>

          <TabsContent value="expertise" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 ${
                    activeAccordion === index ? "shadow-xl ring-1 ring-[#2563EB]/20" : "hover:shadow-lg"
                  }`}
                >
                  <div
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-3 rounded-full mr-4 ${
                          activeAccordion === index ? "bg-[#2563EB] text-white" : "bg-[#2563EB]/10 text-[#2563EB]"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{service.question}</h3>
                    </div>
                    <div>
                      {activeAccordion === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      activeAccordion === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 mb-6">{service.description}</p>

                      <div className="mb-6">
                        <div className="bg-[#2563EB]/5 p-4 rounded-lg">
                          <h4 className="text-[#2563EB] font-medium mb-3">What we provide:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-[#2563EB] mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button
                        onClick={scrollToAssessment}
                        className="w-full bg-[#2563EB] hover:bg-blue-700 text-white group transition-all duration-300"
                      >
                        Check Your Eligibility Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Removed Testimonials Tab Content */}
        </Tabs>

        <div className="bg-[#2563EB]/5 p-8 rounded-2xl shadow-inner mt-12 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to begin your Canadian journey?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of immigration specialists is ready to guide you through every step of the process, ensuring your best chance at success.
            </p>
            <Button
              onClick={scrollToAssessment}
              className="bg-[#E31937] hover:bg-red-700 text-white px-8 py-6 text-lg font-bold shadow-lg transition-transform duration-300 transform hover:scale-105"
              size="lg"
            >
              Get Your Free Eligibility Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}