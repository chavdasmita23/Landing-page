import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: 1,
    title: "Initial Assessment",
    description: "Evaluation of eligibility across immigration programs."
  },
  {
    number: 2,
    title: "Express Entry Profile Creation",
    description: "Strategic planning to maximize CRS scores."
  },
  {
    number: 3,
    title: "Provincial Nomination (if applicable)",
    description: "Support for PNP application processes."
  },
  {
    number: 4,
    title: "Invitation to Apply",
    description: "Thorough preparation after receiving ITA."
  },
  {
    number: 5,
    title: "PR Application Submission",
    description: "Complete documentation and submission to IRCC."
  },
  {
    number: 6,
    title: "Visa Grant",
    description: "Final verification and follow-up."
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Canadian PR Process</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined approach guides you through each step of your immigration journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="flex flex-col items-center mr-6">
                <div className="bg-[#2563EB] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {step.number}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="h-full w-0.5 bg-[#2563EB] mt-2 flex-grow"></div>
                )}
              </div>
              <Card className="bg-gray-50 flex-grow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
