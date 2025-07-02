// app/contact/page.tsx
// REMOVE: import Link from 'next/link'; // <--- Delete this line

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 text-center">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
        <p className="text-lg text-gray-700 mb-8">
          Ready to engineer your GTM? Reach out with your questions or to schedule a consultation.
        </p>

        {/* Placeholder for a contact form */}
        <div className="mb-10 p-6 bg-gray-50 rounded-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" placeholder="Your Message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea>
            </div>
          </form>
        </div>

        <p className="text-lg text-gray-700 mb-4">Or connect with me directly:</p>
        <div className="flex justify-center space-x-6 text-lg">
          <a href="mailto:maxwell@standardgtm.com" className="text-blue-600 hover:text-blue-800 transition-colors">
            Email: maxwell@standardgtm.com
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            LinkedIn Profile
          </a>
        </div>
        <p className="text-md text-gray-500 mt-6">
          I typically respond within 1-2 business days.
        </p>
      </div>
    </div>
  );
}