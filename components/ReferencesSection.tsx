

const ReferencesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          References
        </h2>

        {/* 3-Column Grid for Links (3 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">

          {/* Reference Item 1 */}
          <div className="p-3 rounded-lg hover:bg-gray-50 transition duration-150">
            <span className="font-mono text-gray-500 mr-2">[591]</span>
            {/* Note: This should be a Next.js <Link> component */}
            <a
              href="https://enveos.com/top-creative-color-gradient-trends-for-2025-a-bold-shift-in-design/"
              className="font-medium text-primary600 hover:text-primary800 transition duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              Top Creative Color Gradient Trends for 2025
            </a>
          </div>

          {/* Reference Item 2 */}
          <div className="p-3 rounded-lg hover:bg-gray-50 transition duration-150">
            <span className="font-mono text-gray-500 mr-2">[594]</span>
            <a
              href="https://amitguptablogs.com/top-15-trending-pastel-colours-for-designers/"
              className="font-medium text-primary600 hover:text-primary800 transition duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              Top 15 Trending Pastel Colours for Designers
            </a>
          </div>

          {/* Reference Item 3 */}
          <div className="p-3 rounded-lg hover:bg-gray-50 transition duration-150">
            <span className="font-mono text-gray-500 mr-2">[597]</span>
            <a
              href="https://www.parallelhq.com/blog/mobile-first-design-approach"
              className="font-medium text-primary600 hover:text-primary800 transition duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mobile-First Design Approach
            </a>
          </div>

          {/* Reference Item 4 */}
          <div className="p-3 rounded-lg hover:bg-gray-50 transition duration-150">
            <span className="font-mono text-gray-500 mr-2">[600]</span>
            <a
              href="https://evolutionmarketing.com/blog/googles-contrast-ratio-guidelines"
              className="font-medium text-primary600 hover:text-primary800 transition duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's Contrast Ratio Guidelines
            </a>
          </div>

          {/* Reference Item 5 */}
          <div className="p-3 rounded-lg hover:bg-gray-50 transition duration-150">
            <span className="font-mono text-gray-500 mr-2">[182]</span>
            <a
              href="https://testparty.ai/blog/mobile-accessibility-guide"
              className="font-medium text-primary600 hover:text-primary800 transition duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mobile Accessibility Guide
            </a>
          </div>

          {/* Placeholder for visual balance in the 3x2 grid */}
          <div className="p-3 rounded-lg text-gray-400 italic">
            Check back later for additional sources.
          </div>

        </div>

      </div>
    </div>
  </section>
);

export default ReferencesSection;