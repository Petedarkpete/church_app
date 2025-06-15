import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function Events() {
  const events = [
    {
      badge: { text: "This Sunday", variant: "default" as const },
      title: "Easter Celebration",
      date: "April 9, 2024 • 9:00 AM & 11:00 AM",
      description:
        "Join us for a special Easter service celebrating the resurrection of Jesus Christ. Special music and message.",
    },
    {
      badge: { text: "Next Week", variant: "outline" as const },
      title: "Community BBQ",
      date: "April 15, 2024 • 12:00 PM",
      description:
        "Free community barbecue following the morning service. Great food, fellowship, and fun for the whole family.",
    },
    {
      badge: { text: "April 20", variant: "outline" as const },
      title: "Youth Mission Trip",
      date: "April 20-22, 2024",
      description:
        "Our youth group will be serving at a local homeless shelter. Fundraising dinner to support the trip.",
    },
  ]

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
          <p className="text-lg text-gray-600">Join us for these special occasions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
