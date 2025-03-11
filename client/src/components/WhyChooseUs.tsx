import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";


const services = [
  {
    id: "visa-consultations",
    title: "Visa Consultations",
    description: "Expert guidance on selecting the right visa pathway for your unique situation.",
    benefits: [
      "Personalized assessment of eligibility for different visa categories",
      "Strategic advice on the most suitable visa options",
      "Documentation review and preparation assistance",
      "Step-by-step guidance throughout the application process",
    ],
    image: "https://images.unsplash.com/photo-1553547369-12d1ca99402b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "express-entry",
    title: "Express Entry Management",
    description: "Comprehensive support for Canada's premier immigration pathway.",
    benefits: [
      "Complete Express Entry profile creation and optimization",
      "CRS score maximization strategies",
      "Regular profile updates to improve ranking",
      "Application preparation for Invitations to Apply (ITAs)",
    ],
    image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "pnp-applications",
    title: "Provincial Nominee Programs",
    description: "Specialized assistance with provincial immigration streams across Canada.",
    benefits: [
      "Assessment for provincial eligibility across all Canadian provinces",
      "Application preparation for specific provincial programs",
      "Employer and job offer validation support",
      "Provincial nomination documentation assistance",
    ],
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "family-sponsorship",
    title: "Family Sponsorship",
    description: "Reunite with your loved ones in Canada through family class immigration.",
    benefits: [
      "Spousal, partner, and dependent child sponsorship applications",
      "Parent and grandparent sponsorship program guidance",
      "Super visa application support for extended visits",
      "Relationship documentation and proof preparation",
    ],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "education-pathways",
    title: "Education Pathways",
    description: "Turn your Canadian education into a permanent residency opportunity.",
    benefits: [
      "Student visa application preparation and guidance",
      "Post-graduation work permit (PGWP) application support",
      "Canadian Experience Class transition planning",
      "Educational institution selection guidance",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "business-immigration",
    title: "Business Immigration",
    description: "Investment and entrepreneurial immigration pathways for business professionals.",
    benefits: [
      "Start-up Visa Program application support",
      "Self-employed persons program guidance",
      "Provincial entrepreneur program applications",
      "Business plan development and investment strategy consultation",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Immigration Services</h2>
          <p className="text-xl text-gray-600">
            Expert assistance for every stage of your Canadian immigration journey
          </p>
        </div>

        <Tabs defaultValue={services[0].id} className="w-full" onValueChange={setActiveTab}>
          <div className="relative mb-12">
            <TabsList className="w-full h-auto flex flex-nowrap overflow-x-auto pb-4 justify-start md:justify-center gap-2 bg-transparent">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className={`px-5 py-3 whitespace-nowrap rounded-full transition-all duration-200 ${
                    activeTab === service.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="overflow-hidden rounded-2xl shadow-xl h-72 lg:h-96 flex items-center justify-center bg-gray-50">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Different fallback images based on the service type
                        const fallbacks = {
                          "express-entry": "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                          "pnp-applications": "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                          "family-sponsorship": "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                          "education-pathways": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                          "business-immigration": "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                          "visa-consultations": "https://images.unsplash.com/photo-1517841953087-887c806e8c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        };
                        target.src = fallbacks[service.id] || "https://images.unsplash.com/photo-1496170690726-449c08455da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                        console.log(`${service.title} image error, using fallback`);
                      }}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}