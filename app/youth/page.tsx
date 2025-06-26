import Header from "@/components/header";
import Footer from "@/components/footer";
import Youth from "@/components/youth";

import "animate.css"
import FadeInSection from "@/components/FadeInSection";

export default function SermonsPage() {
  return (
    <div>
      <Header />
      <FadeInSection><Youth /></FadeInSection>
      <Footer />
    </div>
  )
}

