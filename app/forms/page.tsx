"use client";

import React from "react";
import { Github, Mail } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Forms
          </p>
          <h2 className="bg-gradient-to-r from-sky-400 via-cyan-300 to-pink-400 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
            Sign in to Codeco.tech
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Opinionated form styling, tuned for clarity and speed. No noise, just fields that feel right.
          </p>
        </header>

        <div className="mx-auto max-w-md">
          <div className="relative">
            {/* glow */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-sky-500/25 via-sky-400/0 to-pink-500/30 opacity-70 blur-2xl" />

            {/* card */}
            <div className="relative rounded-2xl border border-border/80 bg-background/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.45)] backdrop-blur-lg sm:p-7">
              <form className="space-y-6" action="#">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Welcome back
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Enter your details to access the dashboard.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@codeco.tech"
                      className="block w-full rounded-xl border-border bg-background/60 px-3 py-2.5 text-sm text-foreground shadow-sm outline-none ring-0 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-foreground"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="block w-full rounded-xl border-border bg-background/60 px-3 py-2.5 text-sm text-foreground shadow-sm outline-none ring-0 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 text-xs">
                    <label className="inline-flex items-center gap-2 text-muted-foreground">
                      <input
                        id="remember"
                        type="checkbox"
                        className="h-3.5 w-3.5 rounded border-border bg-background text-sky-500 focus:ring-2 focus:ring-sky-400/40"
                      />
                      <span>Remember me</span>
                    </label>
                    <a
                      href="#"
                      className="text-[11px] font-medium text-sky-400 hover:text-sky-300"
                    >
                      Lost password?
                    </a>
                  </div>
                </div>

                {/* Primary submit */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_16px_55px_rgba(56,189,248,0.6)] transition-transform duration-150 hover:-translate-y-0.5"
                >
                  Login to your account
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="h-px flex-1 bg-border" />
                  <span className="uppercase tracking-[0.18em]">
                    Or continue with
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                {/* Social buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/60 px-3 py-2.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:border-sky-400 hover:bg-background"
                  // onClick={handleGoogle} // wire your logic here
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-rose-400 text-[10px] text-slate-950">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span>Gmail</span>
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/60 px-3 py-2.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:border-sky-400 hover:bg-background"
                  // onClick={handleGithub} // wire your logic here
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground/90 text-[10px] text-background">
                      <Github className="h-3.5 w-3.5" />
                    </span>
                    <span>GitHub</span>
                  </button>
                </div>

                {/* Bottom text */}
                <div className="flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
                  <span>Not registered yet?</span>
                  <a
                    href="#"
                    className="font-medium text-sky-400 hover:text-sky-300"
                  >
                    Create an account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// import React from "react";
// import { Github, Mail } from "lucide-react";


// export default function Page() {
//   return (
//     <main className="min-h-[calc(100vh-4rem)] bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-6xl">
//         <header className="mb-10 space-y-2">
//           <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
//             Forms
//           </p>
//           <h2 className="bg-gradient-to-r from-sky-400 via-cyan-300 to-pink-400 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
//             Sign in to Codeco.tech
//           </h2>
//           <p className="max-w-md text-sm text-muted-foreground">
//             Opinionated form styling, tuned for clarity and speed. No noise, just fields that feel right.
//           </p>
//         </header>

//         <div className="mx-auto max-w-md">
//           <div className="relative">
//             {/* glow */}
//             <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-sky-500/25 via-sky-400/0 to-pink-500/30 opacity-70 blur-2xl" />
//             {/* card */}
//             <div className="relative rounded-2xl border border-border/80 bg-background/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.45)] backdrop-blur-lg sm:p-7">
//               <form className="space-y-6" action="#">
//                 <div className="space-y-1.5">
//                   <h3 className="text-lg font-semibold tracking-tight">
//                     Welcome back
//                   </h3>
//                   <p className="text-xs text-muted-foreground">
//                     Enter your details to access the dashboard.
//                   </p>
//                 </div>

//                 <div className="space-y-5">
//                   <div className="space-y-1.5">
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-foreground"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       placeholder="you@codeco.tech"
//                       className="block w-full rounded-xl border-border bg-background/60 px-3 py-2.5 text-sm text-foreground shadow-sm outline-none ring-0 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-foreground"
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       id="password"
//                       placeholder="••••••••"
//                       className="block w-full rounded-xl border-border bg-background/60 px-3 py-2.5 text-sm text-foreground shadow-sm outline-none ring-0 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40"
//                       required
//                     />
//                   </div>

//                   <div className="flex items-center justify-between gap-3 text-xs">
//                     <label className="inline-flex items-center gap-2 text-muted-foreground">
//                       <input
//                         id="remember"
//                         type="checkbox"
//                         className="h-3.5 w-3.5 rounded border-border bg-background text-sky-500 focus:ring-2 focus:ring-sky-400/40"
//                       />
//                       <span>Remember me</span>
//                     </label>
//                     <a
//                       href="#"
//                       className="text-[11px] font-medium text-sky-400 hover:text-sky-300"
//                     >
//                       Lost password?
//                     </a>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_16px_55px_rgba(56,189,248,0.6)] transition-transform duration-150 hover:-translate-y-0.5"
//                 >
//                   Login to your account
//                 </button>

//                 <div className="flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
//                   <span>Not registered yet?</span>
//                   <a
//                     href="#"
//                     className="font-medium text-sky-400 hover:text-sky-300"
//                   >
//                     Create an account
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// import React from "react";

// export default function page() {
//   return (
//     <div>
//       <h2>Forms</h2>

//       <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//         <form className="space-y-6" action="#">
//           <h5 className="text-xl font-medium text-gray-900 dark:text-white">
//             Sign in to our platform
//           </h5>
//           <div>
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//               placeholder="name@company.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Your password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="••••••••"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//               required
//             />
//           </div>
//           <div className="flex items-start">
//             <div className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   value=""
//                   className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
//                   required
//                 />
//               </div>
//               <label
//                 htmlFor="remember"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Remember me
//               </label>
//             </div>
//             <a
//               href="#"
//               className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
//             >
//               Lost Password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Login to your account
//           </button>
//           <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//             Not registered?{" "}
//             <a
//               href="#"
//               className="text-blue-700 hover:underline dark:text-blue-500"
//             >
//               Create account
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
