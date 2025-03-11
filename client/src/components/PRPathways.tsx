import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ChevronLeft, Users, Globe, Clock, BadgeCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Enhanced program data with more details and images
const pathwayData = {
  expressEntry: {
    title: "Express Entry",
    description: "A fast-track immigration system for skilled workers",
    programs: [
      {
        title: "Federal Skilled Worker Program",
        subtitle: "For skilled workers with foreign work experience",
        tag: "Most Popular",
        icon: <Users className="h-6 w-6" />,
        eligibility: "Need to score at least 67 points out of 100 in the FSW points grid",
        processingTime: "6-8 months",
        features: [
          "Points-based Comprehensive Ranking System",
          "No Canadian experience required",
          "Live and work anywhere in Canada",
          "Permanent residency from day one"
        ],
        color: "blue",
        image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        title: "Federal Skilled Trades Program",
        subtitle: "For qualified skilled trades workers",
        icon: <Globe className="h-6 w-6" />,
        eligibility: "Must have qualifying offer of employment or certificate of qualification",
        processingTime: "6-12 months",
        features: [
          "Trades qualification or experience required",
          "Job offer or Canadian certification may be needed",
          "Less emphasis on education and language",
          "Permanent residency from day one"
        ],
        color: "blue",
        image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Canadian Experience Class",
        subtitle: "For those with Canadian work experience",
        icon: <Clock className="h-6 w-6" />,
        eligibility: "Must have at least 12 months of skilled work experience in Canada",
        processingTime: "4-8 months",
        features: [
          "Minimum one year of skilled Canadian work experience",
          "Educational credentials assessment not mandatory",
          "Faster processing times",
          "Permanent residency from day one"
        ],
        color: "blue",
        image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      }
    ]
  },
  pnp: {
    title: "Provincial Nominee Program",
    description: "Programs tailored to the needs of specific provinces",
    programs: [
      {
        title: "Provincial Nominee Program",
        subtitle: "For skilled workers nominated by a Canadian province or territory",
        tag: "600 Bonus Points",
        icon: <BadgeCheck className="h-6 w-6" />,
        eligibility: "Must meet the criteria for specific provincial streams",
        processingTime: "12-18 months",
        features: [
          "Provincial nomination provides 600 additional CRS points",
          "Programs aligned with regional labor market needs",
          "Commitment to live in nominating province",
          "Pathways for specific occupations and skills"
        ],
        color: "red",
        image: "https://images.unsplash.com/photo-1634138235147-532dda21cd0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        provinces: [
          "Ontario - Ontario Immigrant Nominee Program (OINP)",
          "British Columbia - BC Provincial Nominee Program",
          "Alberta - Alberta Immigrant Nominee Program",
          "Manitoba - Manitoba Provincial Nominee Program",
          "Saskatchewan - Saskatchewan Immigrant Nominee Program",
          "Nova Scotia - Nova Scotia Nominee Program",
          "New Brunswick - New Brunswick Provincial Nominee Program",
          "Prince Edward Island - PEI Provincial Nominee Program",
          "Newfoundland and Labrador - Newfoundland and Labrador Provincial Nominee Program",
          "Yukon - Yukon Nominee Program",
          "Northwest Territories - Northwest Territories Nominee Program"
        ]
      }
    ]
  },
  family: {
    title: "Family Sponsorship",
    description: "Reuniting families in Canada",
    programs: [
      {
        title: "Family Class Immigration",
        subtitle: "For close relatives of Canadian citizens and permanent residents",
        icon: <Users className="h-6 w-6" />,
        eligibility: "Must be related to a Canadian citizen or permanent resident willing to sponsor",
        processingTime: "12-24 months",
        features: [
          "Sponsor must be Canadian citizen or permanent resident",
          "Available for spouses, partners, children, parents and grandparents",
          "Financial undertaking by sponsor",
          "Permanent residency from day one"
        ],
        color: "blue",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        eligibleRelatives: [
          "Spouse or common-law partner",
          "Dependent children",
          "Parents and grandparents",
          "Orphaned siblings, nephews, nieces, or grandchildren (under 18)",
          "Children to be adopted"
        ]
      }
    ]
  }
};

