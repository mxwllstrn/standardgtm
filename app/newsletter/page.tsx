"use client" // <--- This must be at the very top for client-side hooks

import type React from "react" // Import React and useState
import { useState } from "react"

// Import your shared components
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Titlebar from "../../components/titlebar"
import { FloatingInput } from "@/components/ui/floating-input" // <--- IMPORT FLOATING INPUT

interface NewsletterArticle {
  id: string
  title: string
  date: string
  category: string
}

const newsletterArticles: NewsletterArticle[] = [
  {
    id: "1",
    title: "The Complete Guide to Product-Market Fit Validation",
    date: "December 15, 2024",
    category: "Strategy",
  },
  {
    id: "2",
    title: "5 GTM Mistakes That Kill SaaS Startups",
    date: "December 8, 2024",
    category: "Mistakes",
  },
  {
    id: "3",
    title: "How to Build a Winning Sales Playbook in 30 Days",
    date: "December 1, 2024",
    category: "Sales",
  },
  {
    id: "4",
    title: "Customer Segmentation: Beyond Demographics",
    date: "November 24, 2024",
    category: "Strategy",
  },
  {
    id: "5",
    title: "The Psychology of Pricing: What Really Drives Purchase Decisions",
    date: "November 17, 2024",
    category: "Pricing",
  },
  {
    id: "6",
    title: "Content Marketing That Actually Converts",
    date: "November 10, 2024",
    category: "Marketing",
  },
  {
    id: "7",
    title: "Why Your Onboarding Process is Losing Customers",
    date: "November 3, 2024",
    category: "Mistakes",
  },
  {
    id: "8",
    title: "Building a Revenue Operations Framework",
    date: "October 27, 2024",
    category: "Sales",
  },
  {
    id: "9",
    title: "The Art of Competitive Positioning",
    date: "October 20, 2024",
    category: "Strategy",
  },
  {
    id: "10",
    title: "Email Marketing Automation That Scales",
    date: "October 13, 2024",
    category: "Marketing",
  },
]

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("") // To display success/error message to user
  const [activeFilter] = useState("All")

  // Filter articles based on active filter
  const filteredArticles =
    activeFilter === "All"
      ? newsletterArticles
      : newsletterArticles.filter((article) => article.category === activeFilter)

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent default form submission and page reload
    setStatus("Sending...") // Give user feedback

    try {
      const response = await fetch("/api/newsletter", {
        // Send POST request to your API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send only email for newsletter
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("Success! You have been subscribed.")
        setEmail("") // Clear the email field
      } else {
        setStatus(`Failed to subscribe: ${data.message || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Error submitting newsletter signup:", error)
      setStatus("Failed to subscribe. Please check your connection.")
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col">
      <Navigation currentPage="Newsletter" />
      <Titlebar
        pageTitle="Newsletter"
        pageDescription="Every Sunday, get an email that deep-dives into one new GTM Standard to consider."
      />

      <main className="flex-1">
        <div className="max-w-8xl mx-auto pb-20">
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-lg mx-auto bg-neutral-100 p-4 rounded-xs"
            onSubmit={handleSubmit}
          >
            {" "}
            {/* flexbox container */}
            <div className="flex-grow">
              <FloatingInput
                id="newsletter-email"
                label="What's your email?" // Restored preferred label text
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                // This is the line to pass the red focus outline color
                focusRingColorClass="focus:ring-teal-600 focus:border-teal-600" // <--- THIS LINE
                // The className below ensures proper appearance on teal background (from previous version)
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-600 text-white text-base/8 font-semibold px-6 py-2 h-12 rounded-xs shadow-md hover:bg-teal-700 cursor-pointer transition-colors duration-200 whitespace-nowrap"
              disabled={status === "Sending..."}
            >
              {status === "Sending..." ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {status && ( // Display status message
            <p className={`mb-4 text-center text-sm ${status.includes("success") ? "text-teal-800" : "text-red-800"}`}>
              {" "}
              {/* Adjusted status colors for red background */}
              {status}
            </p>
          )}
        </div>

        {/* Past Issues Section */}
        <section className="w-full">
          <div className="px-4 sm:px-5 lg:px-10">
            <div className="mx-auto">
              <div className="bg-teal-600 rounded-lg p-24">
                {/* Header Row with Title and Filters */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/30 pb-6">
                  <h2 className="text-2xl font-bold text-white text-center">All Newsletters</h2>

                  {/* Filter Buttons */}
                  
                </div>

                {/* Articles List */}
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      className="py-4 transition-colors cursor-pointer border-b border-white/30 mb-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-light text-white tracking-wide">{article.title}</h3>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-xs">{article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {filteredArticles.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-white/80">No articles found for the selected category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
