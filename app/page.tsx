import Link from "next/link"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Home" />

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                StandardGTM
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Streamline your go-to-market strategy with our comprehensive platform. From planning to execution, we
                help you launch products faster and more effectively.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
