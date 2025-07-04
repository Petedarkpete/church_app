import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-4 bg-gradient-to-b from-red-100 via-white to-bluw-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-lg text-gray-600">We'd love to hear from you</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-sky-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-900">Address</h5>
                  <p className="text-gray-600">
                    123 Faith Street
                    <br />
                    Springfield, IL 62701
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-sky-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-900">Phone</h5>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-sky-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-900">Email</h5>
                  <p className="text-gray-600">info@gracecommunitychurch.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-sky-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-900">Office Hours</h5>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name 
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea id="message" rows={4} placeholder="Tell us more about your inquiry..." />
              </div>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
