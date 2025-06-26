import Church from "@/components/church";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "animate.css"
import FadeInSection from "@/components/FadeInSection";

export default function ChurchLeadershipPage() {
  return (
    <div>
    <Header />
      <FadeInSection><Church /></FadeInSection>
    <Footer />
    </div>
  )
}
