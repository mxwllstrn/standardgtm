export default function Footer() {
    return (
      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Standard GTM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  