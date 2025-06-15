import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServiceTimes from "@/components/service-times"
import AboutSection from "@/components/about-section"
import Ministries from "@/components/ministries"
import Events from "@/components/events"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function ChurchWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServiceTimes />
      <AboutSection />
      <Ministries />
      <Events />
      <ContactSection />
      <Footer />
    </div>
  )
}
