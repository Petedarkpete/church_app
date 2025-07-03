"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Navigation,
  ExternalLink,
  Calendar,
  Users,
  Accessibility,
  Wifi,
  Coffee,
} from "lucide-react"

export default function ChurchLocation() {
  const [mapLoaded, setMapLoaded] = useState(false)

  const TopCard = 
    "scroll-mt-12 bg-gradient-to-b from-blue-50 via-white to-blue-400";

  const cardStyle =
  "border-2 border-sky-100 bg-blue-100 hover:bg-sky-50 transition-colors duration-300";

  const smallCardStyle =
  "animate-gradient bg-gradient-to-r from-blue-100 via-white to-blue-200";


  // Church details - replace with actual church information
  const churchInfo = {
    name: "Church of God Githurai 45",
    address: "Church of God Githurai 45, Kenya",
    phone: "(555) 123-4567",
    email: "info@gracecommunity.org",
    website: "www.gracecommunity.org",
    coordinates: {
      lat: 39.7817,
      lng: -89.6501,
    },
  }


  const facilities = [
    { icon: Car, label: "Free Parking Available" },
    { icon: Accessibility, label: "Wheelchair Accessible" },
    { icon: Coffee, label: "Coffee & Fellowship" },
    { icon: Users, label: "Children's Ministry" },
  ]

  const openInGoogleMaps = () => {
    const query = encodeURIComponent(churchInfo.address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
  }

  const openDirections = () => {
    const query = encodeURIComponent(churchInfo.address)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${query}`, "_blank")
  }

  const callChurch = () => {
    window.open(`tel:${churchInfo.phone}`)
  }

  const emailChurch = () => {
    window.open(`mailto:${churchInfo.email}`)
  }

  return (

    <div className={`min-h-screen ${TopCard}`}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Us</h1>
            <p className="text-lg text-gray-600">Visit us for worship, fellowship, and community</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className={`h-full ${cardStyle}`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Church Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Embedded Google Map */}
                  <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                    {!mapLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">Loading map...</p>
                        </div>
                      </div>
                    )}
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4672451282572!2d36.922538819188084!3d-1.2060171350632747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f001a54ac73%3A0x3935e396f3efbdb1!2sChurch%20of%20God%20Githurai%2045!5e0!3m2!1sen!2ske!4v1750790678724!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => setMapLoaded(true)}
                      className="rounded-lg"
                    />
                  </div>

                  {/* Address and Action Buttons */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900">{churchInfo.name}</h3>
                      <p className="text-gray-600 mt-1">{churchInfo.address}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button onClick={openDirections} className="bg-blue-600 hover:bg-blue-700">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button onClick={openInGoogleMaps} variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Church Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className={`${cardStyle}`}>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <button onClick={callChurch} className="text-blue-600 hover:underline">
                      {churchInfo.phone}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <button onClick={emailChurch} className="text-blue-600 hover:underline">
                      {churchInfo.email}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a
                      href={`https://${churchInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {churchInfo.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Facilities */}
            <Card className={`${cardStyle}`}>
              <CardHeader>
                <CardTitle>Facilities & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <facility.icon className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">{facility.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className={`${cardStyle}`}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={callChurch} variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Church
                </Button>
                <Button onClick={emailChurch} variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => window.open("https://calendar.google.com", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <Card className={`h-full ${smallCardStyle}`}>
            <CardHeader>
              <CardTitle>Visitor Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">First Time Visitors</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Arrive 15 minutes early for parking and seating</li>
                    <li>• Visitor parking is available in the main lot</li>
                    <li>• Greeters will be available to help you find your way</li>
                    <li>• Children's ministry available during all services</li>
                    <li>• Casual dress is welcome</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Parking & Accessibility</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Free parking in main lot and street parking</li>
                    <li>• Handicap accessible entrance on the east side</li>
                    <li>• Elevator access to all floors</li>
                    <li>• Reserved parking for visitors and families with young children</li>
                    <li>• Additional parking available across the street</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
