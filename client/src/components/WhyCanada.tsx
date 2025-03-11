import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  Home 
} from "lucide-react";

const benefits = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "World-Class Education",
    description: "Access to globally recognized universities and education institutions for you and your family."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Healthcare System",
    description: "Benefit from Canada's comprehensive universal healthcare system providing quality medical services."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Strong Economy",
    description: "Enjoy opportunities in a resilient economy with diverse industries and high living standards."
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Quality Lifestyle",
    description: "Experience the perfect balance of work and leisure in Canada's safe, multicultural environment."
  }
];

export default function WhyCanada() {
  return (
    <section id="why-canada" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Canada?</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Canada offers exceptional opportunities for immigrants with a welcoming multicultural society and strong economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gray-50 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="text-[#2563EB] mb-4 text-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
