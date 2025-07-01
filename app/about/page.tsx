import Navigation from "../../components/navigation"
import Footer from "../../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="About" />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Standard GTM</h1>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Standard GTM is a comprehensive platform designed to streamline and standardize go-to-market
                  strategies for businesses of all sizes.
                </p>
                <p>
                  Our mission is to help companies launch products faster and more effectively by providing proven
                  frameworks, tools, and methodologies that have been tested across various industries and markets.
                </p>
                <p>
                  Founded by a team of experienced product managers and marketing professionals, Standard GTM brings
                  together best practices from successful product launches to create a unified approach to market entry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
