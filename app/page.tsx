"use client"

import { useState } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

interface CMSItem {
  id: string
  title: string
  description: string
  category: string
  buttonText: string
  bgColor: string
}

const cmsItems: CMSItem[] = [
  {
    id: "1",
    title: "Market Research Tool",
    description:
      "Comprehensive market analysis platform that helps you understand your target audience, competitive landscape, and market opportunities with AI-powered insights.",
    category: "Create",
    buttonText: "Start Research",
    bgColor: "bg-pink-300",
  },
  {
    id: "2",
    title: "GTM Strategy Builder",
    description:
      "Interactive framework for building go-to-market strategies. Get expert guidance through each phase of your product launch with personalized recommendations.",
    category: "Learn",
    buttonText: "Build Strategy",
    bgColor: "bg-blue-400",
  },
  {
    id: "3",
    title: "Launch Automation",
    description:
      "Streamline your product launch process with automated workflows, task management, and team coordination tools designed for modern GTM teams.",
    category: "Develop",
    buttonText: "Automate Launch",
    bgColor: "bg-orange-400",
  },
  {
    id: "4",
    title: "Performance Analytics",
    description:
      "Real-time dashboard for tracking launch performance, measuring key metrics, and optimizing your go-to-market strategy based on data-driven insights.",
    category: "Play",
    buttonText: "View Analytics",
    bgColor: "bg-lime-300",
  },
  {
    id: "5",
    title: "Competitor Intelligence",
    description:
      "Advanced competitive analysis tool that monitors competitor activities, pricing changes, and market positioning to keep you ahead of the competition.",
    category: "Create",
    buttonText: "Monitor Competitors",
    bgColor: "bg-purple-300",
  },
  {
    id: "6",
    title: "Customer Journey Mapper",
    description:
      "Visual tool for mapping and optimizing customer journeys from awareness to conversion, helping you identify key touchpoints and improvement opportunities.",
    category: "New at I/O",
    buttonText: "Map Journey",
    bgColor: "bg-teal-300",
  },
]

const categories = ["All", "Create", "Learn", "Develop", "Play", "New at I/O"]

export default function CMSPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredItems = activeFilter === "All" ? cmsItems : cmsItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Labs" />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                GTM Tools & Resources
              </h1>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* CMS Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`${item.bgColor} rounded-3xl p-6 flex flex-col justify-between min-h-[400px]`}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-800 text-sm leading-relaxed mb-6">{item.description}</p>
                    </div>
                    <button className="w-fit bg-white/20 backdrop-blur-sm border border-white/30 text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      {item.buttonText}
                    </button>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No items found for the selected category.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
