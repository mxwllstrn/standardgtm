import Navigation from "../components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="About" />
      
      <section className="w-full pt-12 pb-12 md:pt-20 lg:pt-20 px-4 sm:px-5 lg:px-10">
        <div className="rounded-xs">
          <div className="ml-0 mr-auto max-w-xl pt-12 text-left">
            <br />
            <h1 className="text-3xl tracking-tight sm:text-4xl/12 md:text-[2.5rem]/12 text-neutral-950">
            We showcase
            <span className="inline-block mx-1.5 font-medium underline decoration-wavy decoration-teal-700">the new standards</span>
            for top GTM teams.
            </h1>
            <br />
            <br />
          </div>
        </div>
      </section>

      <section className="w-full mb-10">
          <div className="px-4 sm:px-5 lg:px-10">
              <div className="mx-auto">
                <div className="w-full h-100 bg-teal-950 rounded-lg relative">

                  <div className="grid grid-cols-2 gap-12 items-center">
    
                  </div>
                </div>
              </div>
            </div>
        </section>


    </div>
  )
}
