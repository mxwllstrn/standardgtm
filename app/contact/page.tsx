"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Import your components
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Titlebar from "../../components/titlebar";
import { FloatingInput } from '@/components/ui/floating-input'; // <--- IMPORT THE NEW FLOATING INPUT
import { FloatingTextarea } from '@/components/ui/floating-textarea'; // <--- IMPORT THE NEW FLOATING TEXTAREA


export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you shortly.');
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
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col">
      <Navigation currentPage="Contact" />
      <Titlebar 
        pageTitle="Contact" 
        pageDescription="We work with clients – half education, half hands-on development."
      />

    <div className="max-w-8xl mx-auto pb-20">

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-lg mx-auto bg-neutral-100 p-4 rounded-xs">
          <div className="flex-grow">
            </div>
            <Link href="contact#form" className="bg-slate-600 flex align-center text-base/8 text-white font-semibold px-6 py-2 h-12 rounded-xs shadow-md hover:bg-slate-800 cursor-pointer transition-colors duration-200 whitespace-nowrap">
              Send us a Message
            </Link>
          </div>
      </div>

      <main className="flex-1" id="form">
        <section className="w-full">
         <div className="px-4 sm:px-5 lg:px-10">
            <div className="mx-auto rounded-md bg-slate-700 py-20">
              
              <div className="grid grid-cols-1 gap-12 items-center">
                <div className="flex justify-center lg:justify-end">
                 
                 <div className="w-full max-w-2xl bg-white border border-neutral-200 rounded-sm p-8 md:p-12 mx-auto">
                    {status && (
                      <p className={`mb-4 text-center text-sm ${status.includes('successfully') ? 'bg-green-700 text-white py-3 rounded-xs' : 'text-red-300'}`}>
                        {status}
                      </p>
                    )}
  
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      
                    <h2 className="text-md text-left tracking-normal sm:text-4xl/8 md:text-[1.125rem]/7 text-neutral-500 max-w-md pt-0 mt-0">
                    How can we help?
                    </h2>
                      
                      <div>
                        <FloatingInput
                          id="name"
                          label="Name" // The floating label text
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          focusRingColorClass="focus:ring-slate-600 focus:border-slate-600" // <--- THIS LINE
                          required
                          // Removed redundant classes that are now handled by FloatingInput's internal styling
                          // className="w-full p-3 border border-gray-300 rounded-xs focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                        />
                      </div>
                      <div>
                        <FloatingInput
                          id="email"
                          label="Email" // The floating label text
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          focusRingColorClass="focus:ring-slate-600 focus:border-slate-600" // <--- THIS LINE
                          required
                          // Removed redundant classes that are now handled by FloatingInput's internal styling
                          // className="w-full p-3 border border-gray-300 rounded-xs focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                        />
   
                      </div>
                      <div>
                      <FloatingTextarea
                          id="message"
                          label="Message" // Label for the textarea
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          focusRingColorClass="focus:ring-slate-600 focus:border-slate-600" // <--- THIS LINE
                          required
                          placeholder="" // Placeholder for textarea
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-fit bg-slate-600 text-white hover:bg-slate-800 px-8 py-3 rounded-xs text-md font-semibold shadow-lg transition-all duration-300 cursor-pointer"
                        disabled={status === 'Sending...'}
                      >
                        {status === 'Sending...' ? 'Sending...' : 'Submit'}
                      </button>
                    </form>

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