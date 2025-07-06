"use client"
import { useState } from "react"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"

interface CMSItem {
  id: string
  title: string
  description: string
  category: string
  buttonText: string
  bgColor: string
  color: string
  featured?: boolean
}

const cmsItems: CMSItem[] = [
  {
    id: "1",
    title: "Market Research Tool",
    description:
      "Comprehensive market analysis platform that helps you understand your target audience, competitive landscape, and market opportunities with AI-powered insights.",
    category: "Marketing",
    buttonText: "Start Research",
    bgColor: "bg-pink-300",
    color: "text-pink-600",
  },
  {
    id: "2",
    title: "GTM Strategy Builder",
    description:
      "Interactive framework for building go-to-market strategies. Get expert guidance through each phase of your product launch with personalized recommendations.",
    category: "RevOps",
    buttonText: "Build Strategy",
    bgColor: "bg-blue-400",
    color: "text-neutral-800",
    featured: true,
  },
  {
    id: "3",
    title: "Launch Automation",
    description:
      "Streamline your product launch process with automated workflows, task management, and team coordination tools designed for modern GTM teams.",
    category: "Product Analytics",
    buttonText: "Automate Launch",
    bgColor: "bg-orange-400",
    color: "text-orange-600",
  },
  {
    id: "4",
    title: "Performance Analytics",
    description:
      "Real-time dashboard for tracking launch performance, measuring key metrics, and optimizing your go-to-market strategy based on data-driven insights.",
    category: "Product Analytics",
    buttonText: "View Analytics",
    bgColor: "bg-lime-800",
    color: "text-lime-800",
  },
  {
    id: "5",
    title: "Competitor Intelligence",
    description:
      "Advanced competitive analysis tool that monitors competitor activities, pricing changes, and market positioning to keep you ahead of the competition.",
    category: "Marketing",
    buttonText: "Monitor Competitors",
    bgColor: "bg-purple-800",
    color: "text-purple-600",
  },
  {
    id: "6",
    title: "Customer Journey Mapper",
    description:
      "Visual tool for mapping and optimizing customer journeys from awareness to conversion, helping you identify key touchpoints and improvement opportunities.",
    category: "Product Analytics",
    buttonText: "Map Journey",
    bgColor: "bg-teal-300",
    color: "text-teal-600",
  },
]

const categories = ["All", "Marketing", "RevOps", "Product Analytics"]

export default function StandardsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const featuredItem = cmsItems.find((item) => item.featured)
  const regularItems = cmsItems.filter((item) => !item.featured)

  // Filter items based on active filter
  const filteredItems =
    activeFilter === "All" ? regularItems : regularItems.filter((item) => item.category === activeFilter)

  // Group filtered items by category
  const itemsByCategory = filteredItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, CMSItem[]>,
  )

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Standards" />
      <section className="w-full pt-12 md:pt-20 lg:pt-20 px-4 sm:px-5 lg:px-10">
        <div className="rounded-xs">
          <div className="mx-auto max-w-3xl pt-12 text-center">
            <br />
            <h1 className="text-3xl tracking-tight sm:text-4xl/12 md:text-[2.5rem]/12 text-neutral-950">
            We showcase
            <span className="font-medium underline decoration-wavy decoration-teal-700"> magical solutions</span>
            <span className="inline-block h-12 w-20 bg-teal-900 rounded-md -mb-3 mx-1.5"></span>
            that set new standards for top GTM teams</h1>
            <br />
            <br />
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Filter Buttons */}
        <section className="w-full">
          <div className="mx-auto max-w-full px-4 sm:px-5 lg:px-10">
            <div className="flex flex-wrap justify-center gap-0 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 cursor-pointer text-sm font-medium transition-colors first:rounded-tl-sm first:rounded-bl-sm last:rounded-tr-sm last:rounded-br-sm ${
                    activeFilter === category
                      ? "bg-black text-white"
                      : "bg-neutral-100 text-gray-600 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CMS Content */}
        <section className="w-full">
          <div className="mx-auto max-w-full px-4 sm:px-5 lg:px-10">
            <div className="" id="cms-section">
              {/* Featured Item - Only show when filter is "All" */}
              {featuredItem && activeFilter === "All" && (
                <div className="bg-neutral-100 border border-2 border-neutral-200 rounded-sm p-8 mb-12 p-24 border-b border-gray-300">
                  <div className="flex flex-col items-center gap-8">

                    <div className="flex-1 text-left">
                      <h2 className="text-3xl font-normal text-gray-900 mb-4">{featuredItem.title}</h2>
                      <p className="text-lg text-gray-700 mb-6">{featuredItem.description}</p>
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-sm text-lg font-medium hover:bg-blue-700 transition-colors">
                        {featuredItem.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              )}


              <div className="space-y-12 ">
                {Object.entries(itemsByCategory).map(([category, items]) => (
                  <div className="bg-neutral-100 border border-2 border-neutral-200 rounded-sm p-8" key={category}>
                    {/* Category Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 pb-2 border-b-4 border-yellow-400 inline-block">
                        {category}
                      </h3>
                    </div>

                    {/* Items List */}
                    <div className="space-y-6 ">
                      {items.map((item, index) => (
                        <div key={item.id}>
                          <h4 className="text-xl font-medium text-gray-900 hover:text-gray-700 cursor-pointer transition-colors">
                            {item.title}
                          </h4>
                          {index < items.length - 1 && <div className="mt-6 border-b border-gray-200"></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {Object.keys(itemsByCategory).length === 0 && (
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
