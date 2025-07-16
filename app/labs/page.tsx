import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Titlebar from "../../components/titlebar"
import { ArrowDown } from "lucide-react"

export default function LabsPage() {
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
            Labs
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            We are a team of automation experts, data scientists, and educators that help build
            inbound, outbound, and RevOps systems that scale.
          </p>
          </div>

        </div>

      </section>
      </main>
    
    
      <Navigation currentPage="Labs" />
      <Titlebar 
        pageTitle="Labs" 
        pageDescription="We build products to showcase the magic of modern GTM solutions" 
        />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">GTM Labs</h1>
              <div className="space-y-8">
                <p className="text-lg text-gray-600">
                  Experimental tools and innovative approaches to go-to-market strategy development.
                </p>

                <div className="grid gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">AI-Powered Market Analysis</h3>
                    <p className="text-gray-600 mb-3">
                      Leverage artificial intelligence to analyze market trends and identify opportunities.
                    </p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Beta</span>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Predictive Launch Modeling</h3>
                    <p className="text-gray-600 mb-3">
                      Simulate different launch scenarios to optimize your go-to-market strategy.
                    </p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Real-time Competitor Tracking</h3>
                    <p className="text-gray-600 mb-3">
                      Monitor competitor activities and market movements in real-time.
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
