"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const heroImage = "/hero-poster.jpeg";
const bioImage = "/ore-joanne-photo.avif";
const footerLogo = "/buddy-boy-logo.png";

export default function WebsiteStarter() {
  const pageTitle = "10: Champions Reignited | Ore Oduba & Joanne Clifton Tour";
  const pageDescription =
    "10 years after winning BBC's Strictly Come Dancing, Ore Oduba and Joanne Clifton reunite for 10: Champions Reignited — a spectacular live touring show filled with songs, stories and dances from their glittering careers.";
  const socialImage = heroImage;

  const events = [
    { date: "17 August 2026", city: "Bournemouth", venue: "Bournemouth Pavilion", link: "https://www.bournemouthpavilion.co.uk" },
    { date: "18 August 2026", city: "Fareham", venue: "Fareham Live", link: "https://www.farehamlive.co.uk" },
    { date: "19 August 2026", city: "Crawley", venue: "The Hawth Crawley", link: "https://www.hawth.co.uk" },
    { date: "20 August 2026", city: "Peterborough", venue: "New Theatre Peterborough", link: "https://www.newtheatre-peterborough.com" },
    { date: "21 August 2026", city: "Buxton", venue: "Buxton Opera House", link: "https://www.buxtonoperahouse.org.uk" },
    { date: "22 August 2026", city: "Grimsby", venue: "Grimsby Auditorium", link: "https://www.grimsbyauditorium.org.uk" },
    
  ];

  useEffect(() => {
    document.title = pageTitle;

    const ensureMetaTag = (attribute, key, content) => {
      const selector = `meta[${attribute}="${key}"]`;
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMetaTag("name", "description", pageDescription);
    ensureMetaTag("name", "keywords", "10 Champions Reignited, Ore Oduba, Joanne Clifton, Strictly Come Dancing, tour, live show, theatre tickets");
    ensureMetaTag("property", "og:title", pageTitle);
    ensureMetaTag("property", "og:description", pageDescription);
    ensureMetaTag("property", "og:type", "website");
    ensureMetaTag("property", "og:image", socialImage);
    ensureMetaTag("property", "og:image:alt", "10: Champions Reignited starring Ore Oduba and Joanne Clifton");
    ensureMetaTag("name", "twitter:card", "summary_large_image");
    ensureMetaTag("name", "twitter:title", pageTitle);
    ensureMetaTag("name", "twitter:description", pageDescription);
    ensureMetaTag("name", "twitter:image", socialImage);
  }, []);

  const scrollToDates = (e) => {
    e.preventDefault();
    const section = document.getElementById("dates");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <section className="relative overflow-hidden bg-black">
          <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
            <img
              src={heroImage}
              alt="10: Champions Reignited poster artwork"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-black/40 to-black" />
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 text-center">
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">
                Buddy Boy Productions
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-4xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] md:text-6xl lg:whitespace-nowrap [text-shadow:0_0_18px_rgba(212,175,55,0.45),0_0_40px_rgba(212,175,55,0.25)]"
              >
                10: Champions Reignited
              </motion.h1>

              <p className="mt-4 text-xl font-semibold text-yellow-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                Ore Oduba & Joanne Clifton – Strictly Come Dancing Champions
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                A powerful live celebration of elite performance, defining moments, and the stories behind champions who continue to inspire audiences on stage.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="#dates"
                  onClick={scrollToDates}
                  className="rounded-full bg-yellow-400 px-8 py-4 text-base font-semibold text-black shadow-[0_0_30px_rgba(212,175,55,0.6)] transition duration-300 hover:scale-[1.02] hover:bg-yellow-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] animate-[pulse_4s_ease-in-out_infinite]"
                >
                  Tickets
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-20">
          <div className="mx-auto mb-12 max-w-2xl px-6">
            <img
              src={bioImage}
              alt="Ore Oduba and Joanne Clifton performing"
              className="mx-auto w-full max-w-2xl rounded-3xl object-cover shadow-2xl"
            />
          </div>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">About the show</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">A night built around greatness</h2>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">10 years ago, Ore Oduba and Joanne Clifton won the trophy and the nation’s heart as the winners of BBC’s Strictly Come Dancing. Now, the two champions reunite for the first time in a spectacular show filled with songs, stories and dances from their glittering careers.</p>
            <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">Don’t miss these two sensational, multi-talented performers doing what they do best in this unforgettable show.</p>
          </div>
        </section>

        <section id="dates" className="bg-black py-20">
          <div className="mx-auto max-w-5xl px-6 mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70" />
          </div>
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Tour dates</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Book your seats</h2>
              <p className="mt-4 text-zinc-400">
                Click any date below to open the external ticket page.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {events.map((event) => (
                <a
                  key={`${event.date}-${event.city}`}
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-4 rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg transition hover:border-white/30 hover:bg-zinc-900 md:grid-cols-[1.2fr_1fr_auto] md:items-center"
                >
                  <div>
                    <div className="text-lg font-semibold">{event.date}</div>
                    <div className="mt-1 text-zinc-400">{event.city}</div>
                  </div>
                  <div className="text-zinc-300">{event.venue}</div>
                  <div className="inline-flex items-center justify-start rounded-full border border-yellow-400/40 px-4 py-2 text-sm font-medium text-yellow-300 transition group-hover:border-yellow-300 group-hover:bg-yellow-400 group-hover:text-black md:justify-center">
                    Buy Tickets
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <a
        href="#dates"
        onClick={scrollToDates}
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.6)] transition hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.9)] md:hidden"
      >
        Tickets
      </a>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <a href="https://www.buddyboyproductions.co.uk/" target="_blank" rel="noreferrer" className="inline-block">
            <img
              src={footerLogo}
              alt="Buddy Boy Productions"
              className="mx-auto mb-6 w-40 object-contain"
            />
          </a>
          <p className="text-sm text-zinc-400">
            Buddy Boy Productions 2026
          </p>
        </div>
      </footer>

{/*
Vercel deployment notes:
1. Create a Next.js app and place this file at app/page.tsx or pages/index.tsx.
2. Put these assets in the public folder:
   - /public/hero-poster.jpeg
   - /public/ore-joanne-photo.avif
   - /public/buddy-boy-logo.png
3. Replace the asset files with your official artwork files using the same names.
4. Deploy to Vercel and the page will work without further code changes.
*/}
    </div>
  );
}
