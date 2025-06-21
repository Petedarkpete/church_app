import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function Events() {
  const events = [
    {
      badge: { text: "July, 31st", variant: "default" as const },
      title: "Harambee Sunday",
      date: "July 31, 2025 • 2:00 PM & 5:00 PM",
      description:
        "Join us for a special Easter service celebrating the resurrection of Jesus Christ. Special music and message.",
    },
  ]

  return (
    <section id="events" className="scroll-mt-24 py-12 bg-gradient-to-b from-red-100 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
          <p className="text-lg text-gray-600">Join us for these special occasions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant={event.badge.variant}
                    className={event.badge.variant === "default" ? "bg-sky-100 text-sky-800" : ""}
                  >
                    {event.badge.text}
                  </Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
