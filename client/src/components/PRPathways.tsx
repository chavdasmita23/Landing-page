import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PRPathways() {
  const pathways = [
    {
      id: "express-entry",
      title: "Express Entry",
      description: "Canada's flagship immigration system for skilled professionals.",
      programs: [
        {
          title: "Federal Skilled Worker Program",
          description: "For skilled workers with foreign work experience in NOC 0, A, or B occupations.",
          image: "https://images.unsplash.com/photo-1664575602554-2087b04935d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          requirements: [
            "Skilled work experience of 1+ years in NOC 0, A, or B",
            "Language proficiency (CLB 7+)",
            "Education (ECA for foreign credentials)",
            "Minimum of 67 points on the FSW grid"
          ]
        },
        {
          title: "Federal Skilled Trades Program",
          description: "For qualified skilled trades workers with relevant experience.",
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          requirements: [
            "Skilled trades experience of 2+ years in the past 5 years",
            "Language proficiency (CLB 5 for speaking/listening, CLB 4 for reading/writing)",
            "Valid job offer for 1+ year or certification from a Canadian authority",
            "Meet requirements for your specific skilled trade"
          ]
        },
        {
          title: "Canadian Experience Class",
          description: "For those with recent Canadian work experience.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          requirements: [
            "1+ year of skilled work experience in Canada within the past 3 years",
            "Language proficiency (CLB 7+ for NOC 0 or A, CLB 5+ for NOC B)",
            "Plan to live outside of Quebec",
            "Temporary status during Canadian work experience"
          ]
        }
      ]
    },
    {
      id: "pnp",
      title: "Provincial Nominee Programs",
      description: "Programs operated by provinces to select immigrants based on regional needs.",
      programs: [
        {
          title: "Ontario Immigrant Nominee Program",
          description: "Ontario's program targeting skilled workers, entrepreneurs, and international students.",
          image: "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          requirements: [
            "Express Entry and Non-Express Entry streams available",
            "Human Capital Priorities for skilled workers",
            "Entrepreneur and International Student streams",
            "Occupation-specific streams for in-demand jobs"
          ]
        },
        {
          title: "British Columbia PNP",
          description: "BC's program for skilled workers, graduates, entrepreneurs, and key workers.",
          image: "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          requirements: [
            "Skills Immigration for skilled workers",
            "Express Entry BC for Express Entry candidates",
            "Entrepreneur Immigration for business owners",
            "Regional Pilot for businesses in smaller communities"
          ]
        },
        {
          title: "Alberta Advantage Immigration Program",
          description: "Alberta's program focusing on workers and entrepreneurs who benefit the province.",
          image: "https://images.pexels.com/photos/1486854/pexels-photo-1486854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          requirements: [
            "Alberta Express Entry stream",
            "Alberta Opportunity stream for workers in Alberta",
            "Rural Renewal stream for rural communities",
            "Self-Employed Farmer stream"
          ]
        }
      ]
    },
    {
      id: "business",
      title: "Business Immigration",
      description: "Pathways for entrepreneurs, investors, and self-employed individuals.",
      programs: [
        {
          title: "Start-up Visa Program",
          description: "For innovative entrepreneurs with a qualifying business idea.",
          image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          requirements: [
            "Support from a designated organization (angel investor, venture capital fund, or business incubator)",
            "Language proficiency (CLB 5+)",
            "Sufficient settlement funds",
            "Commitment to actively manage business from Canada"
          ]
        },
        {
          title: "Self-Employed Program",
          description: "For individuals who can create their own employment through cultural or athletic activities.",
          image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          requirements: [
            "Relevant experience in cultural activities or athletics",
            "Intent and ability to create self-employment in Canada",
            "Meet the program's selection criteria",
            "Make a significant contribution to Canadian cultural or athletic life"
          ]
        },
        {
          title: "Provincial Business Programs",
          description: "Provincial programs targeting entrepreneurs and investors.",
          image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          requirements: [
            "Business ownership or management experience",
            "Minimum net worth requirements",
            "Investment threshold for business establishment",
            "Job creation targets"
          ]
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(pathways[0].id);
  const [activeProgram, setActiveProgram] = useState(0);

  const activePathway = pathways.find(pathway => pathway.id === activeCategory);

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pathways.map((pathway) => (
            <button
              key={pathway.id}
              className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeCategory === pathway.id
                  ? "bg-[#2563EB] text-white shadow-lg transform -translate-y-1"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => {
                setActiveCategory(pathway.id);
                setActiveProgram(0);
              }}
            >
              {pathway.title}
            </button>
          ))}
        </div>

        {/* Main Description */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {activePathway?.title}
          </h3>
          <p className="text-gray-600 text-lg">
            {activePathway?.description}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {activePathway?.programs.map((program, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform ${
                activeProgram === index ? "scale-105 ring-2 ring-[#2563EB]" : "hover:shadow-xl hover:-translate-y-2"
              }`}
              onClick={() => setActiveProgram(index)}
            >
              <div className="relative h-60">
                <img
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                    console.log(`${program.title} image error, using fallback`);
                  }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{program.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Program Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {activePathway?.programs[activeProgram]?.title}
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                {activePathway?.programs[activeProgram]?.description}
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Requirements:</h4>
              <div className="space-y-3">
                {activePathway?.programs[activeProgram]?.requirements.map((requirement, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>

              <Button 
                className="mt-8 bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:translate-y-[-3px] group"
                onClick={() => {
                  const element = document.getElementById("assessment");
                  if (element) {
                    const navbarHeight = 80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                Assess Your Eligibility
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative h-80 md:h-auto">
              <img
                src={activePathway?.programs[activeProgram]?.image}
                alt={activePathway?.programs[activeProgram]?.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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