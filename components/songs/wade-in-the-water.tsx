"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, SkipBack, SkipForward } from "lucide-react"

export default function WorshipSong() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showLyrics, setShowLyrics] = useState(true) // New state for lyrics visibility
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", () => setIsPlaying(false))

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    const newTime = (clickX / width) * duration

    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const lyrics = [
    { time: "0:00", text: "[Chorus]" },
    { time: "0:15", text: "Wade in the water" },
    { time: "0:20", text: "We dey wade in the water" },
    { time: "0:25", text: "Children wade in the water" },
    { time: "0:30", text: "God said he's gonna trouble the water" },
    { time: "0:35", text: "Wade in the water" },
    { time: "0:40", text: "We dey wade in the water" },
    { time: "0:45", text: "Children wade in the water" },
    { time: "0:50", text: "God's gonna trouble the water" },
    { time: "0:55", text: "" },
    { time: "1:00", text: "[Verse 1]" },
    { time: "1:05", text: "We are the sons and the daughters" },
    { time: "1:10", text: "We gotta stand up and make it loud" },
    { time: "1:15", text: "Just like our God told the Pharaoh" },
    { time: "1:20", text: '"Let my people go, go"' },
    { time: "1:25", text: "We are a new generation" },
    { time: "1:30", text: "From the ones who have come before" },
    { time: "1:35", text: "He's calling us into freedom" },
    { time: "1:40", text: "Let my people go, go" },
    { time: "1:45", text: "" },
    { time: "1:50", text: "[Chorus]" },
    { time: "1:55", text: "Wade in the water" },
    { time: "2:00", text: "We dey wade in the water" },
    { time: "2:05", text: "Children wade in the water" },
    { time: "2:10", text: "God said he's gonna trouble the water" },
    { time: "2:15", text: "Wade in the water" },
    { time: "2:20", text: "We dey wade in the water" },
    { time: "2:25", text: "Children wade in the water" },
    { time: "2:30", text: "God's gonna trouble the water" },
    { time: "2:35", text: "" },
    { time: "2:40", text: "[Verse 2]" },
    { time: "2:45", text: "We are the sons and the daughters" },
    { time: "2:50", text: "We gotta stand up and make it loud" },
    { time: "2:55", text: "Just like our God told the Pharaoh" },
    { time: "3:00", text: '"Let my people go, go"' },
    { time: "3:05", text: "We are a new generation" },
    { time: "3:10", text: "From the ones who have come before" },
    { time: "3:15", text: "He's calling us into freedom" },
    { time: "3:20", text: "Let my people go, go" },
    { time: "3:25", text: "" },
    { time: "3:30", text: "[Bridge]" },
    { time: "3:35", text: "We no go shy, no go shame" },
    { time: "3:40", text: "Ibi your papa God wey 'e make the heavens" },
    { time: "3:45", text: "If you know sey you no want trouble" },
    { time: "3:50", text: "Let my people go, go" },
    { time: "3:55", text: "With blood, sweat and tears" },
    { time: "4:00", text: "That we've gathered through the years" },
    { time: "4:05", text: "If you know sey you no want trouble" },
    { time: "4:10", text: "Let my people go, go" },
    { time: "4:15", text: "" },
    { time: "4:20", text: "[Chorus]" },
    { time: "4:25", text: "Wade in the water" },
    { time: "4:30", text: "We dey wade in the water" },
    { time: "4:35", text: "Children wade in the water" },
    { time: "4:40", text: "God said he's gonna trouble the water" },
    { time: "4:45", text: "Wade in the water" },
    { time: "4:50", text: "We dey wade in the water" },
    { time: "4:55", text: "Children wade in the water" },
    { time: "5:00", text: "God's gonna trouble the water" },
    { time: "5:05", text: "" },
    { time: "5:10", text: "[Outro]" },
    { time: "5:15", text: "Oh-oh-oh, oh, oh-ooh-oh" },
    { time: "5:20", text: "Oh, oh, oh-ooh-oh" },
    { time: "5:25", text: "Oh, oh, oh-ooh-oh, oh" },
    { time: "5:30", text: "Oh-oh-oh, oh, oh-ooh-oh" },
    { time: "5:35", text: "Oh, oh, oh-ooh-oh" },
    { time: "5:40", text: "Oh, oh, oh-ooh-oh, oh" },
    { time: "5:45", text: "Oh-oh-oh" },
    { time: "5:50", text: "" },
    { time: "5:55", text: "[Final Chorus]" },
    { time: "6:00", text: "Wade in the water" },
    { time: "6:05", text: "We dey wade in the water" },
    { time: "6:10", text: "Children wade in the water" },
    { time: "6:15", text: "God's said he's gonna trouble the water" },
    { time: "6:20", text: "Wade in the water" },
    { time: "6:25", text: "We dey wade in the water" },
    { time: "6:30", text: "Children wade in the water" },
    { time: "6:35", text: "God's gonna trouble the water" },
    { time: "6:40", text: "" },
    { time: "6:45", text: "[Outro Vocals]" },
    { time: "6:50", text: "Oh-oh-oh, oh, oh-ooh-oh" },
    { time: "6:55", text: "Oh, oh, oh-ooh-oh" },
    { time: "7:00", text: "Oh, oh, oh-ooh-oh, oh" },
    { time: "7:05", text: "Oh-oh-oh, oh, oh-ooh-oh" },
    { time: "7:10", text: "Oh, oh, oh-ooh-oh" },
    { time: "7:15", text: "Oh, oh, oh-ooh-oh, oh" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sticky Audio Player */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Volume2 className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold truncate">Wade in the Water</h2>
                  <p className="text-blue-100">Contemporary Gospel</p>

                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div
                      className="w-full bg-white bg-opacity-30 rounded-full h-2 cursor-pointer"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-100"
                        style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-blue-100 mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                    <SkipBack className="w-5 h-5" />
                  </Button>

                  <Button
                    onClick={togglePlay}
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 rounded-full w-12 h-12 p-0"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </Button>

                  <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                    <SkipForward className="w-5 h-5" />
                  </Button>

                  {/* Toggle Lyrics Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white hover:bg-opacity-20 ml-4"
                    onClick={() => setShowLyrics(!showLyrics)}
                  >
                    {showLyrics ? "Hide Lyrics" : "Show Lyrics"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/placeholder-audio.mp3" // Replace with your actual audio file
        preload="metadata"
      />

      {/* Lyrics Section */}
      {showLyrics && ( // Conditional render for lyrics
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Wade in the Water</h1>
            <p className="text-lg text-gray-600">Contemporary Gospel</p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                {lyrics.map((line, index) => (
                  <div key={index}>
                    {line.text === "" ? (
                      <div className="h-4" />
                    ) : line.text.startsWith("[") ? (
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">{line.text}</h3>
                    ) : (
                      <p className="text-gray-700 leading-relaxed text-lg mb-2">{line.text}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-500 italic">
                  {"He brought them out of Egypt and performed wonders in the Red Sea" + " - Psalm 106:9"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
