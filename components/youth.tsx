import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Heart } from "lucide-react"

export default function YouthTeam() {
  const youthLeaders = [
    {
      name: "Pastor Kinyua",
      role: "Youth Patron",
      image: "/images/pastor1.jpg",
      bio: "Leading our youth with passion and purpose for over 5 years.",
    },
    {
      name: "Joel Gitau",
      role: "Youth Chairman",
      image: "/images/pastor2.jpg",
      bio: "Mentoring teens and organizing youth activities with love.",
    },
    {
      name: "Kimani",
      role: "Youth Treasurer",
      image: "/images/pastor3.jpg",
      bio: "Coordinating events and building strong youth community.",
    },
  ]

  const upcomingEvents = [
    {
      title: "Youth Night",
      date: "Every Friday 7:00 PM",
      description: "Games, worship, and fellowship for ages 13-18",
    },
    {
      title: "Youth Retreat",
      date: "January 15-17, 2025",
      description: "Weekend getaway for spiritual growth and bonding",
    },
    {
      title: "Community Service",
      date: "Last Saturday of each month",
      description: "Serving our community together",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Youth Team</h1>
          <p className="text-xl mb-8">Empowering the next generation to live for Christ</p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm">Ages 13-18</p>
            </div>
            <div>
              <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm">Weekly Meetings</p>
            </div>
            <div>
              <Heart className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm">Growing in Faith</p>
            </div>
          </div>
        </div>
      </div>

      {/* Youth Leaders Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Youth Leaders</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {youthLeaders.map((leader, index) => (
            <Card key={index} className="text-center border-2 border-sky-100 bg-blue-100 hover:bg-sky-50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 border-sky-100 bg-blue-100 hover:bg-sky-50 transition-colors duration-300">
                <CardHeader>
                  <h3 className="text-xl font-bold text-blue-600">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Join Our Youth Community</h2>
          <p className="text-lg text-gray-600 mb-8">
            Come as you are and discover your purpose in Christ alongside other young believers.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Get Involved</Button>
        </div>
      </div> */}
    </div>
  )
}
