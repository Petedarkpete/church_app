import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen, Heart } from "lucide-react"

export default function ServiceTimes() {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-100 via-white to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-center mb-12 animate__animated animate__fadeInUp">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Us for Worship</h3>
            <p className="text-lg text-gray-600">Come as you are, leave transformed</p>
          </div>

        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-2 border-sky-100 bg-blue-100 hover:bg-sky-50 transition-colors duration-300">
            <CardHeader>
              <Clock className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Sunday Morning Glory</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900 mb-2">8:00 AM & 10:00 AM</p>
              <p className="text-gray-600">Get to experience God</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-sky-100 bg-blue-100 hover:bg-sky-50 transition-colors duration-300">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Main Sunday Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900 mb-2">10:00 AM & 1:00 PM</p>
              <p className="text-gray-600">Deep dive into God's Word</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-sky-100 bg-blue-100 hover:bg-sky-50 transition-colors duration-300">
            <CardHeader>
              <Heart className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Wednesday Fellowship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900 mb-2">6:00 PM & 9:00 PM</p>
              <p className="text-gray-600">Come together in prayer</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
