"use client"

import Link from "next/link"
import { useState } from "react"
import { Mail, Menu, X } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItemsLeft = [
    { name: "About", href: "/about" },
    { name: "Standards", href: "/standards" },
    { name: "Resources", href: "/resources" },
    { name: "Labs", href: "/labs" },
  ]

  return (
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="mx-auto max-w-full px-4 sm:px-5 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Left Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItemsLeft.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors hover:text-neutral-950 ${
                  currentPage === item.name ? "text-neutral-950" : "text-neutral-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu placeholder - keeps logo centered */}
          <div className="lg:hidden w-10"></div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-xl font-semibold text-neutral-950">
              Standard GTM
            </Link>
          </div>

          {/* Right Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/newsletter"
              className={`text-md font-medium transition-colors text-neutral-800 px-2 h-[32px] rounded-sm items-center flex hover:bg-neutral-200 ${
                  currentPage == "Newsletter" ? "bg-neutral-200" : " bg-neutral-100"
                }`}
              >
              Newsletter
            </Link>
            <Link
              href="/agency"
              className={`text-md font-medium transition-colors text-neutral-800 px-2 h-[32px] rounded-sm items-center flex hover:bg-neutral-200 ${
                  currentPage == "Agency" ? "bg-neutral-200" : " bg-neutral-100"
                }`}
              >
              Agency
            </Link>
            <Link
              href="/contact"
              className={`text-md/2 bg-neutral-100 text-neutral-950 rounded-sm h-[32px] w-[32px] flex items-center text-center hover:bg-neutral-200 ${
                currentPage == "Contact" ? "bg-neutral-200" : " bg-neutral-100"
              }`}
            >
              <Mail className="h-4 w-4 inline-flex mx-auto" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-neutral-950">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItemsLeft.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium transition-colors hover:text-neutral-950 ${
                    currentPage === item.name ? "text-neutral-950" : "text-neutral-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/newsletter"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-neutral-800"
                >
                  Newsletter
                </Link>
                <Link
                  href="/agency"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-neutral-800"
                >
                  Agency
                </Link>
                <div className="flex items-center space-x-3">
                  <Link
                    href="/contact"
                    className="bg-neutral-100 text-neutral-950 rounded-sm h-[40px] w-[40px] flex items-center text-center hover:bg-neutral-200"
                    
                  >
                    <Mail className="h-5 w-5 inline-flex mx-auto" />
                  </Link>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
