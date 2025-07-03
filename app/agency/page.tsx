import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import Titlebar from "../../components/titlebar"

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Agency" />
      <Titlebar 
        pageTitle="Agency" 
        pageDescription="We work with clients – half education, half hands-on development." />

      <main className="flex-1">
      <section className="w-full">
        <div className="px-4 sm:px-5 lg:px-10">
            <div className="mx-auto">
              <div className="grid grid-cols-1 gap-12 items-center">
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full h-140 bg-teal-600 rounded-lg"></div>
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
