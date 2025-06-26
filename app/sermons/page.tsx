import PastSermons from "@/components/sermons"
import Header from "@/components/header";
import Footer from "@/components/footer";
import FadeInSection from "@/components/FadeInSection";

export default function SermonsPage() {
  return (
    <div>
      <Header />
      <FadeInSection><PastSermons /></FadeInSection>
      <Footer />
    </div>
  )
}
