import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Titlebar from "../../components/titlebar"

export default function StandardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Standards" />
      <Titlebar pageTitle="Standards?" />


      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">GTM Standards</h1>
              <div className="space-y-8">
                <p className="text-lg text-gray-600">
                  Our standardized frameworks and methodologies for successful go-to-market execution.
                </p>

                <div className="grid gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Market Research Framework</h3>
                    <p className="text-gray-600">
                      Comprehensive guidelines for conducting market analysis and competitive research.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Product Positioning Standards</h3>
                    <p className="text-gray-600">
                      Best practices for defining and communicating your product&apos;s unique value proposition.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Launch Execution Playbook</h3>
                    <p className="text-gray-600">
                      Step-by-step processes for coordinating successful product launches across teams.
                    </p>
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
