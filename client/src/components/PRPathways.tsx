import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const expressEntryPrograms = [
  {
    title: "Federal Skilled Worker Program",
    subtitle: "For skilled workers with foreign work experience",
    features: [
      "Points-based Comprehensive Ranking System",
      "No Canadian experience required",
      "Live and work anywhere in Canada",
      "Permanent residency from day one"
    ],
    color: "blue"
  },
  {
    title: "Federal Skilled Trades Program",
    subtitle: "For qualified skilled trades workers",
    features: [
      "Trades qualification or experience required",
      "Job offer or Canadian certification may be needed",
      "Less emphasis on education and language",
      "Permanent residency from day one"
    ],
    color: "blue"
  },
  {
    title: "Canadian Experience Class",
    subtitle: "For those with Canadian work experience",
    features: [
      "Minimum one year of skilled Canadian work experience",
      "Educational credentials assessment not mandatory",
      "Faster processing times",
      "Permanent residency from day one"
    ],
    color: "blue"
  }
];

const pnpProgram = {
  title: "Provincial Nominee Program",
  subtitle: "For skilled workers nominated by a Canadian province or territory",
  features: [
    "Provincial nomination provides 600 additional CRS points",
    "Programs aligned with regional labor market needs",
    "Commitment to live in nominating province",
    "Pathways for specific occupations and skills"
  ],
  color: "red"
};

const familyProgram = {
  title: "Family Class Immigration",
  subtitle: "For close relatives of Canadian citizens and permanent residents",
  features: [
    "Sponsor must be Canadian citizen or permanent resident",
    "Available for spouses, partners, children, parents and grandparents",
    "Financial undertaking by sponsor",
    "Permanent residency from day one"
  ],
  color: "blue"
};

const scrollToAssessment = () => {
  const element = document.getElementById("assessment");
  if (element) {
    const navbarHeight = 80;
    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export default function PRPathways() {
  return (
    <section id="pathways" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Canadian PR Pathways We Support
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Multiple immigration pathways designed to match your unique qualifications and circumstances.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Express Entry System */}
          <div>
            <h3 className="text-2xl font-bold text-[#2563EB] mb-6 text-center">Express Entry System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expressEntryPrograms.map((program, index) => (
                <Card key={index} className="bg-gray-50 shadow-md overflow-hidden">
                  <CardHeader className="bg-[#2563EB] p-4">
                    <h4 className="text-xl font-bold text-white">{program.title}</h4>
                    <p className="text-white text-sm mt-1">{program.subtitle}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#2563EB] mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button
                        onClick={scrollToAssessment}
                        className="w-full bg-[#2563EB] hover:bg-blue-700 text-white"
                      >
                        Check Eligibility
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Provincial Nominee Programs */}
          <div>
            <h3 className="text-2xl font-bold text-[#2563EB] mb-6 text-center">Provincial Nominee Programs (PNPs)</h3>
            <div className="max-w-lg mx-auto">
              <Card className="bg-gray-50 shadow-md overflow-hidden">
                <CardHeader className="bg-[#E31937] p-4">
                  <h4 className="text-xl font-bold text-white">{pnpProgram.title}</h4>
                  <p className="text-white text-sm mt-1">{pnpProgram.subtitle}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {pnpProgram.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#E31937] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={scrollToAssessment}
                      className="w-full bg-[#E31937] hover:bg-red-700 text-white"
                    >
                      Check Eligibility
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Family Sponsorship */}
          <div>
            <h3 className="text-2xl font-bold text-[#2563EB] mb-6 text-center">Family Sponsorship</h3>
            <div className="max-w-lg mx-auto">
              <Card className="bg-gray-50 shadow-md overflow-hidden">
                <CardHeader className="bg-[#2563EB] p-4">
                  <h4 className="text-xl font-bold text-white">{familyProgram.title}</h4>
                  <p className="text-white text-sm mt-1">{familyProgram.subtitle}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {familyProgram.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#2563EB] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={scrollToAssessment}
                      className="w-full bg-[#2563EB] hover:bg-blue-700 text-white"
                    >
                      Check Eligibility
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
