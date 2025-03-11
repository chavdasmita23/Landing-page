import { Card, CardContent } from "@/components/ui/card";
import {
  Route,
  TrendingUp,
  Map,
  ClipboardCheck,
  ListChecks,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: <Route />,
    title: "Customized PR Roadmap",
    description: "Tailored migration plan based on your unique profile."
  },
  {
    icon: <TrendingUp />,
    title: "Express Entry Profile Optimization",
    description: "Maximize your CRS score potential."
  },
  {
    icon: <Map />,
    title: "Provincial Nomination Strategy",
    description: "Identification of your best PNP options."
  },
  {
    icon: <ClipboardCheck />,
    title: "Documentation Verification",
    description: "Ensure compliance with IRCC requirements."
  },
  {
    icon: <ListChecks />,
    title: "Application Management",
    description: "Comprehensive support throughout the submission process."
  },
  {
    icon: <Headphones />,
    title: "Post-Submission Assistance",
    description: "Ongoing support until your PR is granted."
  }
];

export default function OurServices() {
  return (
    <section className="py-16 bg-[#2563EB]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2563EB] rounded-full p-2 mr-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
