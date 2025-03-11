import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className={`bg-white fixed w-full top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/velox-logo.png" 
                alt="Vvelox Global Business Advisory" 
                className="h-10 md:h-12"
              />
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection("why-canada")} 
                  className="text-gray-700 hover:text-[#E31937] font-medium transition duration-150"
                >
                  Why Canada
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-gray-700 hover:text-[#E31937] font-medium transition duration-150"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pathways")} 
                  className="text-gray-700 hover:text-[#E31937] font-medium transition duration-150"
                >
                  PR Pathways
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("process")} 
                  className="text-gray-700 hover:text-[#E31937] font-medium transition duration-150"
                >
                  PR Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")} 
                  className="text-gray-700 hover:text-[#E31937] font-medium transition duration-150"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center">
            <Button 
              onClick={() => scrollToSection("assessment")} 
              className="hidden md:inline-block bg-[#E31937] hover:bg-red-700 text-white"
            >
              Check Eligibility
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <button 
                    onClick={() => scrollToSection("why-canada")} 
                    className="p-2 text-left hover:bg-gray-100 rounded"
                  >
                    Why Canada
                  </button>
                  <button 
                    onClick={() => scrollToSection("services")} 
                    className="p-2 text-left hover:bg-gray-100 rounded"
                  >
                    Our Services
                  </button>
                  <button 
                    onClick={() => scrollToSection("pathways")} 
                    className="p-2 text-left hover:bg-gray-100 rounded"
                  >
                    PR Pathways
                  </button>
                  <button 
                    onClick={() => scrollToSection("process")} 
                    className="p-2 text-left hover:bg-gray-100 rounded"
                  >
                    PR Process
                  </button>
                  <button 
                    onClick={() => scrollToSection("faq")} 
                    className="p-2 text-left hover:bg-gray-100 rounded"
                  >
                    FAQ
                  </button>
                  <Button 
                    onClick={() => scrollToSection("assessment")} 
                    className="mt-4 bg-[#E31937] hover:bg-red-700 text-white"
                  >
                    Check Eligibility
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
