import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">The Canadian PR Process</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Your journey to Canada made simple with our guided approach.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>

          {/* Timeline steps */}
          <div className="space-y-0">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row md:items-center mb-16 relative">
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-lg md:mr-10 transform transition-all hover:scale-105 border-l-4 border-blue-600">
                  <div className="md:hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Initial Assessment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We conduct a comprehensive evaluation of your profile, analyzing your education, work experience, language proficiency, and other factors to identify the most promising immigration pathways for your unique situation.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div className="hidden md:block h-full"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row md:items-center mb-16 relative">
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 order-1 md:order-2">
                <div className="bg-white p-8 rounded-xl shadow-lg md:ml-10 transform transition-all hover:scale-105 border-r-4 border-blue-600">
                  <div className="md:hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Express Entry Profile Creation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experts meticulously create and optimize your Express Entry profile to maximize your Comprehensive Ranking System (CRS) score, strategically positioning you for success in the selection pool.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16 order-2 md:order-1">
                <div className="hidden md:block h-full"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row md:items-center mb-16 relative">
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-lg md:mr-10 transform transition-all hover:scale-105 border-l-4 border-blue-600">
                  <div className="md:hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Provincial Nomination</h3>
                  <p className="text-gray-600 leading-relaxed">
                    For eligible candidates, we strategically pursue provincial nominations to significantly enhance your Express Entry profile with additional points or create alternative immigration pathways tailored to your specific strengths.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div className="hidden md:block h-full"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row md:items-center mb-16 relative">
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 order-1 md:order-2">
                <div className="bg-white p-8 rounded-xl shadow-lg md:ml-10 transform transition-all hover:scale-105 border-r-4 border-blue-600">
                  <div className="md:hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Invitation to Apply</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upon receiving an Invitation to Apply (ITA), our document specialists guide you through the complete permanent residence application process with our proven documentation strategy, ensuring accuracy and compliance.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16 order-2 md:order-1">
                <div className="hidden md:block h-full"></div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row md:items-center relative">
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">5</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-lg md:mr-10 transform transition-all hover:scale-105 border-l-4 border-blue-600">
                  <div className="md:hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Permanent Residence Approval</h3>
                  <p className="text-gray-600 leading-relaxed">
                    After your application is approved, we assist with landing procedures, provide comprehensive settlement guidance, and ensure a smooth transition as you begin your new life in Canada.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div className="hidden md:block h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}