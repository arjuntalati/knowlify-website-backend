export const metadata = {
  title: 'Contact Us - Knowlify',
  description: 'Page description',
};

import Link from 'next/link'

export default function Contact() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Contact Us</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <textarea id="message" className="form-input w-full text-gray-300" placeholder="Your message" required></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send Message</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
