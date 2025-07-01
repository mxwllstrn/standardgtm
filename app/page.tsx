// app/page.tsx
import Link from 'next/link';
// REMOVE: import { MDXRemote } from 'next-mdx-remote/rsc'; // <--- Delete this line

// Assuming you create a Button component in components/ui/button.tsx
// import { Button } from '@/components/ui/button'; // Uncomment when you create it

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            StandardGTM: Engineering Predictable Growth for B2B SaaS
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Transforming ad-hoc Go-to-Market operations into a standardized, scalable, and data-driven engineering discipline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/standards" className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
              Explore Standards
            </Link>
            <Link href="/services" className="bg-blue-800 text-white hover:bg-blue-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            The GTM Challenge for Early-Stage B2B SaaS
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Early-stage B2B SaaS companies often struggle with inefficient processes, unreliable data, and a lack of scalable systems. This leads to wasted resources, inaccurate forecasting, and ultimately, hinders sustainable growth.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-700">
            <li className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">⚡</span>
                <p><strong>Inefficient Manual Processes:</strong> Wasting time on manual research and inconsistent data entry.</p>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">📊</span>
                <p><strong>Poor Data Integrity:</strong> Unreliable metrics leading to flawed strategic decisions and forecasting.</p>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">🤖</span>
                <p><strong>Underutilization of AI/Tools:</strong> Missing out on building truly automated, efficient GTM engines.</p>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">📈</span>
                <p><strong>Scalability Bottlenecks:</strong> Manual processes breaking down as companies attempt to grow, impacting Customer Acquisition Cost (CAC), Lifetime Value (LTV), and Net Revenue Retention (NRR).</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Teaser Section for Standards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Our Approach: GTM Engineering Standards
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We transform Go-to-Market into a predictable science. Discover our core standards for building robust, financially sound GTM foundations.
          </p>
          <Link href="/standards" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
            View All Standards
          </Link>
        </div>
      </section>

      {/* Teaser Section for Labs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            See GTM Engineering in Action
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Explore our GTM Labs – live, interactive demonstrations of automated workflows and AI-powered tools that redefine GTM efficiency.
          </p>
          <Link href="/labs" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
            Discover Our Labs
          </Link>
        </div>
      </section>

    </div>
  );
}