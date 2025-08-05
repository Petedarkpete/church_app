import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServiceTimes from "@/components/service-times"
import AboutSection from "@/components/about-section"
import Ministries from "@/components/ministries"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

import "animate.css"
import FadeInSection from "@/components/FadeInSection";


export default function ChurchWebsite() {

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
