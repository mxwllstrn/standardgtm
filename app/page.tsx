import Link from "next/link"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { ArrowDown } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">

      <Navigation currentPage="Home" />

      <main className="px-[20px] -mt-20">
      
      <section className="flex items-end relative min-h-[calc(100vh-40px)] bg-gradient-to-br from-teal-950 via-teal-850 to-teal-900 text-white overflow-hidden pt-30 pb-12">
        {/* Abstract geometric background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-8xl/24 font-bold leading-tight mb-8 font-luxury">
              What's your next GTM play?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              We are a team of automation experts, data scientists, and educators that help build
              inbound, outbound, and RevOps systems that scale.
            </p>

            <div className="text-center mx-auto transform animate-bounce pt-12">
            <ArrowDown className="w-10 h-10 text-white mx-auto" />
          </div>
            
          </div>

        </div>

        <div className="hidden absolute bottom-10 left-28 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-10 h-10 text-white" />
          </div>
      </section>

      {/* White Section - Breakthrough Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-center text-4xl md:text-4xl text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">
              We believe that magical GTM solutions are not only useful – they're standard.
            </h2>
            <p className="text-left text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              As AI and other emerging tech continues to disrupt—attracting capital and creating value pools like never
              before—some large corporates are being left behind. Many are trying to answer the demand for innovative
              solutions. But these ventures rarely move the needle. That's where the breadth, scale, and deep experience
              of McKinsey Business Building come into play to help businesses accelerate their growth ambitions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-xs hover:bg-teal-700 transition-colors"
            >
              Let's build something
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-center text-4xl md:text-4xl text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">
              We offer three services to support GTM teams.
            </h2>
            <p className="text-left text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              As AI and other emerging tech continues to disrupt—attracting capital and creating value pools like never
              before—some large corporates are being left behind. Many are trying to answer the demand for innovative
              solutions. But these ventures rarely move the needle. That's where the breadth, scale, and deep experience
              of McKinsey Business Building come into play to help businesses accelerate their growth ambitions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-xs hover:bg-teal-700 transition-colors"
            >
              Let's build something
            </Link>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl lg:text-6xl/15 font-bold leading-tight mb-8 font-luxury max-w-3xl">
          How can we help?
          </h2>
          <p className="text-left text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl ml-0 mr-auto">
              As AI and other emerging tech continues to disrupt—attracting capital and creating value pools like never
              before—some large corporates are being left behind. Many are trying to answer the demand for innovative
              solutions. But these ventures rarely move the needle. That's where the breadth, scale, and deep experience
              of McKinsey Business Building come into play to help businesses accelerate their growth ambitions.
            </p>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
