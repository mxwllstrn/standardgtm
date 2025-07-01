import React from 'react';
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/standards" className="text-black font-medium">
            Standards
          </Link>
          <Link href="/experiments" className="text-gray-400 hover:text-gray-600 transition-colors">
            Experiments
          </Link>
          <Link href="/support" className="text-gray-400 hover:text-gray-600 transition-colors">
            Support
          </Link>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl font-semibold text-black">Standard GTM</h1>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-black leading-tight mb-8">
            Discover the new standards for
            <br />
            Go-To-Market work.
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
            Through our storytelling platform and collaborations, we hope to harness human imagination and artificial
            intelligence to co-create the future together.
          </p>
        </div>

        {/* Bottom Image Section */}
        <div className="w-full max-w-6xl mt-16">
          <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=256&width=1200"
              alt="Colorful abstract illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
