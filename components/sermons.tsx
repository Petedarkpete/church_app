"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, BookOpen, Play } from "lucide-react"

export default function PastSermons() {
  const sermons = [
    {
      title: "Walking in Faith Through Difficult Times",
      pastor: "Pastor Michael Johnson",
      date: "December 15, 2024",
      scripture: "Romans 8:28-39",
      description:
        "Discover how God's love sustains us through life's greatest challenges and how we can find hope even in our darkest moments.",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/placeholder.svg?height=200&width=356",
      duration: "32 min",
    },
    {
      title: "The Power of Community in Christ",
      pastor: "Pastor Sarah Williams",
      date: "December 8, 2024",
      scripture: "Acts 2:42-47",
      description:
        "Exploring how authentic Christian community transforms lives and strengthens our faith journey together.",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/placeholder.svg?height=200&width=356",
      duration: "28 min",
    },
    {
      title: "Living with Purpose and Passion",
      pastor: "Pastor David Chen",
      date: "December 1, 2024",
      scripture: "Ephesians 2:10",
      description:
        "Understanding God's unique calling on your life and how to live each day with intentional purpose and divine passion.",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/placeholder.svg?height=200&width=356",
      duration: "35 min",
    },
  ]

  return (
<section id="sermons" className="scroll-mt-24 py-12 bg-gradient-to-b from-red-100 via-white to-blue-100">

    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Sermons</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Catch up on recent messages and be encouraged by God's Word. Each sermon is designed to inspire, challenge,
          and strengthen your faith.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {sermons.map((sermon, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
          >
            <CardHeader className="p-0">
              <div className="relative group">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                    title={sermon.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {sermon.duration}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{sermon.title}</h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{sermon.pastor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{sermon.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <BookOpen className="w-4 h-4" />
                  <span>{sermon.scripture}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">{sermon.description}</p>

                <div className="pt-2">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${sermon.youtubeId}`, "_blank")}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Never Miss a Message</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to our YouTube channel to get notified when new sermons are uploaded.
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Subscribe to Our Channel
          </Button>
        </div>
      </div>
    </div>
</section>
  )
}
