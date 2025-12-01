// BestPracticesSection.tsx

import React from 'react';
import FinalNotesSection from './FinalNotesSection';
// NOTE: For icons, you would typically import them from 'lucide-react'
// Example: import { Rocket, Image, Accessibility, Smartphone } from 'lucide-react';

const BestPracticesSection: React.FC = () => {
  // SVG placeholder for 'fa-rocket' (Lucide: Rocket)
  const RocketIcon = () => (
    <svg
      className="w-5 h-5 text-blue-600 mr-3" // Using blue for primary color
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      ></path>
    </svg>
  );

  // SVG placeholder for 'fa-image' (Lucide: Image)
  const ImageIcon = () => (
    <svg
      className="w-5 h-5 text-pink-600 mr-3" // Using pink for secondary color
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
  );

  // SVG placeholder for 'fa-universal-access' (Lucide: Accessibility)
  const AccessIcon = () => (
    <svg
      className="w-5 h-5 text-purple-600 mr-3" // Using purple for accent color
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 7l-8-4-8 4m16 0l-8 4m-8-4v10l8 4m-8-14v.01M20 7v10l-8 4m0-10a4 4 0 100-8 4 4 0 000 8z"
      ></path>
    </svg>
  );

  // SVG placeholder for 'fa-mobile-alt' (Lucide: Smartphone)
  const MobileIcon = () => (
    <svg
      className="w-5 h-5 text-blue-600 mr-3" // Using blue for primary color
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      ></path>
    </svg>
  );

  return (
    <section id="best-practices" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Implementation Best Practices
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* 1. Performance */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Performance Optimization
              </h3>

              {/* Code Splitting */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <RocketIcon />
                  <h4 className="font-semibold text-gray-900">
                    Code Splitting
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Implement dynamic imports for heavy components and lazy loading for images below the fold.
                </p>
                <div className="bg-gray-100 rounded-lg p-3 text-xs font-mono text-gray-700">
                  const HeavyComponent = dynamic(() =&gt; import('./HeavyComponent'))
                </div>
              </div>

              {/* Image Optimization */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <ImageIcon />
                  <h4 className="font-semibold text-gray-900">
                    Image Optimization
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Use Next.js Image component with proper sizing and WebP format for optimal performance.
                </p>
                <div className="bg-gray-100 rounded-lg p-3 text-xs font-mono text-gray-700">
                  &lt;Image priority sizes="(max-width: 768px) 100vw, 50vw" /&gt;
                </div>
              </div>
            </div>

            {/* 2. Testing */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Testing &amp; Validation
              </h3>

              {/* Accessibility Testing */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <AccessIcon />
                  <h4 className="font-semibold text-gray-900">
                    Accessibility Testing
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Use Lighthouse, Axe, and manual keyboard navigation testing for comprehensive accessibility validation.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Lighthouse
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    Axe
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                    Manual
                  </span>
                </div>
              </div>

              {/* Responsive Testing */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <MobileIcon />
                  <h4 className="font-semibold text-gray-900">
                    Responsive Testing
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Test across multiple device sizes and browsers to ensure consistent experience.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                    Chrome
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                    Safari
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                    Firefox
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesSection;