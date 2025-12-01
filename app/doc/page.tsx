'use client';
import React, { useState, useEffect } from 'react';
import { Copy, Check, Menu, X, Zap, Smartphone, Rss, Layers, TrendingUp } from 'lucide-react';
import LandingImplementationSection from '@/components/LandingImplementationSection';
import MobileFirstGridSection from '@/components/MobileFirstGridSection';
import SocialButtonSection from '@/components/SocialButtonSection';
import AccessibilitySeoSection from '@/components/AccessibilitySeoSection';
import BestPracticesSection from '@/components/BestPracticesSection';
import FinalNotesSection from '@/components/FinalNotesSection';
import ReferencesSection from '@/components/ReferencesSection';

const GoogleSvg = '/google.svg';
const GithubSvg = '/github.svg';
const FacebookSvg = '/facebook.svg';
const xSvg = '/x.svg';


// --- TYPES ---
interface SectionLink {
  id: string;
  label: string;
}

interface CodeBlockProps {
  code: string;
  filename: string;
  language?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SocialButtonProps {
  provider: 'google' | 'github' | 'facebook' | 'twitter';
  label: string;
}

// --- SUB-COMPONENTS ---

// Table of Contents Component (Mobile Modal)
const TableOfContents: React.FC<{ activeSection: string; isOpen: boolean; onClose: () => void }> = ({
  activeSection,
  isOpen,
  onClose
}) => {
  const sections: SectionLink[] = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'executive-summary', label: 'Summary' },
    { id: 'core-setup', label: 'Project Setup' },
    { id: 'landing-implementation', label: 'Landing Page' },
    { id: 'social-login', label: 'Social Login' },
    { id: 'accessibility-seo', label: 'A11Y & SEO' },
    { id: 'best-practices', label: 'Best Practices' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full bg-white shadow-2xl p-6 z-50 w-64 lg:hidden">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-gray-900">Contents</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                className={`block px-4 py-2 rounded-lg transition-all cursor-pointer text-base font-medium ${activeSection === section.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// Code Block Component
const CodeBlock: React.FC<CodeBlockProps> = ({ code, filename, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-4 sm:p-6 mb-8 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-300 font-mono text-xs sm:text-sm">{filename}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors p-2 rounded hover:bg-gray-800"
          aria-label="Copy code to clipboard"
        >
          {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="text-green-400 text-xs sm:text-sm font-mono whitespace-pre-wrap break-all">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-4 hover:shadow-lg transition-shadow border border-gray-100 flex items-center space-x-3">
    <div className="text-blue-600 flex-shrink-0">{icon}</div>
    <div className="min-w-0">
      <h3 className="font-medium text-gray-900 text-sm truncate">{title}</h3>
      <p className="text-xs text-gray-500 truncate">{description}</p>
    </div>
  </div>
);

// Social Button Component
const SocialButton: React.FC<SocialButtonProps> = ({ provider, label }) => {
  const baseStyles = 'flex items-center justify-center gap-2 p-4 rounded-xl transition-all hover:shadow-md border font-medium w-full';
  const styles = {
    google: 'bg-red-50 hover:bg-red-100 text-red-700 border-red-100',
    github: 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200',
    facebook: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-100',
    twitter: 'bg-sky-50 hover:bg-sky-100 text-sky-700 border-sky-100',
  };
  //FacebookSvg
  const icons = {
    google: <img src={GoogleSvg} alt="Google icon" width={20} height={20} />,
    github: <img src={GithubSvg} alt="Github icon" width={20} height={20} />,
    facebook: <img src={FacebookSvg} alt="Github icon" width={20} height={20} />,
    twitter: <img src={xSvg} alt="Github icon" width={16} height={16} />,
  };

  return (
    <button
      className={`${baseStyles} ${styles[provider]}`}
      aria-label={`Sign in with ${label}`}
    >
      <span className="text-xl">{icons[provider]}</span>
      {label}
    </button>
  );
};


// --- MAIN COMPONENT ---
const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Hook to track active section for sidebar/TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      const viewportCenter = window.innerHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the section's start is visible or past the middle of the viewport
        if (rect.top <= viewportCenter) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- CODE BLOCKS CONTENT ---
  const tailwindConfig = `/* globals.css */
@layer theme {
  :root {
    /* Primary Palette - Teal */
    --color-primary-50: #f0fdfa;
    --color-primary-100: #ccfbf1;
    --color-primary-200: #99f6e4;
    --color-primary-300: #5eead4;
    --color-primary-400: #2dd4bf;
    --color-primary-500: #14b8a6;
    --color-primary-600: #0d9488;
    --color-primary-700: #0f766e;
    --color-primary-800: #115e59;
    --color-primary-900: #134e4a;

    /* Secondary Palette - Rose */
    --color-secondary-50: #fdf2f8;
    --color-secondary-100: #fce7f3;
    --color-secondary-200: #fbcfe8;
    --color-secondary-300: #f9a8d4;
    --color-secondary-400: #f472b6;
    --color-secondary-500: #ec4899;
    --color-secondary-600: #db2777;
    --color-secondary-700: #be185d;
    --color-secondary-800: #9d174d;
    --color-secondary-900: #831843;

    /* Accent Palette - Sky */
    --color-accent-50: #f0f9ff;
    --color-accent-100: #e0f2fe;
    --color-accent-200: #bae6fd;
    --color-accent-300: #7dd3fc;
    --color-accent-400: #38bdf8;
    --color-accent-500: #0ea5e9;
    --color-accent-600: #0284c7;
    --color-accent-700: #0369a1;
    --color-accent-800: #075985;
    --color-accent-900: #0c4a6e;
  }
}


@layer base {
  /* Using CSS variables for responsive scaling */
  .text-responsive-heading {
    font-size: var(--font-heading-mobile);
  }
  @media (min-width: 1024px) {
    .text-responsive-heading {
      font-size: var(--font-heading-desktop);
    }
  }
}`;

  const heroComponent = `
const HeroSection = () => {
  return (
   <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-pink-50 py-20">
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Mobile: Vertical Stack (1-col) | Desktop: 7/5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Content Wrapper: CRITICAL FIX for centering text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left
                        flex flex-col items-center lg:items-start mx-auto lg:mx-0">

            {/* H1 Title Block */}
            <h1 className="text-responsive-heading text-5xl md:text-6xl lg:text-7xl
                           font-extrabold text-gray-900 leading-tight tracking-tight max-w-2xl mx-auto">
              Modern Web{' '}
              <span className="text-primary-600 ">Implementation</span>
            </h1>

            {/* Paragraph Text */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed
                          max-w-2xl mx-auto">
              A comprehensive guide to building modern, accessible, and performant web applications...
            </p>

            {/* Call to Action Button */}
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl
                             transition hover:bg-blue-700 shadow-lg mt-4">
              Get Started
            </button>
          </div>

          {/* Image Placeholder (Fixed: uses mx-auto for reliable centering) */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end py-4 mt-10 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto">
              {/* image code goes here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};`;
  // --- JSX TEMPLATE ---
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      {/* Mobile Menu Button - Top Right */}
      <button
        onClick={() => setIsTocOpen(true)}
        className="fixed top-4 right-4 z-30 lg:hidden bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} className="text-gray-700" />
      </button>

      {/* Table of Contents Modal for Mobile */}
      <TableOfContents
        activeSection={activeSection}
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
      />

      {/* Main Layout Container */}
      <div className="flex">
        {/* Desktop Sidebar - LEFT SIDE */}
        <aside className="hidden lg:block w-64 fixed left-0 top-0 h-screen overflow-y-auto border-r border-gray-200 bg-white p-6 z-10 scrollbar-thin scrollbar-thumb-gray-200 pt-10">
          <h3 className="text-lg font-bold text-gray-900 mb-6 px-2">Document Structure</h3>
          <ul className="space-y-1 text-sm">
            {[
              { id: 'hero', label: '1. Hero Section' },
              { id: 'executive-summary', label: '2. Executive Summary' },
              { id: 'core-setup', label: '3. Core Project Setup' },
              { id: 'landing-implementation', label: '4. Landing Page' },
              { id: 'social-login', label: '5. Social Login Page' },
              { id: 'accessibility-seo', label: '6. Accessibility & SEO' },
              { id: 'best-practices', label: '7. Best Practices' },
            ].map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`block px-3 py-2 rounded-lg transition-colors cursor-pointer ${activeSection === section.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-0 lg:ml-64 w-full">
          {/* 1. Hero Section - Refactored for reliable centering */}
          <section id="hero" className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-pink-50 py-20 lg:py-0">
            <div className="w-full max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left Content Block (CRITICAL FIX for centering text) */}
                <div className="lg:col-span-7 space-y-8 text-center lg:text-left 
                              flex flex-col items-center lg:items-start mx-auto lg:mx-0">
                  <div className="space-y-6 max-w-3xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                      Modern Web{' '}
                      <span className="italic text-primary-600 block">Implementation</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
                      A comprehensive guide to building modern, accessible, and performant web applications with React, Tailwind CSS, and Best Practices.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-8 max-w-lg w-full">
                    <FeatureCard icon={<Smartphone size={20} />} title="Mobile-First" description="Responsive from the start" />
                    <FeatureCard icon={<Rss size={20} />} title="WCAG AA" description="Accessible to everyone" />
                    <FeatureCard icon={<Layers size={20} />} title="Modern Aesthetics" description="Clean & minimal UI" />
                    <FeatureCard icon={<Zap size={20} />} title="High Performance" description="Optimized for speed" />
                  </div>
                </div>

                {/* Right Image Block (FIXED Centering on Mobile) */}
                <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end py-4 mt-10 lg:mt-0">
                  {/* mx-auto is the definitive fix for centering this block on mobile */}
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto">
                    <img
                      src="green-pastel.webp"
                      alt="Modern minimalist web interface design preview"
                      className="hidden lg:block w-full h-auto aspect-[3/4] object-cover rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Executive Summary */}
          <section id="executive-summary" className="py-24 bg-white border-t border-gray-100">
            <div className="w-full max-w-5xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Executive Summary</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
                This comprehensive guide demonstrates modern web development practices using React and Tailwind CSS v3/v4, focusing on accessibility, performance, and SEO best practices to deliver superior user experiences.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Technologies</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>React 18+ for UI components</li>
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Tailwind CSS for utility styling</li>
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>TypeScript for type safety</li>
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Lucide React for iconography</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Principles</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Mobile-first responsive design</li>
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Modern aesthetic consistency</li>
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>WCAG AA contrast compliance</li>
                    <li className="flex items-center text-lg"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Semantic HTML structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Core Setup */}
          <section id="core-setup" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="w-full max-w-5xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Core Project Setup</h2>

              <div className="mb-16">
             <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tailwind CSS v4 Configuration</h3>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6"></h3>
                <p className="text-gray-600 mb-6 text-lg">
                  The foundation of modern theming begins with <code className="bg-gray-100 px-2 py-1 rounded">globals.css</code> , using the <code className="bg-gray-100 px-2 py-1 rounded">@layer theme</code> directive to define custom CSS variables that serve as the single source of truth for the entire design system.
                </p>
                <CodeBlock
                  code={tailwindConfig}
                  filename="globals.css"
                  language="css"
                />
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💡</span>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Neo-Pastel 2025 Trends</h4>
                      <p className="text-yellow-700">
                        The 2025 design landscape favors sophisticated pastel blends like <strong>Mint Frost (#D4F0E5)</strong>, <strong>Dusty Rose (#EFCAD2)</strong>, and <strong>Cream Yellow (#FFF4CC)</strong>, which have shown to boost user engagement by 35% in fitness app implementations.
                        <a href="#ref-594" className="text-yellow-600 hover:text-yellow-800 underline"></a>
                      </p>
                    </div>
              </div>
            </div>
            </div>
              {/* Lucide Icons Integration */}
              <div className="mb-16">
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                  Lucide Icons Integration
                </h3>

                <p className="text-gray-600 mb-6">
                  Lucide icons are implemented as React components, providing flexibility and performance benefits over traditional icon fonts or SVG imports.
                </p>

                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300 font-mono text-sm">
                      Installation &amp; Usage
                    </span>
                    <button
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={() => copyCode('lucide-setup')}
                    >
                      <Copy size={20} />
                    </button>
                  </div>

                  <pre id="lucide-setup" className="text-green-400 text-sm overflow-x-auto">
                    <code>{`// Installation
npm install lucide-react

// Usage in components
import {Github, Mail, Facebook, Twitter} from 'lucide-react';

const SocialButton = ({icon: Icon, label }) => (
  <button className="flex items-center justify-center gap-2">
    <Icon size={20} className="text-current" />
    <span>{label}</span>
  </button>
);`}</code>
                  </pre>
                </div>
              </div>
            </div>

          </section>
    
          {/* 4. Landing Page Implementation */}
          <LandingImplementationSection/>
          {/* 5. Social Login */}
          <section id="social-login" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="w-full max-w-5xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12 text-center">Social Login Page</h2>
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Responsive Authentication Grid</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  A fluid grid that stacks on very small screens and moves to a 2-column layout for better balance on wider devices. Each button is styled using a dedicated component for maintainability.
                </p>

                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100 max-w-sm mx-auto">
                  <h3 className="text-center font-bold text-gray-900 mb-8 text-2xl">Sign in to Continue</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SocialButton provider="google" label="Google" />
                    <SocialButton provider="github" label="GitHub" />
                    <SocialButton provider="facebook" label="Facebook" />
                    <SocialButton provider="twitter" label="Twitter" />
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">Or use a custom provider</p>
                  </div>
                </div>
              </div> 
              <MobileFirstGridSection />
              <div className="mt-8 md:mt-16">

              <SocialButtonSection />
              </div>
            </div>
          </section>

          {/* 6. Accessibility & SEO */}
          <section id="accessibility-seo" className="">
              <AccessibilitySeoSection/>
          </section>

          {/* 7. Best Practices */}
          <BestPracticesSection />
          <section id="best-practices" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="w-full max-w-5xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Best Practices</h2>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">State Management & Data Flow</h3>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <TrendingUp size={32} className="text-indigo-600 mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">React Query / SWR</h4>
                        <p className="text-sm text-gray-500">Handling server state efficiently</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Separate server state (fetching, caching) from client state (UI toggles, forms) for predictability. Use modern hooks for data fetching.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">TypeScript and Linting</h3>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <Check size={32} className="text-green-600 mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Strict Typing</h4>
                        <p className="text-sm text-gray-500">Eliminating runtime errors</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Set up ESLint and Prettier for automatic formatting. Enable strict TypeScript mode to catch silent bugs during development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <FinalNotesSection />
          </section>
          <ReferencesSection />
        </main>
      </div>
    </div>
  );
};

export default LandingPage;

