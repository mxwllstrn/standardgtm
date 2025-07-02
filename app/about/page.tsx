import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Titlebar from "../../components/titlebar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="About" />
      <Titlebar pageTitle="Setting new standards for Sales, Marketing, and Ops Work" />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 sm:px-5 lg:px-10">
            <div className="mx-auto max-w-3xl">
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
