// AccessibilitySeoSection.tsx

import React from 'react';

const AccessibilitySeoSection: React.FC = () => {
  // Code block content for Semantic HTML (Correct)
  const SemanticHtmlCorrect = `<header>
  <h1>Main Page Title</h1>
  <p>Supporting tagline</p>
  <button>Call to Action</button>
</header>

<main>
  <section>
    <h2>Section Title</h2>
    <article>Content</article>
  </section>
</main>`;

  // Code block content for Semantic HTML (Incorrect)
  const SemanticHtmlIncorrect = `<div className="header">
  <div className="h1">Title</div>
  <div className="text">Tagline</div>
  <div className="button">CTA</div>
</div>

<div className="content">
  <div className="section">
    <div className="h2">Section</div>
    <div className="article">Content</div>
  </div>
</div>`; // Note: Inner class="h1" etc. is intentionally left as a string in the PRE block

  // Code block content for Accessible Button
  const AccessibleButtonCode = `<button
  className="flex items-center justify-center gap-2
    bg-blue-600 text-white px-6 py-3 rounded-xl
    hover:bg-blue-700 transition-colors
    focus:outline-none focus:ring-2
    focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed" // Replaced 'primary' with 'blue'
  aria-label="Sign in with Google account"
  aria-describedby="social-login-description"
  disabled={isLoading}
  onClick={handleSocialLogin}
>
  <GoogleIcon size={20} aria-hidden="true" />
  <span>Continue with Google</span>
</button>

<p id="social-login-description" className="sr-only">
  Securely sign in using your existing Google account credentials
</p>`;

  return (
    <section id="accessibility-seo" className="py-20  bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Accessibility &amp; SEO Best Practices
          </h2>

          {/* 1. Semantic HTML */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Semantic HTML Structure
            </h3>
            <p className="text-gray-600 mb-6">
              Proper semantic markup improves both accessibility for screen readers and search engine understanding of content hierarchy.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">
                  ✓ Correct Implementation
                </h4>
                <div className="bg-gray-900 rounded-lg p-4 text-green-400 text-sm font-mono">
                  <pre>
                    <code className="whitespace-pre-wrap">
                      {SemanticHtmlCorrect}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">
                  ✗ Incorrect Implementation
                </h4>
                <div className="bg-gray-900 rounded-lg p-4 text-red-400 text-sm font-mono">
                  <pre>
                    <code className="whitespace-pre-wrap">
                      {SemanticHtmlIncorrect}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Color Contrast */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              WCAG Color Contrast Compliance
            </h3>
            <p className="text-gray-600 mb-6">
              WCAG 2.1 Level AA requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18pt or 14pt bold).
              <a href="#ref-600" className="text-blue-600 hover:text-blue-800 underline">
                [600]
              </a>
            </p>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Card 1: Excellent Contrast */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-200">
                <div className="w-16 h-16 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Aa</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Excellent Contrast
                </h4>
                <p className="text-sm text-gray-600">7:1 ratio</p>
                <p className="text-xs text-green-600 font-medium">
                  ✓ WCAG AAA
                </p>
              </div>
              {/* Card 2: Good Contrast */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-200">
                <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Aa</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Good Contrast
                </h4>
                <p className="text-sm text-gray-600">4.5:1 ratio</p>
                <p className="text-xs text-green-600 font-medium">
                  ✓ WCAG AA
                </p>
              </div>
              {/* Card 3: Poor Contrast */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-yellow-200">
                <div className="w-16 h-16 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Aa</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Poor Contrast
                </h4>
                <p className="text-sm text-gray-600">3:1 ratio</p>
                <p className="text-xs text-yellow-600 font-medium">
                  ⚠ Large text only
                </p>
              </div>
              {/* Card 4: Fail Contrast */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-200">
                <div className="w-16 h-16 bg-gray-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Aa</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Fail Contrast
                </h4>
                <p className="text-sm text-gray-600">2:1 ratio</p>
                <p className="text-xs text-red-600 font-medium">
                  ✗ Not accessible
                </p>
              </div>
            </div>
          </div>

          {/* 3. ARIA Labels and Keyboard Navigation */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              ARIA Labels &amp; Keyboard Navigation
            </h3>
            <p className="text-gray-600 mb-6">
              Proper ARIA labeling and visible focus states ensure the interface is fully operable for users relying on assistive technologies and keyboard navigation.
            </p>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-mono text-sm">
                  Accessible Button Implementation
                </span>
                {/* Removed copy button and its functionality */}
              </div>
              <pre
                id="accessible-button"
                className="text-green-400 text-sm overflow-x-auto"
              >
                <code className="whitespace-pre-wrap">
                  {AccessibleButtonCode}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySeoSection;