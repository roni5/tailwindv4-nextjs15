import React from "react";

export default function page() {
  return (
    <div>
      <article className="prose-dark line-clamp-2 space-y-100 p-8 prose prose-lg prose-slate mx-auto">
        <h1>Ultra GOAT landing</h1>
        <p className="line-clamp-1">Body copy that stays readable in both light and dark.</p>
      </article>
      <p className="line-clamp-2 space-y-100 p-8 prose prose-lg prose-slate mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto
        dignissimos, eius ex omnis consectetur qui tenetur quos repellendus, hic
        aperiam voluptates. Autem ullam sequi quis magnam ipsa mollitia,
        officiis quia aliquid repudiandae et molestias odit fuga voluptatum,
        adipisci recusandae! Animi blanditiis, sint fugit aperiam incidunt
        ratione perspiciatis quisquam nemo tempora ipsum at cupiditate
        reiciendis est rem vel eius voluptas adipisci? Eaque officia unde
        adipisci voluptatum, tenetur natus minima eum vero dignissimos quisquam
        ad, accusamus et dicta ipsam iure quam atque odit perspiciatis explicabo
        magnam qui quis ab! Iure rem veniam a ipsam, ut temporibus illum quidem
        minima rerum vitae?
      </p>
      <section className="prose-dark prose prose-slate mx-auto p-8">
        <h2>Subheading example</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quos, quia quibusdam quidem voluptatem voluptatibus
          quas quibusdam quae. Quisquam, quod. Quisquam, quod. Quisquam, quod.
        </p>
      </section>
      <div className="mx-auto max-w-7xl p-8">
        {/* Responsive Grid with Hide on Mobile */}
        <div className="hidden sm:grid gap-4 lg:grid-cols-4 justify-items-center">

          {/* GOAT Circle 1: 
            - Hidden by default ('hidden')
            - Shown on small screens and up ('sm:grid') 
            - Unique Color 
            - Hover Effect
          */}
          <div className="size-16 rounded-full bg-red-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-400/80 hover:to-orange-600/80"></div>

          {/* GOAT Circle 2 */}
          <div className="w-16 h-16 rounded-full bg-blue-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400/80 hover:to-cyan-600/80"></div>

          {/* GOAT Circle 3 */}
          <div className="w-16 h-16 rounded-full bg-green-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400/80 hover:to-lime-600/80"></div>

          {/* GOAT Circle 4 */}
          <div className="w-16 h-16 rounded-full bg-purple-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400/80 hover:to-pink-600/80"></div>
        </div>
      </div>
    </div>
  );
}
