

import React from 'react';
// NOTE: For a production Next.js application, you should import the specific Lucide React icons
// you want to use (e.g., Check, ArrowUp, Clipboard).
// Example: import { Check, ArrowUp } from 'lucide-react';

const LandingImplementationSection: React.FC = () => {
  return (
    // Reusing the ID and basic structure from your original request
    <section id="landing-implementation" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Landing Page: Hero Section Implementation
          </h2>

          {/* 1. Mobile-First Design Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mobile-First Responsive Design</h3>
            <p className="text-gray-600 mb-6">
              The mobile-first approach prioritizes the mobile experience before scaling up to larger screens, aligning with progressive enhancement principles and the reality that mobile devices account for the majority of web traffic.
              <a href="#ref-597" className="text-blue-600 hover:text-blue-800 underline">
                [597]
              </a>
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Base Mobile Layout</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    {/* Placeholder for Check icon (e.g., Lucide Check) */}
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Single-column centered layout
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Touch-friendly buttons (44px minimum)
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Responsive typography scaling
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Generous tap targets and spacing
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Progressive Enhancement</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    {/* Placeholder for ArrowUp icon (e.g., Lucide ArrowUp) */}
                    <svg
                      className="w-4 h-4 text-amber-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7l4-4m0 0l4 4m-4-4v18"
                      ></path>
                    </svg>
                    sm: breakpoint (640px) - Tablet adjustments
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-amber-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7l4-4m0 0l4 4m-4-4v18"
                      ></path>
                    </svg>
                    md: breakpoint (768px) - Two-column layout
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-amber-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7l4-4m0 0l4 4m-4-4v18"
                      ></path>
                    </svg>
                    lg: breakpoint (1024px) - Desktop refinement
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-amber-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7l4-4m0 0l4 4m-4-4v18"
                      ></path>
                    </svg>
                    xl: breakpoint (1280px) - Large screen optimization
                  </li>
                </ul>
              </div>
            </div>

            {/* Code Block for Hero Component - Copy button removed */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-mono text-sm">Responsive Hero Component</span>
                {/* Copy button removed as requested */}
              </div>
              <pre
                id="hero-component"
                className="text-green-400 text-sm overflow-x-auto"
              >
                <code className="whitespace-pre-wrap">
                  {`const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile-first: single column, centered text */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              Mobile-First
              <span className="text-blue-600">Design</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600">
              Responsive typography that scales beautifully across all devices
            </p>

            {/* Full-width button on mobile, auto-width on desktop */}
            <button className="w-full sm:w-auto bg-blue-600 text-white
              px-8 py-4 rounded-xl font-medium hover:bg-blue-700
              transition-colors">
              Get Started
            </button>
          </div>

          {/* Image appears on tablet and above */}
          <div className="hidden md:block">
            {/* Use next/image for production performance */}
            <img src="/hero-image.jpg" alt="Modern web interface"
              className="w-full rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};`}
                </code>
              </pre>
            </div>
          </div>

          {/* 2. Hero Background Styling Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Hero Section Background &amp; Styling
            </h3>
            <p className="text-gray-600 mb-6">
              The 2025 trend favors dynamic gradients over flat backgrounds, with neo-pastel combinations creating sophisticated, energetic visual experiences.
              <a href="#ref-591" className="text-blue-600 hover:text-blue-800 underline">
                [591]
              </a>
            </p>

            {/* Code Block for Gradient - Copy button removed */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-mono text-sm">Gradient Background Implementation</span>
                {/* Copy button removed as requested */}
              </div>
              <pre
                id="gradient-bg"
                className="text-green-400 text-sm overflow-x-auto"
              >
                <code className="whitespace-pre-wrap">{`// Tailwind gradient utilities
<section className="bg-gradient-to-br from-white via-primary-100 to-secondary-100">

// Or using custom CSS variables (Requires CSS setup)
<section
  className="bg-[linear-gradient(135deg,_white,_var(--color-primary-100)_50%,_var(--color-secondary-100))]"
>

// With subtle overlay for text readability
<div className="relative">
  <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
  <div className="relative z-10">
    {/* Text content */}
  </div>
</div>`}</code>
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Mint Frost</h4>
                <p className="text-gray-600 text-sm">Calming teal gradients for wellness applications</p>
              </div>
              <div className="bg-gradient-to-br from-white to-pink-100 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Dusty Rose</h4>
                <p className="text-gray-600 text-sm">Warm pink tones for action elements</p>
              </div>
              <div className="bg-gradient-to-br from-white to-indigo-100 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Sky Blue</h4>
                <p className="text-gray-600 text-sm">Fresh blue accents for highlights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingImplementationSection;