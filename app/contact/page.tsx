import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Titlebar from "../../components/titlebar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Contact" />
      <Titlebar pageTitle="How can we help?" />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact</h1>
              <div className="space-y-8">
                <p className="text-lg text-gray-600">
                  Get help with Standard GTM and find answers to common questions.
                </p>

                <div className="grid gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                    <p className="text-gray-600">
                      Comprehensive guides and tutorials for using Standard GTM effectively.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Community Forum</h3>
                    <p className="text-gray-600">
                      Connect with other users and share best practices for go-to-market success.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
                    <p className="text-gray-600 mb-4">Need direct assistance? Our support team is here to help.</p>
                    <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                      Contact Us
                    </button>
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
