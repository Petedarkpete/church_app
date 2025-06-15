import { Cross } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Cross className="h-8 w-8 text-sky-400" />
              <div>
                <h5 className="text-xl font-bold">Grace Community Church</h5>
                <p className="text-sm text-gray-400">Growing in Faith Together</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Serving our community with God's love for over 50 years.</p>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white">
                  Service Times
                </Link>
              </li>
              <li>
                <Link href="#ministries" className="text-gray-400 hover:text-white">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Ministries</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Children's Ministry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Youth Ministry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Small Groups
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Community Outreach
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Connect</h6>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                123 Faith Street
                <br />
                Springfield, IL 62701
              </p>
              <p className="text-gray-400">(555) 123-4567</p>
              <p className="text-gray-400">info@gracecommunitychurch.org</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
