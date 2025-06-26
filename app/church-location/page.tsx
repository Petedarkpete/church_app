import ChurchLocation from "@/components/church-location";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "animate.css";
import FadeInSection from "@/components/FadeInSection";

export default function LocationPage() {
  return (
    <div>
      <Header />
      <FadeInSection><ChurchLocation /></FadeInSection>
      <Footer />
    </div>
  );
}