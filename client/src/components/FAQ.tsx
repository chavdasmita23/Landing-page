import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, Clock, DollarSign, Award, Bookmark, Map, Book } from "lucide-react";

const faqCategories = [
  {
    id: "eligibility",
    label: "Eligibility",
    icon: <Users className="h-4 w-4" />
  },
  {
    id: "process",
    label: "Process & Timeline",
    icon: <Clock className="h-4 w-4" />
  },
  {
    id: "costs",
    label: "Costs & Finances",
    icon: <DollarSign className="h-4 w-4" />
  },
  {
    id: "documentation",
    label: "Documentation",
    icon: <Book className="h-4 w-4" />
  },
  {
    id: "family",
    label: "Family",
    icon: <Users className="h-4 w-4" />
  }
];

const faqItems = [
  {
    question: "Am I eligible for Canadian PR?",
    answer: "Eligibility depends on age, education, work experience, language proficiency, and adaptability factors. Our experts will assess your profile and guide you through the best pathway. The most common programs have specific minimum requirements that vary based on the immigration stream you're applying through.",
    category: "eligibility",
    relatedQuestions: ["How does the CRS points system work?", "Do I need an Educational Credential Assessment (ECA)?"]
  },
  {
    question: "What is the minimum CRS score required for Express Entry?",
    answer: "The minimum Comprehensive Ranking System (CRS) score required for an Invitation to Apply (ITA) varies with each draw. Historically, scores have ranged from 440-470 for Federal Skilled Worker draws, but can be lower for specific provincial or occupational draws. Our experts can help you optimize your profile to achieve a competitive score.",
    category: "eligibility",
    relatedQuestions: ["How does the CRS points system work?", "Can I improve my CRS score?"]
  },
  {
    question: "Can I improve my CRS score?",
    answer: "Yes, there are several ways to improve your CRS score: improving language test results, gaining additional work experience, obtaining higher education, securing a valid job offer, getting a provincial nomination (worth 600 points), or having a sibling in Canada. Our specialists can provide personalized strategies based on your specific profile.",
    category: "eligibility",
    relatedQuestions: ["How does the CRS points system work?", "What is the minimum CRS score required for Express Entry?"]
  },
  {
    question: "How long does the PR process take?",
    answer: "Express Entry applications typically take 6-8 months from ITA to PR, while PNP streams may take 12-18 months. Family sponsorship usually takes 12-24 months. Processing times can vary based on your country of residence, application volume, and completeness of your submission. Our team can provide more specific timelines based on your situation.",
    category: "process",
    relatedQuestions: ["What happens after I receive an ITA?", "Can I track my application status?"]
  },
  {
    question: "What happens after I receive an ITA?",
    answer: "After receiving an Invitation to Apply (ITA), you have 60 days to submit a complete permanent residence application. This includes providing detailed personal information, uploading supporting documents, completing medical examinations, and paying application fees. Our team guides you through each step of this process to ensure a complete and accurate submission.",
    category: "process",
    relatedQuestions: ["How long does the PR process take?", "What documents do I need for my PR application?"]
  },
  {
    question: "How does the CRS points system work?",
    answer: "The Comprehensive Ranking System (CRS) evaluates factors such as age, education, work experience, language skills, and adaptability. Each factor is assigned a specific point value, with a maximum possible score of 1,200 points. Higher scores improve your chances of receiving an invitation to apply. Core factors include age (up to 110 points), language skills (up to 150 points), education (up to 150 points), and work experience (up to 80 points).",
    category: "eligibility",
    relatedQuestions: ["Can I improve my CRS score?", "What is the minimum CRS score required for Express Entry?"]
  },
  {
    question: "Do I need an Educational Credential Assessment (ECA)?",
    answer: "Yes, an ECA is required to verify that your foreign education meets Canadian standards. It's mandatory for Express Entry programs to claim points for education. The assessment must be conducted by an organization designated by IRCC, such as World Education Services (WES) or Comparative Education Service (CES). The process typically takes 1-3 months, so it's advisable to start early.",
    category: "documentation",
    relatedQuestions: ["What documents do I need for my PR application?", "How do I get my foreign documents translated?"]
  },
  {
    question: "Can I include my family in my PR application?",
    answer: "Yes! You can include your spouse/partner and dependent children in your application as accompanying family members. Dependent children are typically those under 22 years of age who are not married or in a common-law relationship. Even if your family members don't immediately immigrate with you, it's advisable to include them in your initial application for future sponsorship flexibility.",
    category: "family",
    relatedQuestions: ["What is family sponsorship?", "Can I sponsor my parents and grandparents?"]
  },
  {
    question: "What is family sponsorship?",
    answer: "Family sponsorship is a program that allows Canadian citizens and permanent residents to sponsor eligible family members for permanent residence. Sponsors must meet income requirements and sign an undertaking to financially support the sponsored family members for a specific period (3-20 years, depending on the relationship). Common family sponsorship categories include spouses, partners, dependent children, parents, and grandparents.",
    category: "family",
    relatedQuestions: ["Can I include my family in my PR application?", "Can I sponsor my parents and grandparents?"]
  },
  {
    question: "What is an Express Entry profile?",
    answer: "An Express Entry profile is an online submission to Immigration, Refugees and Citizenship Canada (IRCC) showing your interest in immigrating to Canada. It includes your personal information, qualifications, and claimed CRS points. Once submitted, your profile is ranked against others in the pool, and top-ranking candidates receive Invitations to Apply for permanent residence during regular draws conducted by IRCC.",
    category: "process",
    relatedQuestions: ["How long is my Express Entry profile valid?", "What happens after I receive an ITA?"]
  },
  {
    question: "What are the costs involved in the Canadian PR process?",
    answer: "Costs vary based on immigration pathway and application stage. Common expenses include language test fees ($300-400), Educational Credential Assessment ($200-300), medical examination ($200-300 per person), police certificates ($20-150 per country), biometrics ($85 per person), and application processing fees ($1,325 for principal applicant, $1,325 for spouse, $225 per dependent child). Our experts provide a detailed cost breakdown based on your specific circumstances.",
    category: "costs",
    relatedQuestions: ["Do I need to show proof of funds?", "Are there any additional fees after approval?"]
  },
  {
    question: "Do I need to show proof of funds?",
    answer: "Yes, Express Entry applicants (except those with valid Canadian job offers or currently authorized to work in Canada) must demonstrate sufficient settlement funds. The amount required depends on family size, starting at approximately CAD $13,757 for a single applicant and increasing for each additional family member. These funds must be readily available, and you'll need official bank letters or statements as evidence.",
    category: "costs",
    relatedQuestions: ["What are the costs involved in the Canadian PR process?", "Can I work in Canada during the PR application process?"]
  },
  {
    question: "What documents do I need for my PR application?",
    answer: "Required documents typically include: valid passport, language test results, Educational Credential Assessment, proof of work experience (reference letters, pay stubs, tax documents), police clearance certificates from all countries where you've lived for 6+ months since age 18, medical examination results, proof of funds, and relationship documents if applicable (marriage certificates, birth certificates). Our document specialists ensure you have all necessary documentation properly prepared.",
    category: "documentation",
    relatedQuestions: ["Do I need an Educational Credential Assessment (ECA)?", "How do I get my foreign documents translated?"]
  },
  {
    question: "How do I get my foreign documents translated?",
    answer: "All documents not in English or French must be translated by a certified translator. The translation must include a certified copy of the original document, the translator's certification (name, signature, contact information), and a statement confirming the translation's accuracy. Our team can recommend reputable translation services that meet IRCC requirements.",
    category: "documentation",
    relatedQuestions: ["What documents do I need for my PR application?", "Do I need an Educational Credential Assessment (ECA)?"]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("eligibility");
  const [highlightedQuestions, setHighlightedQuestions] = useState<string[]>([]);
  
  // Filter FAQ items based on search and category
  const filteredFAQs = faqItems.filter(faq => {
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Clear highlights when search term changes
  useEffect(() => {
    setHighlightedQuestions([]);
  }, [searchTerm]);
  
  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about Canadian permanent residency. Our comprehensive FAQ covers eligibility, process, documentation, and more.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              type="text" 
              placeholder="Search questions..." 
              className="pl-10 pr-4 py-3 rounded-full bg-white focus:ring-2 focus:ring-[#2563EB] border border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="text-sm text-gray-500 mt-2 text-left">
              {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'} found for "{searchTerm}"
            </div>
          )}
        </div>
        
        {/* Category Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <Tabs defaultValue="eligibility" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent">
              {faqCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white border border-gray-200 bg-white shadow-sm px-4 py-2"
                >
                  <div className="flex items-center">
                    <span className="mr-2">{category.icon}</span>
                    <span>{category.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="max-w-3xl mx-auto mt-8">
                  <Accordion 
                    type="single" 
                    collapsible 
                    className="w-full"
                    onValueChange={(value) => {
                      if (value) {
                        const selectedFaq = faqItems.find((faq, index) => `item-${index}` === value);
                        if (selectedFaq?.relatedQuestions) {
                          setHighlightedQuestions(selectedFaq.relatedQuestions);
                        }
                      } else {
                        setHighlightedQuestions([]);
                      }
                    }}
                  >
                    {filteredFAQs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`} 
                        className={`mb-4 border ${
                          highlightedQuestions.includes(faq.question) 
                            ? 'border-[#2563EB] ring-1 ring-[#2563EB]/30' 
                            : 'border-gray-200'
                        } rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md`}
                      >
                        <AccordionTrigger className="px-6 py-4 font-medium text-left hover:bg-gray-50 focus:outline-none text-lg">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                          
                          {faq.relatedQuestions && faq.relatedQuestions.length > 0 && (
                            <div className="mt-6">
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Related Questions:</h4>
                              <div className="flex flex-wrap gap-2">
                                {faq.relatedQuestions.map((question, idx) => (
                                  <button
                                    key={idx}
                                    className="text-sm bg-[#2563EB]/10 text-[#2563EB] px-3 py-1 rounded-full hover:bg-[#2563EB]/20 transition-colors"
                                    onClick={() => {
                                      const targetIndex = faqItems.findIndex(item => item.question === question);
                                      if (targetIndex !== -1) {
                                        setActiveCategory(faqItems[targetIndex].category);
                                        setTimeout(() => {
                                          document.querySelector(`[data-value="item-${targetIndex}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                          (document.querySelector(`[data-value="item-${targetIndex}"]`) as HTMLElement)?.click();
                                        }, 100);
                                      }
                                    }}
                                  >
                                    {question}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  
                  {filteredFAQs.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-medium text-gray-700 mb-2">No Questions Found</h3>
                      <p className="text-gray-600 mb-4">Try adjusting your search term or selecting a different category.</p>
                      <Button 
                        onClick={() => setSearchTerm("")}
                        variant="outline"
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Still Have Questions */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-[#2563EB]/10 to-[#E31937]/10 p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-8">
              Get personalized answers from our Canadian immigration experts. Our team can provide detailed guidance specific to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToAssessment}
                className="bg-[#2563EB] hover:bg-blue-700 text-white"
              >
                Get a Free Assessment
              </Button>
              <Button 
                variant="outline"
                className="border-[#2563EB] text-[#2563EB]"
                onClick={() => {
                  const contactElement = document.getElementById("footer");
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
