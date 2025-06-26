import Songs from "../../components/songs/wade-in-the-water"
import Header from "../../components/header";

import "animate.css"
import FadeInSection from "@/components/FadeInSection";

export default function WorshipPage() {
  return (
    <div>
      <Header />
      <FadeInSection><Songs /></FadeInSection>
      <Songs />
    </div>
  )
}
