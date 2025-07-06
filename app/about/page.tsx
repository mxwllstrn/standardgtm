import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Titlebar from "../../components/titlebar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="About" />
      
      <section className="w-full pt-12 md:pt-20 lg:pt-20 px-4 sm:px-5 lg:px-10">
        <div className="rounded-xs">
          <div className="mx-auto max-w-3xl pt-12 text-center">
            <br />
            <h1 className="text-3xl tracking-tight sm:text-4xl/12 md:text-[2.5rem]/12 text-neutral-950">
            We showcase
            <span className="inline-block mx-1.5 font-medium underline decoration-wavy decoration-teal-700">magical solutions</span>
            <span className="inline-block h-12 w-20 bg-teal-900 rounded-md -mb-3 mx-1.5"></span>
            that set new standards for top GTM teams</h1>
            <br />
            <br />
          </div>
        </div>
      </section>

      <section className="w-full">
          <div className="px-4 sm:px-5 lg:px-10">
              <div className="mx-auto">
                <div className="grid grid-cols-1 gap-12 items-center">
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-full h-140 bg-rose-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
        </section>

      

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
