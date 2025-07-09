"use client"

import Link from "next/link"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage = "" }: NavigationProps) {

  return (
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="mx-auto max-w-full px-4 sm:px-5 lg:px-10">
        <div className="flex h-20 items-center justify-between">
        <div className="text-left">
            <Link href="/" className="text-xl font-semibold text-neutral-950">
              Standard GTM
            </Link>
          </div>
          </div>
          </div>
          <div className="hidden">{currentPage}</div>
          
    </nav>
  )
}
