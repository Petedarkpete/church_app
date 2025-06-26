import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Coffee, BookOpen, Flower } from "lucide-react"

export default function WomensTeam() {
  const womensLeaders = [
    {
      name: "Pastor Maria Rodriguez",
      role: "Women's Ministry Leader",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Empowering women to discover their purpose and calling in Christ for over 10 years.",
    },
    {
      name: "Ruth Kimani",
      role: "Bible Study Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Leading women deeper into God's Word through engaging Bible studies.",
    },
    {
      name: "Grace Ochieng",
      role: "Outreach Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Organizing community outreach and service projects for women.",
    },
    {
      name: "Joy Wanjiru",
      role: "Fellowship Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Creating meaningful connections and friendships among women.",
    },
  ]

  const ministryPrograms = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Bible Study",
      description: "Weekly Bible studies exploring God's Word together",
      schedule: "Wednesdays 10:00 AM",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Coffee & Connection",
      description: "Monthly fellowship gatherings for encouragement",
      schedule: "First Saturday 9:00 AM",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Prayer Circle",
      description: "Supporting each other through prayer and intercession",
      schedule: "Fridays 6:00 PM",
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Women's Retreat",
      description: "Annual retreat for spiritual renewal and bonding",
      schedule: "March 2025",
    },
  ]

  const upcomingEvents = [
    {
      title: "Women's Conference 2025",
      date: "February 14-15, 2025",
      description: "Two-day conference focusing on 'Walking in Purpose'",
      featured: true,
    },
    {
      title: "Mother's Day Celebration",
      date: "May 11, 2025",
      description: "Special service honoring mothers and mother figures",
      featured: false,
    },
    {
      title: "Community Service Day",
      date: "January 25, 2025",
      description: "Serving at the local women's shelter",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Women's Ministry</h1>
          <p className="text-xl mb-8">Empowering women to live boldly for Christ</p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Sisterhood</p>
            </div>
            <div>
              <BookOpen className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Bible Study</p>
            </div>
            <div>
              <Coffee className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Fellowship</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Heart</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Women's Ministry exists to create a safe space where women can grow in their relationship with God, build
          meaningful friendships, and discover their unique calling. We believe every woman has a story worth telling
          and a purpose worth pursuing. Through Bible study, fellowship, and service, we encourage one another to live
          authentically and boldly for Christ.
        </p>
      </div>

      {/* Women's Leaders Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {womensLeaders.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Ministry Programs */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministryPrograms.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4 flex justify-center">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-3">{program.description}</p>
                  <p className="text-blue-600 font-medium text-sm">{program.schedule}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${event.featured ? "ring-blue-500 bg-blue-50" : ""}`}
              >
                <CardContent className="p-6">
                  {event.featured && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Featured Event
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{event.title}</h3>
                  <p className="text-gray-600 font-medium mb-3">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Join Our Sisterhood</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're new to faith or have been walking with God for years, you belong here. Come as you are and
            discover the joy of authentic Christian community.
          </p>
          <div className="space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Join Us</Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-xl italic mb-4">
            "She is clothed with strength and dignity; she can laugh at the days to come."
          </blockquote>
          <p className="text-blue-200">- Proverbs 31:25</p>
        </div>
      </div>
    </div>
  )
}
