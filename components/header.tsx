"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cross, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

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

          <nav className="hidden md:flex items-center space-x-8 relative">
            <Link href="/" className="text-gray-700 hover:text-sky-600 font-medium">
              Home
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-sky-600 font-medium">
              Services
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-sky-600 font-medium">
              About
            </Link>

            {/* Ministries with dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center text-gray-700 hover:text-sky-600 font-medium focus:outline-none"
              >
                Ministries <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {openDropdown && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  <li>
                    <Link
                      href="#youth"
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600"
                    >
                      Youth Ministry
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#worship"
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600"
                    >
                      Worship Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/worship"
                      onClick={() => setOpenDropdown(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600"
                    >
                      Learn our Songs
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* <Link href="/#events" className="text-gray-700 hover:text-sky-600 font-medium">
              Events
            </Link> */}
            <Link href="/#contact" className="text-gray-700 hover:text-sky-600 font-medium">
              Contact
            </Link>
            <Link href="/sermons" className="text-gray-700 hover:text-sky-600 font-medium">
              Past Sermons
            </Link>
            <Link href="/church-location"><Button  className="bg-sky-600 hover:bg-sky-700">Visit Us</Button></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
