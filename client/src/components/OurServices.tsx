import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Route,
  TrendingUp,
  Map,
  ClipboardCheck,
  ListChecks,
  Headphones,
  Users,
  Shield,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Route className="h-10 w-10" />,
    title: "Customized PR Roadmap",
    description: "Tailored migration plan based on your unique profile.",
    longDescription: "Our experts analyze your education, work experience, language proficiency, and other factors to create a personalized immigration roadmap that maximizes your chances of success.",
    benefits: ["Personalized pathway selection", "Timeline projection", "Required document checklist", "Step-by-step guidance"],
    color: "#2563EB",
    featured: true
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Express Entry Profile Optimization",
    description: "Maximize your CRS score potential.",
    longDescription: "Our point-optimization specialists identify opportunities to increase your Comprehensive Ranking System (CRS) score, often finding 10-20 additional points that applicants miss on their own.",
    benefits: ["Strategic profile enhancement", "Educational credential maximization", "Language score optimization", "Work experience alignment"],
    color: "#E31937"
  },
  {
    icon: <Map className="h-10 w-10" />,
    title: "Provincial Nomination Strategy",
    description: "Identification of your best PNP options.",
    longDescription: "We analyze the ever-changing provincial nomination programs across Canada to identify your best opportunities based on your profile, occupation, and connections to specific provinces.",
    benefits: ["PNP stream matching", "Enhanced eligibility assessment", "Application timeline planning", "Documentation preparation"],
    color: "#2563EB"
  },
  {
    icon: <ClipboardCheck className="h-10 w-10" />,
    title: "Documentation Verification",
    description: "Ensure compliance with IRCC requirements.",
    longDescription: "Our documentation specialists meticulously review all your supporting documents to ensure they meet the exact requirements of Immigration, Refugees and Citizenship Canada (IRCC), preventing costly rejections.",
    benefits: ["Document authenticity verification", "Format and translation review", "Compliance assurance", "Missing document identification"],
    color: "#E31937"
  },
  {
    icon: <ListChecks className="h-10 w-10" />,
    title: "Application Management",
    description: "Comprehensive support throughout the submission process.",
    longDescription: "We handle the entire application process, from initial document preparation to final submission, ensuring your application is complete, accurate, and submitted on time.",
    benefits: ["Form filling assistance", "Document organization", "Application submission", "Status tracking"],
    color: "#2563EB"
  },
  {
    icon: <Headphones className="h-10 w-10" />,
    title: "Post-Submission Assistance",
    description: "Ongoing support until your PR is granted.",
    longDescription: "Our support doesn't end with application submission. We provide continuous assistance through additional information requests, medical and security clearances, and the final stages of PR approval.",
    benefits: ["Additional request handling", "Interview preparation", "Visa processing assistance", "Landing preparation support"],
    color: "#E31937",
    featured: true
  }
];

const stats = [
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Satisfied Clients",
    value: "15,000+",
    description: "Successful PR applications"
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Success Rate",
    value: "97%",
    description: "First-time approvals"
  },
  {
    icon: <Award className="h-6 w-6 text-white" />,
    title: "Experience",
    value: "12+ Years",
    description: "Of immigration expertise"
  }
];

export default function OurServices() {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-[#2563EB]/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">HOW WE HELP YOU</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Professional Services</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive immigration services designed to guide you through every step of your Canadian PR journey. Our team of experts provides personalized assistance tailored to your unique profile.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-[#2563EB] to-[#2563EB]/80' : 'from-[#E31937] to-[#E31937]/80'} text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold">{stat.title}</h3>
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <p className="text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative bg-white overflow-hidden group transition-all duration-300 ${
                activeService === index ? 'ring-2 shadow-xl scale-105 z-10' : 'hover:shadow-lg hover:-translate-y-2'
              } ${service.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ 
                borderColor: activeService === index ? service.color : 'transparent',
                borderWidth: activeService === index ? '2px' : '0px'
              }}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              {service.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#E31937]">Popular Service</Badge>
                </div>
              )}
              
              <div 
                className="absolute top-0 left-0 w-2 h-full"
                style={{ backgroundColor: service.color }}
              ></div>
              
              <CardContent className="p-8">
                <div 
                  className="p-4 rounded-full inline-block mb-6"
                  style={{ 
                    backgroundColor: `${service.color}15`, 
                    color: service.color 
                  }}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                
                <p className={`text-gray-600 ${activeService === index ? 'mb-6' : 'mb-0'}`}>
                  {activeService === index ? service.longDescription : service.description}
                </p>
                
                {activeService === index && (
                  <div className="mt-6 space-y-6 animate-fadeIn">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div 
                              className="h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: service.color }}
                            >
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="px-8 pb-8 pt-0">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToAssessment();
                  }}
                  className="w-full group"
                  style={{ 
                    backgroundColor: service.color,
                    color: 'white'
                  }}
                >
                  {activeService === index ? "Check Your Eligibility Now" : "Learn More"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center bg-gradient-to-r from-[#2563EB]/10 to-[#E31937]/10 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Canadian PR Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step today and discover which Canadian immigration pathway is right for you. Our experts are ready to assist you through every stage of the process.
          </p>
          <Button 
            onClick={scrollToAssessment}
            className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold shadow-lg"
            size="lg"
          >
            Get Your Eligibility Assessment
          </Button>
        </div>
      </div>
      
      <style jsx>{`
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
