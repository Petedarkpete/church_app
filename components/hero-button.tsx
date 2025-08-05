import { Button } from "@/components/ui/button"

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Watch Service – Blue Button with Google Maps link */}
      <a
        href="https://www.google.com/maps/place/Grace+Community+Church"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
          Watch Online
        </Button>
      </a>

      {/* Watch Online – YouTube Button */}

      <a
        href="https://www.google.com/maps/place/Grace+Community+Church"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
          Visit Us
        </Button>
      </a>
    </div>
  )
}
