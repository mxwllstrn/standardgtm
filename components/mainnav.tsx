"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage = "Standards" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = (pathname === "/" || pathname === "/about" || pathname === "/standards" || pathname === "/labs")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Standards", href: "/standards" },
    { name: "Labs", href: "/labs" },
    { name: "Connect", href: "/newsletter" },
  ]

  // Links visible on large screens
  const visibleLinks = navItems.slice(0, 4) // "About" and "Standards"

  // Determine navbar background and text colors
  const navbarBg = isHomePage && !isScrolled ? "bg-transparent" : "bg-white"
  const textColor = isHomePage && !isScrolled ? "text-white" : "text-neutral-600"
  const activeTextColor = isHomePage && !isScrolled ? "text-white" : "text-neutral-950"
  const logoColor = isHomePage && !isScrolled ? "text-white" : "text-neutral-950"
  const hoverTextColor = isHomePage && !isScrolled ? "hover:text-white/90" : "hover:text-neutral-950"
  const buttonBg =
    isHomePage && !isScrolled
      ? "bg-white/20 text-white hover:bg-white/30"
      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
  const mobileMenuBg =
    isHomePage && !isScrolled
      ? "bg-blue-900 bg-opacity-95 backdrop-blur-sm border-t border-blue-700"
      : "bg-white border-t border-gray-200"
  const menuButtonColor = isHomePage && !isScrolled ? "text-white" : "text-neutral-950"

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-100 ${navbarBg}`}>
      <div className="mx-auto max-w-full px-4 sm:px-5 lg:px-[40px]">
        <div className="flex h-20 items-center justify-between">
          {/* Left Column */}
          <div className="flex items-center space-x-6">
            {/* Menu Button - Always visible */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${menuButtonColor} transition-colors cursor-pointer mr-[20px]`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <Link href="/" className={`text-xl font-semibold ${logoColor} transition-colors`}>
              StandardGTM
            </Link>

            {/* Visible Links - Only on large screens */}
            <div className="hidden lg:flex items-center space-x-6">
              {visibleLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-normal transition-colors ${hoverTextColor} ${
                    currentPage === item.name ? activeTextColor : textColor
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center">
            <Link href="/contact" className={`px-4 py-2 text-sm font-medium rounded-xs transition-colors ${buttonBg}`}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Navigation Dropdown - Always available */}
        {isMobileMenuOpen && (
          <div className={`absolute top-20 left-0 right-0 ${mobileMenuBg}`}>
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium transition-colors ${hoverTextColor} ${
                    currentPage === item.name ? activeTextColor : textColor
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Us in dropdown menu */}
              <div className="pt-4 border-t border-opacity-20 border-current">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium transition-colors ${hoverTextColor}`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
