"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Cross, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [isOpen]);

    // Close dropdown when pressing Escape
      useEffect(() => {
        function handleEscapeKey(event) {
          if (event.key === 'Escape' && isOpen) {
            setIsOpen(false);
          }
        }

        if (isOpen) {
          document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
          document.removeEventListener('keydown', handleEscapeKey);
        };
      }, [isOpen]);

      const handleLinkClick = () => {
        setIsOpen(false);
      };

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

            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }
                }}
                className="text-gray-700 hover:text-sky-600 font-medium flex items-center rounded-md px-2 py-1"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label="About us menu"
              >
                About us
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10 animate-in fade-in duration-200"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1">
                    <Link 
                      href="/#about" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                    <Link 
                      href="/testimonials" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Pastors
                    </Link>
                    <Link 
                      href="/mission" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      Mission & Vision
                    </Link>
                    <Link 
                      href="/church" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      role="menuitem"
                      onClick={handleLinkClick}
                    >
                      The Church
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
                      href="/youth"
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600"
                    >
                      Youth Ministry
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/women"
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600"
                    >
                      Women Ministry
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
                    {/* <Link
                      href="/worship"
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600"
                    >
                      Learn our Songs
                    </Link> */}
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
            <Link href="/church-location"><Button  className="bg-sky-600 hover:bg-sky-700">Find Us</Button></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
