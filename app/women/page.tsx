import Header from "@/components/header";
import Footer from "@/components/footer";
import WomensTeam from "@/components/women";

import "animate.css"
import FadeInSection from "@/components/FadeInSection";

export default function SermonsPage() {
  return (
    <div>
      <Header />
      <FadeInSection><WomensTeam /></FadeInSection>
      <Footer />
    </div>
  )
}
