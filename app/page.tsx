import Link from "next/link"
import { ArrowDown } from "lucide-react"
import Footer from "@/components/footer" // Ensure Footer is imported correctly

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="px-[20px] -mt-20">
        {/* Hero Section */}
        <section className="flex items-end relative min-h-[calc(100vh-40px)] bg-gradient-to-br from-teal-950 via-teal-850 to-teal-900 text-white overflow-hidden pt-24 pb-12">
          {/* Abstract geometric background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl/24 font-bold leading-tight mb-8 font-luxury">
                What&#39;s your next GTM play?
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                We are a team of automation experts, data scientists, and educators that help build inbound, outbound,
                and RevOps systems that scale.
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

        {/* White Section - We believe */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">
                We believe that magical GTM solutions are not only useful – they&#39;re standard.
              </h2>
              <p className="text-left text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                As AI and other emerging tech continues to disrupt—attracting capital and creating value pools like
                never before—some large corporates are being left behind. Many are trying to answer the demand for
                innovative solutions. But these ventures rarely move the needle. That&#39;s where the breadth, scale,
                and deep experience of McKinsey Business Building come into play to help businesses accelerate their
                growth ambitions.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-xs hover:bg-teal-700 transition-colors"
              >
                Let&#39;s build something
              </Link>
            </div>
          </div>
        </section>

        {/* Gray Section - What We Do */}
        <section className="py-16 md:py-20 bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">What we do</h2>
              <p className="text-left text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                We help early-stage B2B SaaS companies engineer predictable and scalable Go-to-Market operations. By
                integrating advanced AI and automation, we eliminate guesswork, reduce churn, and drive efficient
                customer acquisition. Our focus is on building robust systems that deliver consistent, measurable
                revenue impact.
              </p>
            </div>
          </div>
          <div className="hidden"></div>
        </section>

        {/* Offwhite Section - How We Work */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">How We Work</h2>
              <p className="text-left text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                We bring an engineering discipline to your GTM. This means standardized methodologies, data-driven
                insights, and hands-on implementation of AI and automation tools. We build the predictable growth
                engines your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Gray Section - About Max */}
        <section className="py-16 md:py-20 bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">About Max</h2>
              <p className="text-left text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                I&#39;m Max Stern, an entrepreneur, operator, and educator with 7 years of experience building and
                scaling technology companies. As a Lecturing Fellow at Duke University, I&#39;ve guided founders to
                secure over $12MM in funding and optimized GTM strategies for significant growth. My background as a
                founder myself means I understand the operational realities of scaling a venture.
              </p>
            </div>
          </div>
        </section>

        {/* Green Section - CTA */}
        <section className="py-16 md:py-20 bg-teal-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white mb-8 leading-tight max-w-3xl mx-auto">Let&#39;s engage</h2>
              <p className="text-center text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
                Advisory, implementation, and training for B2B SaaS GTM teams.
              </p>
              <a
                href="mailto:maxwellstern@aol.com"
                className="inline-block bg-teal-700 text-teal-900 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-teal-300 transition-colors shadow-md mt-4"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
