import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Am I eligible for Canadian PR?",
    answer: "Eligibility depends on age, education, work experience, language proficiency, and adaptability factors. Our experts will assess your profile and guide you through the best pathway."
  },
  {
    question: "How long does the PR process take?",
    answer: "Express Entry applications typically take 6-8 months from ITA to PR, while PNP streams may take 12-18 months. Family sponsorship usually takes 12-24 months."
  },
  {
    question: "How does the CRS points system work?",
    answer: "The Comprehensive Ranking System evaluates factors such as age, education, work experience, language skills, and adaptability. Higher scores improve your chances of receiving an invitation to apply."
  },
  {
    question: "Do I need an Educational Credential Assessment (ECA)?",
    answer: "Yes, an ECA is required to verify that your foreign education meets Canadian standards. It's mandatory for Express Entry programs to claim points for education."
  },
  {
    question: "Can I include my family in my PR application?",
    answer: "Yes! You can include your spouse/partner and dependent children in your application as accompanying family members."
  },
  {
    question: "What is an Express Entry profile?",
    answer: "An Express Entry profile is an online submission to IRCC showing your interest in immigrating to Canada. It includes your personal information, qualifications, and claimed CRS points."
  },
  {
    question: "What are the costs involved in the Canadian PR process?",
    answer: "Costs vary based on immigration pathway and application stage. Common expenses include language test fees, ECA fees, police certificates, medical exams, and application processing fees. Our experts provide a detailed cost breakdown."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Canadian permanent residency.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-5 py-4 font-medium text-left hover:bg-gray-50 focus:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need more specific information? Contact our regulated Canadian immigration consultants for expert advice tailored to your situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
