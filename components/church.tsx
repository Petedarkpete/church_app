import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Shield } from "lucide-react"

export default function ChurchLeadership() {
  const leadership = [
    {
      name: "Elder John Mwangi",
      role: "Church Chairman",
      image: "/placeholder.svg?height=300&width=240",
      bio: "Leading our church board with wisdom and integrity for over 12 years. Elder Mwangi brings extensive experience in church governance and spiritual leadership.",
    },
    {
      name: "Sister Faith Njeri",
      role: "Church Coordinator",
      image: "/placeholder.svg?height=300&width=240",
      bio: "Coordinating all church activities and ministries with excellence and dedication. Sister Njeri ensures smooth operations across all church departments.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Church Leadership</h1>
          <p className="text-xl mb-8">Serving with dedication, leading with love</p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Faithful Leadership</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Servant Hearts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leadership.map((leader, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-48 h-60 mx-auto mb-6 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={leader.image || "/placeholder.svg?height=300&width=240"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{leader.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Church Members Photo */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Church Family</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Church Members"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Together in Faith</h3>
                  <p className="text-gray-600">
                    Our church family united in worship, fellowship, and service to God and our community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Leadership */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Connect with Our Leadership</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our leadership team is here to serve and support you. Feel free to reach out with any questions or concerns.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Contact Leadership</Button>
        </div>
      </div>
    </div>
  )
}
