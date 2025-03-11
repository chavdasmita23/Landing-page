import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  Home,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "World-Class Education",
    description: "Access to globally recognized universities and education institutions for you and your family.",
    image: "/images/canada-education.jpg",
    details: [
      "Canadian universities consistently rank in the global top 100",
      "Affordable tuition compared to the US and UK",
      "Educational options for all family members",
      "Research opportunities across diverse fields"
    ]
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Healthcare System",
    description: "Benefit from Canada's comprehensive universal healthcare system providing quality medical services.",
    image: "/images/canada-healthcare.jpg",
    details: [
      "Universal healthcare coverage for permanent residents",
      "Low-cost prescription medication programs",
      "World-class medical facilities and services",
      "Mental health support systems"
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Strong Economy",
    description: "Enjoy opportunities in a resilient economy with diverse industries and high living standards.",
    image: "/images/canada-economy.jpg",
    details: [
      "Multiple thriving sectors including tech and finance",
      "Stable banking and economic systems",
      "Strong employment protections",
      "Competitive salaries and benefits"
    ]
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Quality Lifestyle",
    description: "Experience the perfect balance of work and leisure in Canada's safe, multicultural environment.",
    image: "/images/canada-lifestyle.jpg",
    details: [
      "Consistently ranked among top 5 countries for quality of life",
      "Abundant natural beauty and outdoor recreation",
      "Safe communities with low crime rates",
      "Vibrant multicultural cities and festivals"
    ]
  }
];

export default function WhyCanada() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="why-canada" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block">
              <span className="text-[#E31937] font-semibold text-sm tracking-wider uppercase">DISCOVER</span>
              <div className="h-1 w-10 bg-[#E31937] mt-1"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">Why <span className="text-[#2563EB]">Canada</span>?</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Canada consistently ranks as one of the best countries for immigrants, offering exceptional opportunities with its welcoming multicultural society, strong economy, and high quality of life.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="/images/canada-landscape.jpg" 
              alt="Canadian landscape" 
              className="rounded-lg shadow-xl object-cover h-80 w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#2563EB] text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="font-semibold">Canada welcomes over 400,000 new permanent residents annually</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`bg-white hover:shadow-xl transition-all duration-300 transform ${activeIndex === index ? 'scale-105 ring-2 ring-[#2563EB]' : 'hover:-translate-y-2'} cursor-pointer overflow-hidden border-0 shadow-lg`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className={`text-[#2563EB] p-3 rounded-full inline-block mb-4 ${activeIndex === index ? 'bg-blue-100' : 'bg-blue-50'}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                
                <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                    {benefit.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#2563EB] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#E31937]/5 p-8 rounded-xl shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality of Life Index</h3>
              <p className="text-gray-600">Canada ranks #1 in quality of life globally</p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100">
                  <img src="/images/canada-flag.svg" alt="Canadian flag" className="h-8" />
                </div>
                <div className="ml-4">
                  <span className="block text-2xl font-bold text-gray-800">89.5/100</span>
                  <span className="text-sm text-gray-500">Global ranking score</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Happiest Countries</h3>
              <p className="text-gray-600">Canada consistently in top 10 worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
