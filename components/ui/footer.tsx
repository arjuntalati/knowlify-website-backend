import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="flex justify-between mb-8 md:mb-12">

            {/* 1st block */}
            <div className="max-w-md">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="block" aria-label="Cruip">
                  <img src="/images/logo.png" alt="Knowlify Logo" className="w-12 h-12 rounded-full" />
                </Link>
              </div>
              <div className="text-gray-400">Knowlify is transforming the learning experience by utilizing cutting-edge technology and AI to make learning more engaging and accessible for everyone.</div>
            </div>

            {/* 2nd and 3rd blocks */}
            <div className="flex space-x-16">
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Demo</Link>
                  </li>
                </ul>
              </div>

              <div className="text-sm text-right">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1" style={{ position: 'relative', left: '-3px' }}>
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About Us</Link>
                  </li>
                  <li className="mb-1" style={{ position: 'relative', left: '-12.5px' }}>
                    <Link href="/contact" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom area */}
          <div className="flex items-center justify-between">

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm">&copy; knowlify.com. All rights reserved.</div>

            {/* Social links */}
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="YouTube">
                  <svg className="w-8 h-8 fill-current" viewBox="0 -6 32 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.88 8.09a3.65 3.65 0 0 0-2.57-2.57C25.24 5 16 5 16 5s-9.24 0-11.31.52A3.65 3.65 0 0 0 2.12 8.09 38.6 38.6 0 0 0 1.6 12v4a38.6 38.6 0 0 0 .52 3.91 3.65 3.65 0 0 0 2.57 2.57C6.76 23 16 23 16 23s9.24 0 11.31-.52a3.65 3.65 0 0 0 2.57-2.57A38.6 38.6 0 0 0 30.4 16v-4a38.6 38.6 0 0 0-.52-3.91zM12.8 19.2v-6.4L19.2 16l-6.4 3.2z" />
                  </svg>
                </Link>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </footer>
  );
}
