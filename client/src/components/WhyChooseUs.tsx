import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">EXPERT SOLUTIONS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Common Immigration Challenges
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Our specialized team provides solutions to your most pressing immigration concerns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Point 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Confused About Express Entry Eligibility?</h3>
                <p className="text-gray-600">
                  Our Express Entry specialists analyze your profile comprehensively to identify the ideal immigration program match, maximizing your CRS score and ensuring successful entry into the pool. 📊
                </p>
              </div>
            </div>
          </div>

          {/* Point 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-red-600">
            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Struggling with CRS Points Calculation?</h3>
                <p className="text-gray-600">
                  Our point-optimization experts conduct thorough assessments to identify every legitimate point-scoring opportunity in your profile, frequently finding 10-20 additional points others miss. 📝
                </p>
              </div>
            </div>
          </div>

          {/* Point 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-green-600">
            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Overwhelmed by Documentation Requirements?</h3>
                <p className="text-gray-600">
                  Our document specialists meticulously verify every document against IRCC requirements, ensuring your evidence meets the exact standards that prevent costly rejections. ⏱️
                </p>
              </div>
            </div>
          </div>

          {/* Point 4 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-purple-600">
            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-600">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Frustrated by Lengthy Processing Delays?</h3>
                <p className="text-gray-600">
                  Our streamlined process and strategic application timing reduce processing delays by 25% compared to self-managed applications, with proactive follow-ups to keep your case moving. 🌐
                </p>
              </div>
            </div>
          </div>

          {/* Point 5 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-yellow-600">
            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl font-bold text-yellow-600">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Uncertain About Provincial Nomination Options?</h3>
                <p className="text-gray-600">
                  Our PNP specialists stay current with the frequently changing eligibility criteria across all Canadian provinces and territories, directing you only to programs where you'll qualify. ❌
                </p>
              </div>
            </div>
          </div>

          {/* Point 6 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-indigo-600">
            <div className="flex items-start gap-4">
              <div className="min-w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-bold text-indigo-600">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Recovering from a Previous Rejection?</h3>
                <p className="text-gray-600">
                  Our rejection-recovery team specializes in analyzing previous refusals, addressing the specific issues, and creating compelling new applications with 94% success rate for previously refused clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:translate-y-[-3px] group"
            size="lg"
            onClick={() => {
              const element = document.getElementById("assessment");
              if (element) {
                const navbarHeight = 80;
                const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Get a Personalized Assessment
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}