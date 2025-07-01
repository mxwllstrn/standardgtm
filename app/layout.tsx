// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'StandardGTM - Engineering Predictable Go-to-Market Growth',
  description: 'Transforming GTM operations from magic to a scalable engineering discipline for B2B SaaS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-900 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              StandardGTM
            </Link>
            <ul className="flex space-x-6 text-lg">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/standards" className="hover:text-blue-400 transition-colors">Standards</Link></li>
              <li><Link href="/labs" className="hover:text-blue-400 transition-colors">Labs</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 text-white p-6 text-center shadow-inner">
          <div className="container mx-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} StandardGTM. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Twitter</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}