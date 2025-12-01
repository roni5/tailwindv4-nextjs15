// MobileFirstGridSection.tsx

import React from 'react';

const MobileFirstGridSection: React.FC = () => {
  return (
    <section id="grid-implementation" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Mobile-First Responsive Grid
          </h2>

          {/* Grid Principles */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">CSS Grid vs. Flexbox</h3>
            <p className="text-gray-600 mb-6">
              While Flexbox is ideal for one-dimensional layouts (rows or columns), CSS Grid is the definitive solution for complex, two-dimensional interfaces, forming the foundation of modern component architecture.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">CSS Grid</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Two-dimensional (rows & columns)</li>
                  <li>Ideal for page layout/component structure</li>
                  <li>Uses `grid-template-areas`</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-2">Flexbox</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>One-dimensional (row or column)</li>
                  <li>Ideal for alignment within components</li>
                  <li>Uses `justify-content` and `align-items`</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                <h4 className="font-semibold text-gray-800 mb-2">Hybrid Approach</h4>
                <p className="text-gray-700 text-sm">
                  Use CSS Grid for the macro structure of the page, and Flexbox for fine-tuning the alignment of elements within individual grid cells.
                </p>
              </div>
            </div>
          </div>

          {/* Responsive Grid Implementation */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tailwind Grid Implementation</h3>
            <p className="text-gray-600 mb-6">
              Tailwind CSS uses a mobile-first approach for grid utilities, ensuring the layout adapts seamlessly from small screens to large desktops.
            </p>

            {/* Code Block for Grid Example - Copy button removed */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-mono text-sm">Responsive Card Grid Example</span>
                {/* Removed copy button and click handler */}
              </div>
              <pre
                id="grid-example"
                className="text-green-400 text-sm overflow-x-auto"
              >
                <code className="whitespace-pre-wrap">
                  {/* Converted inner HTML to JSX and used template literal */}
                  {`<div className="grid grid-cols-1 gap-6">
  {/* Default: 1 column per row */}
  <div className="bg-white rounded-lg p-6">Card 1</div>
  <div className="bg-white rounded-lg p-6">Card 2</div>

  {/* sm: breakpoint (e.g., 640px) and up: 2 columns per row */}
  <div className="sm:col-span-2 bg-white rounded-lg p-6">Wide Card 3</div>

  {/* md: breakpoint (e.g., 768px) and up: 3 columns per row */}
  <div className="md:col-span-1 bg-white rounded-lg p-6">Card 4</div>
  <div className="md:col-span-2 bg-white rounded-lg p-6">Wider Card 5</div>
</div>

{/* Final grid utility: md:grid-cols-3 */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {/* ... cards ... */}
</div>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirstGridSection;


