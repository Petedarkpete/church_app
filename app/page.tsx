import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServiceTimes from "@/components/service-times"
import Testimonials from "@/components/testimonials"
import AboutSection from "@/components/about-section"
import Ministries from "@/components/ministries"
import Events from "@/components/events"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import PastSermons from "@/components/sermons"

import "animate.css"
import FadeInSection from "@/components/FadeInSection";


export default function ChurchWebsite() {
  const cardStyle =
  "border-2 border-sky-100 bg-blue-100 hover:bg-sky-50 transition-colors duration-300";

  const smallCardStyle =
  "animate-gradient bg-gradient-to-r from-blue-100 via-white to-blue-200";
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FadeInSection><ServiceTimes /></FadeInSection>
      <FadeInSection><AboutSection /></FadeInSection>
      {/* <FadeInSection><Testimonials /></FadeInSection>
      <FadeInSection><PastSermons /></FadeInSection> */}
      
      <FadeInSection><Ministries /></FadeInSection>
      {/* <FadeInSection><Events /></FadeInSection> */}
      <FadeInSection><ContactSection /></FadeInSection>
      <Footer />
    </div>
  );
}
