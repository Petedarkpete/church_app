import { Button } from "@/components/ui/button"
import { Cross } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Cross className="h-8 w-8 text-sky-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Church of God Githurai 45</h1>
              <p className="text-sm text-gray-600">Growing in Faith Together</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-sky-600 font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-sky-600 font-medium">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-sky-600 font-medium">
              Services
            </Link>
            <Link href="#ministries" className="text-gray-700 hover:text-sky-600 font-medium">
              Ministries
            </Link>
            <Link href="#events" className="text-gray-700 hover:text-sky-600 font-medium">
              Events
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-sky-600 font-medium">
              Contact
            </Link>
            <Button className="bg-sky-600 hover:bg-sky-700">Visit Us</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
