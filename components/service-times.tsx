import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen, Heart } from "lucide-react"

export default function ServiceTimes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Us for Worship</h3>
          <p className="text-lg text-gray-600">Come as you are, leave transformed</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-2 border-sky-100">
            <CardHeader>
              <Clock className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Sunday Worship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900 mb-2">9:00 AM & 11:00 AM</p>
              <p className="text-gray-600">Traditional & Contemporary Services</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-sky-100">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Bible Study</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900 mb-2">Wednesday 7:00 PM</p>
              <p className="text-gray-600">Deep dive into God's Word</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-sky-100">
            <CardHeader>
              <Heart className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Prayer Meeting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900 mb-2">Friday 6:30 PM</p>
              <p className="text-gray-600">Come together in prayer</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
