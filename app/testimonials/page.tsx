import Header from "@/components/header";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

import "animate.css"
import FadeInSection from "@/components/FadeInSection";

export default function SermonsPage() {
  return (
    <div>
      <Header />
      <FadeInSection><Testimonials /></FadeInSection>
      <Footer />
    </div>
  )
}
