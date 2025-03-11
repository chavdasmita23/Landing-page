import { Button } from "@/components/ui/button";

export default function CTABanner() {
  const scrollToAssessment = () => {
    const element = document.getElementById("assessment");
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#2563EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          🚀 BEGIN YOUR CANADIAN JOURNEY TODAY 🚀
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Take the first step toward your new life in Canada with our expert guidance.
        </p>
        <Button
          onClick={scrollToAssessment}
          className="inline-block bg-white text-[#2563EB] hover:bg-gray-100 font-bold py-3 px-8 shadow-lg"
          size="lg"
        >
          Check Your Eligibility Now
        </Button>
      </div>
    </section>
  );
}