export default function PRPathways() {
  const [activeTab, setActiveTab] = useState("expressEntry");
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const activePrograms = pathwayData[activeTab as keyof typeof pathwayData].programs;

  // Handle carousel logic
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % activePrograms.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + activePrograms.length) % activePrograms.length;
    goToSlide(newIndex);
  };

  // Reset current slide when tab changes
  useEffect(() => {
    setCurrentSlide(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="pathways" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">IMMIGRATION ROUTES</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Canadian PR Pathways We Support
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Multiple immigration pathways designed to match your unique qualifications and circumstances. Our team provides expert guidance for each option.
          </p>
        </div>

        <Tabs defaultValue="expressEntry" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="p-1 bg-gray-100 rounded-full">
              <TabsTrigger 
                value="expressEntry" 
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#2563EB] data-[state=active]:text-white transition-all duration-300"
              >
                Express Entry
              </TabsTrigger>
              <TabsTrigger 
                value="pnp" 
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#E31937] data-[state=active]:text-white transition-all duration-300"
              >
                Provincial Nominee
              </TabsTrigger>
              <TabsTrigger 
                value="family" 
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#2563EB] data-[state=active]:text-white transition-all duration-300"
              >
                Family Sponsorship
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(pathwayData).map((pathway) => (
            <TabsContent 
              key={pathway} 
              value={pathway} 
              className="animate-in fade-in-50 duration-500 focus:outline-none"
            >
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                {/* Pathway Header */}
                <div className={`p-8 ${pathway === 'pnp' ? 'bg-[#E31937]/10' : 'bg-[#2563EB]/10'}`}>
                  <h3 className={`text-3xl font-bold ${pathway === 'pnp' ? 'text-[#E31937]' : 'text-[#2563EB]'} mb-2`}>
                    {pathwayData[pathway as keyof typeof pathwayData].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {pathwayData[pathway as keyof typeof pathwayData].description}
                  </p>
                </div>

                {/* Carousel Navigation */}
                {pathwayData[pathway as keyof typeof pathwayData].programs.length > 1 && (
                  <div className="flex justify-between items-center px-8 py-4 border-b border-gray-100">
                    <button 
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="flex space-x-2">
                      {pathwayData[pathway as keyof typeof pathwayData].programs.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-${currentSlide === index ? '10' : '2'} rounded-full transition-all duration-300 ${
                            currentSlide === index 
                              ? (pathway === 'pnp' ? 'bg-[#E31937]' : 'bg-[#2563EB]') 
                              : 'bg-gray-300'
                          }`}
                          onClick={() => goToSlide(index)}
                        ></button>
                      ))}
                    </div>

                    <button 
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}

                {/* Program Carousel */}
                <div 
                  ref={carouselRef}
                  className="flex overflow-x-hidden scroll-smooth transition-all duration-500"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {pathwayData[pathway as keyof typeof pathwayData].programs.map((program, index) => (
                    <div 
                      key={index}
                      className="min-w-full scroll-snap-align-start"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-64 md:h-auto">
                          <img 
                            src={program.image} 
                            alt={program.title} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              // Better fallback images based on program type
                              const fallbacks = {
                                "Express Entry": "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                "Provincial Nominee Program": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                "Family Sponsorship": "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                "Atlantic Immigration Program": "https://images.unsplash.com/photo-1594749794743-7ad651ce0b96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                "Rural and Northern Immigration": "https://images.unsplash.com/photo-1556811431-943fd5a324bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                "Start-up Visa Program": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                              };
                              target.src = fallbacks[program.title] || "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                              console.log(`${program.title} image error, using fallback`);
                            }}
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-center px-6">
                              <div className="mb-4 bg-white/20 p-4 inline-block rounded-full backdrop-blur-sm">
                                <div className="text-white">
                                  {program.icon}
                                </div>
                              </div>
                              <h4 className="text-2xl font-bold text-white mb-2">{program.title}</h4>
                              <p className="text-white/90">{program.subtitle}</p>
                              {program.tag && (
                                <Badge className={`mt-3 ${pathway === 'pnp' ? 'bg-[#E31937]' : 'bg-[#2563EB]'}`}>
                                  {program.tag}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8">
                          <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                              <h5 className="text-lg font-semibold text-gray-700">Eligibility</h5>
                              <span className={`text-sm font-medium ${pathway === 'pnp' ? 'text-[#E31937]' : 'text-[#2563EB]'}`}>
                                Critical Factor
                              </span>
                            </div>
                            <p className="text-gray-600">{program.eligibility}</p>
                          </div>

                          <div className="mb-6">
                            <h5 className="text-lg font-semibold text-gray-700 mb-3">Key Features</h5>
                            <ul className="space-y-3">
                              {program.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className={`h-5 w-5 ${pathway === 'pnp' ? 'text-[#E31937]' : 'text-[#2563EB]'} mt-1 mr-2 flex-shrink-0`} />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Provincial Options (only for PNP) */}
                          {pathway === 'pnp' && program.provinces && (
                            <div className="mb-6">
                              <h5 className="text-lg font-semibold text-gray-700 mb-3">Available Provincial Programs</h5>
                              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto pr-2">
                                {program.provinces.map((province, idx) => (
                                  <div key={idx} className="bg-gray-50 p-2 rounded text-sm text-gray-700">
                                    {province}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Family Options (only for Family) */}
                          {pathway === 'family' && program.eligibleRelatives && (
                            <div className="mb-6">
                              <h5 className="text-lg font-semibold text-gray-700 mb-3">Eligible Relatives</h5>
                              <div className="grid grid-cols-1 gap-2">
                                {program.eligibleRelatives.map((relative, idx) => (
                                  <div key={idx} className="bg-gray-50 p-2 rounded text-sm text-gray-700">
                                    {relative}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="border-t border-gray-100 p-6">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm font-medium text-gray-500">Processing Time</p>
                                <p className="text-lg font-semibold text-gray-800">{program.processingTime}</p>
                              </div>
                              <button 
                                onClick={scrollToAssessment}
                                className={`${pathway === 'pnp' ? 'bg-[#E31937] hover:bg-red-700' : 'bg-[#2563EB] hover:bg-blue-700'} text-white py-2 px-6 rounded-lg font-medium text-sm transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1`}
                              >
                                Check Eligibility
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}