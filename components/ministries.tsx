import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, GraduationCap, Crown, Users, Handshake, Heart, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Ministries() {
  const ministries = [
    {
      icon: Baby,
      url : "/children",
      title: "Children's Ministry",
      description: "Ages 0-12",
      content:
        "Fun, safe, and engaging programs that help children learn about God's love through stories, games, and activities.",
    },
    {
      icon: GraduationCap,
      url : "/youth",
      title: "Youth Ministry",
      description: "Ages 13-18",
      content:
        "Dynamic programs designed to help teenagers navigate life's challenges while building strong friendships and faith.",
    },
    {
      icon: Crown,
      url : "/women",
      title: "Worship Ministry",
      description: "All Ages",
      content:
        "Join our choir, band, or technical team to help create meaningful worship experiences for our congregation.",
    },
  ]

  return (
    <section id="ministries" className="scroll-mt-24 py-12 bg-gradient-to-b from-blue-100 via-white to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Ministries</h3>
          <p className="text-lg text-gray-600">Find your place to grow and serve</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="border-2 border-sky-100 bg-blue-50 hover:bg-sky-50 transition-colors duration-300">
              <CardHeader>
                <ministry.icon className="h-10 w-10 text-sky-600 mb-3" />
                <CardTitle>{ministry.title}</CardTitle>
                <CardDescription>{ministry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{ministry.content}</p>
                <Link href={ministry.url} className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
