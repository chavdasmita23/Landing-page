import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="overflow-hidden rounded-2xl shadow-xl h-72 lg:h-96">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1496170690726-449c08455da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
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