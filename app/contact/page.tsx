"use client"; // <--- This must be at the very top for client-side hooks

import React, { useState } from 'react'; // Import React and useState
import Link from 'next/link'; // Import Link for navigation or other links

// Import your shared components
import Navigation from "../../components/navigation"; // Assuming this is your Navigation component
import Footer from "../../components/footer";       // Assuming this is your Footer component
import Titlebar from "../../components/titlebar";   // Assuming this is your Titlebar component


export default function ContactPage() {
  // State variables to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To display success/error message to user

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission and page reload
    setStatus('Sending...'); // Give user feedback

    try {
      const response = await fetch('/api/contact', { // Send POST request to your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }), // Send form data as JSON
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you shortly.');
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(`Failed to send message: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send message. Please check your connection.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col"> {/* Adjust base styling as per your site */}
      {/* Navigation Component - passed currentPage prop */}
      <Navigation currentPage="Contact"/> 
      
      {/* Titlebar Component */}
      <Titlebar 
        pageTitle="How can we help?" 
        pageDescription="Send us a message, book a call, or connect with us on social media."
      />

      <main className="flex-1">
        <section className="w-full">
         <div className="px-4 sm:px-5 lg:px-10">
            <div className="mx-auto bg-gray-50">
              <div className="grid grid-cols-1 gap-12 items-center">
                <div className="flex justify-center lg:justify-end">
                 <div className="w-full max-w-2xl rounded-lg p-8 md:p-12 mx-auto">
                    <h2 className="text-2xl font-semibold text-white mb-6 text-center">Send us a Message</h2>
                    {status && ( // Display status message
                      <p className={`mb-4 text-center text-sm ${status.includes('successfully') ? 'text-green-300' : 'text-red-300'}`}>
                        {status}
                      </p>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                      <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          placeholder="Your Name" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                          value={name} // Connect to state
                          onChange={(e) => setName(e.target.value)} // Update state on change
                          required // Make field required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          placeholder="Your Email" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                          value={email} // Connect to state
                          onChange={(e) => setEmail(e.target.value)} // Update state on change
                          required // Make field required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea 
                          id="message" 
                          placeholder="Your Message" 
                          rows={5} 
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 resize-y"
                          value={message} // Connect to state
                          onChange={(e) => setMessage(e.target.value)} // Update state on change
                          required // Make field required
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
                        disabled={status === 'Sending...'} // Disable button while sending
                      >
                        {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                    <p className="text-lg text-white mt-8 mb-4">Or connect with us directly:</p>
                    <div className="flex justify-center space-x-6 text-lg">
                      <a href="mailto:maxwell@standardgtm.com" className="text-blue-300 hover:text-blue-100 transition-colors">
                        Email: maxwell@standardgtm.com
                      </a>
                      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                    <p className="text-md text-gray-300 mt-6">
                      We typically respond within 1-2 business days.
                    </p>
                  </div>
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