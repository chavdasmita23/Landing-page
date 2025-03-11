import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 md:pt-0 relative bg-cover bg-center min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight shadow-text">
            Your Pathway to Canadian Permanent Residency
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-medium shadow-text">
            Professional Migration Assistance for Your Canadian Dream
          </h2>
          <p className="text-lg mb-10 max-w-2xl shadow-text">
            Transform your Canadian dream into reality with professional migration assistance through every step of your PR journey with personalized assessment and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("assessment")} 
              className="bg-[#E31937] hover:bg-red-700 text-white font-bold py-3 px-8 shadow-lg"
              size="lg"
            >
              Check Your Eligibility
            </Button>
            <Button 
              onClick={() => scrollToSection("pathways")} 
              className="bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 px-8 shadow-lg"
              variant="outline"
              size="lg"
            >
              Explore PR Pathways
            </Button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
