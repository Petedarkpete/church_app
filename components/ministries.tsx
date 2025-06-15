import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, GraduationCap, Music, Users, Handshake, Heart, ChevronRight } from "lucide-react"

export default function Ministries() {
  const ministries = [
    {
      icon: Baby,
      title: "Children's Ministry",
      description: "Ages 0-12",
      content:
        "Fun, safe, and engaging programs that help children learn about God's love through stories, games, and activities.",
    },
    {
      icon: GraduationCap,
      title: "Youth Ministry",
      description: "Ages 13-18",
      content:
        "Dynamic programs designed to help teenagers navigate life's challenges while building strong friendships and faith.",
    },
    {
      icon: Music,
      title: "Worship Ministry",
      description: "All Ages",
      content:
        "Join our choir, band, or technical team to help create meaningful worship experiences for our congregation.",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Adults",
      content:
        "Connect with others in intimate settings for Bible study, fellowship, and mutual support throughout the week.",
    },
    {
      icon: Handshake,
      title: "Community Outreach",
      description: "All Ages",
      content:
        "Serve our local community through food drives, volunteer work, and partnerships with local organizations.",
    },
    {
      icon: Heart,
      title: "Care Ministry",
      description: "All Ages",
      content:
        "Providing support, prayer, and practical help to those going through difficult times or life transitions.",
    },
  ]

  return (
    <section id="ministries" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Ministries</h3>
          <p className="text-lg text-gray-600">Find your place to grow and serve</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ministry.icon className="h-10 w-10 text-sky-600 mb-3" />
                <CardTitle>{ministry.title}</CardTitle>
                <CardDescription>{ministry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{ministry.content}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
