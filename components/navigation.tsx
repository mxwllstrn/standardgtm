import Link from "next/link"
import { MessageCircle, User, X } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage = "Standards" }: NavigationProps) {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Standards", href: "/standards" },
    { name: "Labs", href: "/labs" },
    { name: "Support", href: "/support" },
  ]

  return (
    <nav className="w-full bg-white fixed">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
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

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-xl font-semibold text-neutral-950">
              Standard GTM
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-neutral-400 hover:text-neutral-950 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </button>
            <button className="p-2 text-neutral-400 hover:text-neutral-950 transition-colors">
              <User className="h-5 w-5" />
              <span className="sr-only">User profile</span>
            </button>
            <button className="p-2 text-neutral-400 hover:text-neutral-950 transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
