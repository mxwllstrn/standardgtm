"use client"; // <--- This must be at the very top for client-side hooks

import React, { useState } from 'react'; // Import React and useState

// Import your shared components
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Titlebar from "../../components/titlebar";
import { FloatingInput } from '@/components/ui/floating-input'; // <--- IMPORT FLOATING INPUT

export default function AgencyPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // To display success/error message to user

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission and page reload
    setStatus('Sending...'); // Give user feedback

    try {
      const response = await fetch('/api/agency', { // Send POST request to your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send only email for agency
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Success! You have been subscribed.');
        setEmail(''); // Clear the email field
      } else {
        setStatus(`Failed to subscribe: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting agency signup:', error);
      setStatus('Failed to subscribe. Please check your connection.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col">
      <Navigation currentPage="Agency" />
      <Titlebar 
        pageTitle="Agency" 
        pageDescription="We work with clients – half education, half hands-on development."
      />

      <div className="max-w-8xl mx-auto pb-20">

          <form className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-lg mx-auto bg-neutral-100 p-4 rounded-xs" onSubmit={handleSubmit}> {/* flexbox container */}
                <div className="flex-grow">
                <FloatingInput
                  id="newsletter-email"
                  label="What's your email?" // Restored preferred label text
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  // This is the line to pass the red focus outline color
                  focusRingColorClass="focus:ring-rose-800 focus:border-rose-800" // <--- THIS LINE
                  // The className below ensures proper appearance on red background (from previous version)
                />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-rose-800 text-white text-base/8 font-semibold px-6 py-2 h-12 rounded-xs shadow-md hover:bg-rose-900 cursor-pointer transition-colors duration-200 whitespace-nowrap"
                  disabled={status === 'Sending...'}
                >
                  {status === 'Sending...' ? 'Subscribing...' : 'Get Started'}
                </button>
              </form>

              {status && ( // Display status message
                <p className={`mb-4 text-center text-sm ${status.includes('success') ? 'text-red-800' : 'text-red-800'}`}> {/* Adjusted status colors for red background */}
                  {status}
                </p>
              )}

          </div>
      <main className="flex-1">
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

      </main>

      <Footer />
    </div>
  );
}