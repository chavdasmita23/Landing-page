import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({ top: windowHeight - 80, behavior: "smooth" });
  };

  return (
    <section className="pt-24 md:pt-0 relative bg-cover bg-center min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-32">
        <div className="max-w-3xl text-white animate-fadeIn">
          <div className="flex items-center mb-4">
            <div className="h-1 w-16 bg-[#E31937] mr-4"></div>
            <span className="text-[#E31937] font-semibold">IMMIGRATION EXPERTS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight shadow-text animate-slideInUp">
            Your Pathway to Canadian <span className="text-[#E31937]">Permanent Residency</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-medium shadow-text animate-slideInUp" style={{animationDelay: "0.2s"}}>
            Professional Migration Assistance for Your Canadian Dream
          </h2>
          <p className="text-lg mb-10 max-w-2xl shadow-text opacity-90 animate-slideInUp" style={{animationDelay: "0.4s"}}>
            Transform your Canadian dream into reality with professional migration assistance through every step of your PR journey with personalized assessment and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slideInUp" style={{animationDelay: "0.6s"}}>
            <Button 
              onClick={() => scrollToSection("assessment")} 
              className="bg-[#E31937] hover:bg-red-700 text-white font-bold py-3 px-8 shadow-lg group transition-all duration-300 transform hover:translate-y-[-3px]"
              size="lg"
            >
              Check Your Eligibility
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => scrollToSection("pathways")} 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/30 font-bold py-3 px-8 shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
              variant="outline"
              size="lg"
            >
              Explore PR Pathways
            </Button>
          </div>

          {/* Slide Indicator */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-${
                  currentSlide === index ? "10" : "2"
                } rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#E31937]" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce hidden md:block" onClick={handleScrollDown}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
      
      <style>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
