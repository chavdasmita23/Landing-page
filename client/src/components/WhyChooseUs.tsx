import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Vvelox Global Business Advisory?</h2>
          <p className="text-lg text-gray-600">
            We specialize in turning complex immigration processes into clear pathways to your Canadian dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expertise & Experience</h3>
              <p className="text-gray-600 mb-6">
                Our licensed consultants have successfully guided thousands of clients through the Canadian immigration process with a success rate that exceeds industry standards.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Learn more</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Approach</h3>
              <p className="text-gray-600 mb-6">
                We recognize each client's unique situation and develop tailored solutions designed to address your specific needs and maximize your chances of success.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Learn more</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Efficiency & Timeliness</h3>
              <p className="text-gray-600 mb-6">
                Our streamlined processes prevent unnecessary delays, keeping your application on track with all deadlines met and documentation completed accurately.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Learn more</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transparent Communication</h3>
              <p className="text-gray-600 mb-6">
                We maintain clear, open communication throughout your application process, ensuring you're always informed about your case status and next steps.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Learn more</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Support</h3>
              <p className="text-gray-600 mb-6">
                From initial assessment to post-landing assistance, we provide end-to-end support for all aspects of your immigration journey, including settlement guidance.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Learn more</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ethical Practice</h3>
              <p className="text-gray-600 mb-6">
                We adhere to the highest ethical standards, ensuring all information and advice provided is accurate, honest, and in compliance with Canadian immigration laws.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Learn more</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold shadow-lg"
            size="lg"
          >
            Start Your Immigration Journey
          </Button>
        </div>
      </div>
    </section>
  );
}