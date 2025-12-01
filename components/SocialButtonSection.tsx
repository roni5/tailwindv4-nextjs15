// SocialButtonSection.tsx

import React from 'react';

const SocialButtonSection: React.FC = () => {
  // This code block is displayed as an example of a reusable component.
  const SocialButtonCodeExample = `const SocialButton = ({ icon: Icon, label, brand }) => {
  const brandColors = {
    google: 'bg-red-50 hover:bg-red-100 text-red-700',
    github: 'bg-gray-50 hover:bg-gray-100 text-gray-700',
    facebook: 'bg-blue-50 hover:bg-blue-100 text-blue-700',
    twitter: 'bg-sky-50 hover:bg-sky-100 text-sky-700',
  };
  
  // NOTE: You must define 'handleSocialLogin' in a client component or pass it as a prop.
  const handleSocialLogin = (provider) => {
    // e.g., signIn(provider) from NextAuth/Auth.js
    console.log(\`Signing in with \${provider}\`);
  };

  return (
    <button
      className={\`flex items-center justify-center gap-2
        \${brandColors[brand]}
        p-4 rounded-xl transition-all duration-200
        min-h-[44px] min-w-[44px] /* WCAG touch target */
        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        aria-label={\`Sign in with \${label}\`}\`} // Replaced 'primary' with 'blue-500'
      onClick={() => handleSocialLogin(brand)}
    >
      {/* Icon should be a Lucide React component passed as a prop */}
      <Icon size={20} className="flex-shrink-0" /> 
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
};`;

  return (
    // Assuming this section is within a larger wrapper, like a documentation page or layout
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Social Login Button Component
      </h3>
      <p className="text-gray-600 mb-6">
        Each button implements WCAG 2.2 AAA standards with 44×44px minimum touch targets and clear visual feedback.
        <a href="#ref-182" className="text-blue-600 hover:text-blue-800 underline">
          [182]
        </a>
      </p>

      <div className="bg-gray-900 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-300 font-mono text-sm">
            SocialButton Component
          </span>
          {/* Removed copy button */}
        </div>
        <pre
          id="social-button"
          className="text-green-400 text-sm overflow-x-auto"
        >
          <code className="whitespace-pre-wrap">{SocialButtonCodeExample}</code>
        </pre>
      </div>
    </div>
  );
};

export default SocialButtonSection;