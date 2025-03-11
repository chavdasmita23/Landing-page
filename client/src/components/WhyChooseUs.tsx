import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Calculator, 
  FileText, 
  Hourglass, 
  Map, 
  RotateCcw 
} from "lucide-react";

const services = [
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Express Entry Eligibility",
    description: "Our Express Entry specialists analyze your profile comprehensively to identify the ideal immigration program match, maximizing your CRS score and ensuring successful entry into the pool."
  },
  {
    icon: <Calculator className="h-5 w-5" />,
    title: "CRS Points Optimization",
    description: "Our point-optimization experts conduct thorough assessments to identify every legitimate point-scoring opportunity in your profile, frequently finding 10-20 additional points others miss."
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Document Verification",
    description: "Our document specialists meticulously verify every document against IRCC requirements, ensuring your evidence meets the exact standards that prevent costly rejections."
  },
  {
    icon: <Hourglass className="h-5 w-5" />,
    title: "Processing Time Optimization",
    description: "Our streamlined process and strategic application timing reduce processing delays by 25% compared to self-managed applications, with proactive follow-ups to keep your case moving."
  },
  {
    icon: <Map className="h-5 w-5" />,
    title: "Provincial Nomination Expertise",
    description: "Our PNP specialists stay current with the frequently changing eligibility criteria across all Canadian provinces and territories, directing you only to programs where you'll qualify."
  },
  {
    icon: <RotateCcw className="h-5 w-5" />,
    title: "Rejection Recovery",
    description: "Our rejection-recovery team specializes in analyzing previous refusals, addressing the specific issues, and creating compelling new applications with 94% success rate for previously refused clients."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Vvelox Global Business Advisory?
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced team offers specialized immigration expertise for every step of your Canadian PR journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#2563EB]/10 p-3 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
