import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Component() {
  const pastors = [
    {
      name: "Pastor Michael Johnson",
      title: "Senior Pastor",
      image: "/images/pastor1.jpg",
      testimonial:
        "Serving this congregation has been the greatest blessing of my life. Watching families grow in faith and seeing lives transformed by God's love reminds me daily why I was called to ministry.",
      initials: "MJ",
    },
    {
      name: "Pastor Sarah Williams",
      title: "Associate Pastor",
      image: "/images/pastor2.jpg",
      testimonial:
        "The heart of our ministry is building authentic relationships. Every day I'm amazed by the strength and compassion of our church family as we walk together in faith.",
      initials: "SW",
    },
    {
      name: "Pastor David Chen",
      title: "Youth Pastor",
      image: "/images/pastor3.jpg",
      testimonial:
        "Working with our young people fills me with hope for the future. Their passion for God and desire to make a difference in the world inspires me to be a better leader and servant.",
      initials: "DC",
    },
    {
      name: "Pastor Maria Rodriguez",
      title: "Children's Pastor",
      image: "/placeholder.svg?height=256&width=192",
      testimonial:
        "There's nothing more precious than seeing a child's face light up when they understand God's love for them. Our children's ministry is where faith takes root and grows.",
      initials: "MR",
    },
  ]

  return (
  <section id="testimonials" className="scroll-mt-24 py-12 bg-gradient-to-b from-blue-100 via-white to-red-100">

    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pastoral Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the dedicated servants who lead our congregation with wisdom, compassion, and unwavering faith.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {pastors.map((pastor, index) => (
          <Card key={index} className="bg-gradient-to-b from-blue-100 via-white to-grey-100 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-60 h-64 mx-auto mb-3 overflow-hidden rounded-lg shadow-md">
                  <img
                    src={pastor.image || "/placeholder.svg?height=256&width=192"}
                    alt={pastor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{pastor.name}</h3>
                  <p className="text-blue-600 font-medium">{pastor.title}</p>
                </div>

                <div className="relative">
                  <Quote className="w-4 h-4 text-blue-200 mb-2" />
                  <blockquote className="text-gray-700 leading-relaxed italic">"{pastor.testimonial}"</blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-600 italic">
          "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for
          the work of ministry" - Ephesians 4:11-12
        </p>
      </div>
    </div>
  </section>
  )
}
