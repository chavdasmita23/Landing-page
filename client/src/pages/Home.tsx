import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyCanada from "@/components/WhyCanada";
import WhyChooseUs from "@/components/WhyChooseUs";
import PRPathways from "@/components/PRPathways";
import OurServices from "@/components/OurServices";
import ProcessTimeline from "@/components/ProcessTimeline";
import AssessmentForm from "@/components/AssessmentForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyCanada />
      <WhyChooseUs />
      <PRPathways />
      <OurServices />
      <ProcessTimeline />
      <AssessmentForm />
      <FAQ />
      <Footer />
    </>
  );
}
