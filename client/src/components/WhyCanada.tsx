import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WhyCanada() {
  const benefits = [
    {
      title: "Welcoming Society",
      description: "Experience true diversity with Canada ranking among the most welcoming and multicultural societies in the world.",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Strong Economy",
      description: "Enjoy opportunities in a resilient economy with diverse industries and high living standards.",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Healthcare System",
      description: "Benefit from Canada's comprehensive universal healthcare system providing quality medical services.",
      image: "https://images.unsplash.com/photo-1516549655669-33e5e9e80e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Quality Lifestyle",
      description: "Experience the perfect balance of work and leisure in Canada's safe, multicultural environment.",
      image: "https://images.unsplash.com/photo-1534320309096-17ce1f77021d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "World-Class Education",
      description: "Access affordable, globally-recognized education institutions for you and your family.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Canadian landscape",
      description: "Explore breathtaking natural beauty with diverse landscapes from mountains to coastlines.",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const [focusedBenefit, setFocusedBenefit] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="why-canada">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">DESTINATION OF CHOICE</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Canada?
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Canada consistently ranks as one of the best countries for immigrants, offering exceptional opportunities with its welcoming multicultural society, strong economy, and high quality of life.
          </p>
        </div>

        {/* Large Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Canadian landscape" 
            className="w-full h-[50vh] object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1563466438-7fed5dc8782b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white p-8 md:p-16 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">A Land of Opportunity</h3>
              <p className="text-lg md:text-xl">
                Canada's reputation as a land of opportunity attracts immigrants from around the world. With its diverse and inclusive society, stable economy, and high standard of living, Canada offers an exceptional quality of life.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 transform ${
                focusedBenefit === index ? "md:scale-105 z-10" : "hover:-translate-y-2"
              } group h-80`}
              onMouseEnter={() => setFocusedBenefit(index)}
              onMouseLeave={() => setFocusedBenefit(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${benefit.color}`}></div>
              <img
                src={benefit.image} 
                alt={benefit.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                  console.log("Image error, using fallback for", benefit.title);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-xl font-bold text-white mb-0">{benefit.title}</h3>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-10px]">
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button 
            className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:translate-y-[-3px] group"
            size="lg"
            onClick={() => {
              const element = document.getElementById("assessment");
              if (element) {
                const navbarHeight = 80;
                const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Start Your Canadian Journey
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}