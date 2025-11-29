"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Forms", href: "/forms" },
  { name: "Packages", href: "/packages" },
  { name: "Changes", href: "/changes" },
  { name: "Summary Guide", href: "/summary" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-3">
          {/* Circle logo */}
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-pink-400 opacity-80" />
            <div className="relative h-6 w-6 rounded-full bg-background" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-wide ">
              Codeco.tech
            </span>
          </div>
        </div>

        {/* Center nav (desktop) */}
        <nav className="hidden items-center space-x-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>{link.name}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-sky-400 via-cyan-300 to-pink-400 transition-transform duration-200 group-hover:scale-x-100 md:hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right: theme toggle + CTA (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_12px_35px_rgba(56,189,248,0.55)] transition-transform duration-150 hover:-translate-y-0.5">
            <span>Get started</span>
          </button>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <span className="sr-only">Toggle navigation</span>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-border/70 bg-background/95 shadow-lg md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-3 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 w-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_35px_rgba(56,189,248,0.55)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
// import { ModeToggle } from "./mode-toggle";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Forms", href: "/forms" },
//     { name: "Packages", href: "/packages" },
//     { name: "Changes", href: "/changes" },
//     { name: "Summary Guide", href: "/summary" },
//   ];

//   return (
//     <div
//       className={`${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       } transition-colors duration-200`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo and desktop navigation */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <span className="text-xl font-bold">
//                 TW
//                 <span
//                   className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}
//                 >
//                   v4
//                 </span>
//               </span>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-center space-x-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`px-3 py-2 rounded-md text-sm font-medium 
//                       ${
//                         darkMode
//                           ? "hover:bg-gray-700 hover:text-white"
//                           : "hover:bg-gray-100 hover:text-gray-900"
//                       } 
//                       transition-colors duration-200`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right side items */}
//           <div className="hidden md:flex items-center space-x-3">
//             {/* Dark mode toggle */}
//             <ModeToggle />

//             {/* Example button - could be login/signup */}
//             <button
//               className={`px-4 py-2 rounded-md text-sm font-medium 
//                 ${
//                   darkMode
//                     ? "bg-blue-600 hover:bg-blue-700 text-white"
//                     : "bg-blue-600 hover:bg-blue-700 text-white"
//                 } 
//                 transition-colors duration-200`}
//             >
//               Get Started
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex md:hidden">
//             <ModeToggle />
//             <button
//               onClick={toggleMenu}
//               className={`inline-flex items-center justify-center p-2 rounded-md
//                 ${
//                   darkMode
//                     ? "text-gray-400 hover:text-white hover:bg-gray-700"
//                     : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//                 } 
//                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
//         <div
//           className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
//             darkMode ? "bg-gray-800" : "bg-gray-50"
//           }`}
//         >
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`block px-3 py-2 rounded-md text-base font-medium 
//                 ${
//                   darkMode
//                     ? "text-white hover:bg-gray-700"
//                     : "text-gray-900 hover:bg-gray-200"
//                 } 
//                 transition-colors duration-200`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <button
//             className={`w-full mt-4 px-4 py-2 rounded-md text-sm font-medium 
//               ${
//                 darkMode
//                   ? "bg-blue-600 hover:bg-blue-700 text-white"
//                   : "bg-blue-600 hover:bg-blue-700 text-white"
//               } 
//               transition-colors duration-200`}
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
