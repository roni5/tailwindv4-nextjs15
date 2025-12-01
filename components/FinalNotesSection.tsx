// FinalNotesSection.tsx

import React from 'react';

// Placeholder for Check icon (e.g., Lucide CheckCircle)
const CheckCircleIcon = ({ className = 'w-4 h-4 text-teal-600 mr-2 flex-shrink-0' }) => (
  // Using a slightly different teal color to visually match the image better
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// Placeholder for Arrow Right icon (e.g., Lucide ArrowRight)
const ArrowRightIcon = ({ className = 'w-4 h-4 text-red-600 mr-2 flex-shrink-0' }) => (
  // Using red/pink color to visually match the image better
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
);

const FinalNotesSection: React.FC = () => {
  return (
    // Single Card Container with Gradient and Padding (matches visual)
    <div className="mt-16 bg-gradient-to-r from-blue-50/50 via-green-50/50 to-pink-50/50 rounded-2xl p-8 shadow-lg">

      <h3 className="text-2xl font-semibold text-gray-900 mb-8">
        Final Implementation Notes
      </h3>

      {/* Grid container for the two columns (Key Takeaways and Next Steps) */}
      <div className="grid md:grid-cols-2 gap-x-12">

        {/* LEFT COLUMN: Key Takeaways */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Key Takeaways</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <CheckCircleIcon />
              Mobile-first approach ensures optimal mobile experience
            </li>
            <li className="flex items-start">
              <CheckCircleIcon />
              WCAG AA compliance makes interfaces accessible to all
            </li>
            <li className="flex items-start">
              <CheckCircleIcon />
              Neo-pastel 2025 trends create modern, engaging designs
            </li>
            <li className="flex items-start">
              <CheckCircleIcon />
              Semantic HTML improves SEO and accessibility
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN: Next Steps */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Next Steps</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <ArrowRightIcon />
              Implement user authentication flows
            </li>
            <li className="flex items-start">
              <ArrowRightIcon />
              Add form validation and error handling
            </li>
            <li className="flex items-start">
              <ArrowRightIcon />
              Set up analytics and user tracking
            </li>
            <li className="flex items-start">
              <ArrowRightIcon />
              Deploy with proper monitoring
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinalNotesSection;
// // FinalNotesSection.tsx

// import React from 'react';
// // NOTE: These components assume you would use Lucide or similar icon library.

// // Placeholder for Check icon (e.g., Lucide CheckCircle)
// const CheckCircleIcon = ({ className = 'w-4 h-4 text-blue-600 mr-2 text-sm' }) => (
//   <svg
//     className={className}
//     fill="currentColor"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       fillRule="evenodd"
//       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

// // Placeholder for Arrow Right icon (e.g., Lucide ArrowRight)
// const ArrowRightIcon = ({ className = 'w-4 h-4 text-pink-600 mr-2 text-sm' }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M17 8l4 4m0 0l-4 4m4-4H3"
//     ></path>
//   </svg>
// );

// const FinalNotesSection: React.FC = () => {
//   return (
//     <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50  rounded-2xl p-8">
//       <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//         Final Implementation Notes
//       </h3>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <h4 className="font-semibold text-gray-900 mb-3">Key Takeaways</h4>
//           <ul className="space-y-2 text-gray-600">
//             <li className="flex items-center">
//               <CheckCircleIcon />
//               Mobile-first approach ensures optimal mobile experience
//             </li>
//             <li className="flex items-center">
//               <CheckCircleIcon />
//               WCAG AA compliance makes interfaces accessible to all
//             </li>
//             <li className="flex items-center">
//               <CheckCircleIcon />
//               Neo-pastel 2025 trends create modern, engaging designs
//             </li>
//             <li className="flex items-center">
//               <CheckCircleIcon />
//               Semantic HTML improves SEO and accessibility
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold text-gray-900 mb-3">Next Steps</h4>
//           <ul className="space-y-2 text-gray-600">
//             <li className="flex items-center">
//               <ArrowRightIcon />
//               Implement user authentication flows
//             </li>
//             <li className="flex items-center">
//               <ArrowRightIcon />
//               Add form validation and error handling
//             </li>
//             <li className="flex items-center">
//               <ArrowRightIcon />
//               Set up analytics and user tracking
//             </li>
//             <li className="flex items-center">
//               <ArrowRightIcon />
//               Deploy with proper monitoring
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalNotesSection;