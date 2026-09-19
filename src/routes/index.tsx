import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Star } from "lucide-react";
import { CUISINES, LOCATIONS, RESTAURANTS, type Restaurant } from "@/data/restaurants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forkcast — Find your next table" },
      {
        name: "description",
        content:
          "Forkcast recommends the best-rated restaurants near you, filtered by cuisine, neighborhood, and minimum rating.",
      },
      { property: "og:title", content: "Forkcast — Find your next table" },
      {
        property: "og:description",
        content:
          "Forkcast recommends the best-rated restaurants near you, filtered by cuisine, neighborhood, and minimum rating.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [location, setLocation] = useState("All");
  const [cuisine, setCuisine] = useState("All");
  const [minRating, setMinRating] = useState(0);

  const results = useMemo(
    () =>
      RESTAURANTS.filter(
        (r) =>
          (location === "All" || r.location === location) &&
          (cuisine === "All" || r.cuisine === cuisine) &&
          r.rating >= minRating,
      ).sort((a, b) => b.rating - a.rating),
    [location, cuisine, minRating],
  );

  const maxDistance = results.length
    ? Math.max(...results.map((r) => r.distance)).toFixed(1)
    : null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-frost font-body text-deep">
      {/* luminous gradient field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 0%, #dceafd 0%, #eaf1fb 42%, #eef4fc 100%)",
        }}
      />
      <div className="orb -top-24 -left-24 size-[520px]" style={{ background: "linear-gradient(135deg, #bcd4ff, rgba(188,212,255,0))" }} />
      <div className="orb top-1/3 -right-28 size-[460px]" style={{ background: "linear-gradient(135deg, #cfe0ff, rgba(207,224,255,0))" }} />
      <div className="orb bottom-0 left-1/3 size-[380px]" style={{ background: "linear-gradient(135deg, #d7e6ff, rgba(215,230,255,0))" }} />

      <div className="relative mx-auto max-w-6xl px-6 py-8">
        {/* nav */}
        <header className="glass flex items-center justify-between rounded-2xl px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-xl bg-brand font-display font-bold text-brand-foreground">
              F
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">Forkcast</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-deep/70 md:flex">
            <a href="#results">Explore</a>
            <a href="#results">Cuisines</a>
            <a href="#results">Near me</a>
          </nav>
          <span className="glass-soft rounded-full px-4 py-2 text-xs font-medium text-deep/70">
            Riverside, Portland
          </span>
        </header>

        {/* hero / filters */}
        <section className="glass mt-10 rounded-3xl p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Cuisine · Location · Rating
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            Find your next table, filtered to taste.
          </h1>
          <p className="mt-3 max-w-xl text-deep/60">
            Tell Forkcast what you crave and where you are — we rank the best-rated spots around you.
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
            <label className="glass-soft rounded-xl px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-deep/45">
                Location
              </span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 w-full cursor-pointer bg-transparent text-sm font-medium outline-none"
              >
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>
                    {l === "All" ? "Anywhere" : l}
                  </option>
                ))}
              </select>
            </label>
            <label className="glass-soft rounded-xl px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-deep/45">
                Cuisine
              </span>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="mt-1 w-full cursor-pointer bg-transparent text-sm font-medium outline-none"
              >
                {CUISINES.map((c) => (
                  <option key={c} value={c}>
                    {c === "All" ? "Any cuisine" : c}
                  </option>
                ))}
              </select>
            </label>
            <label className="glass-soft rounded-xl px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-deep/45">
                Min rating
              </span>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="mt-1 w-full cursor-pointer bg-transparent text-sm font-medium outline-none"
              >
                {[0, 3.5, 4, 4.5, 4.7].map((r) => (
                  <option key={r} value={r}>
                    {r === 0 ? "Any rating" : `${r.toFixed(1)}+ stars`}
                  </option>
                ))}
              </select>
            </label>
            <a
              href="#results"
              className="self-end rounded-xl bg-brand px-6 py-3 text-center text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Search
            </a>
          </div>
        </section>

        {/* results */}
        <section id="results" className="mt-10 scroll-mt-8 pb-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Top matches near you
              </h2>
              <p className="text-sm text-deep/55">
                {results.length} {results.length === 1 ? "place" : "places"} · sorted by rating
              </p>
            </div>
            {maxDistance && (
              <div className="glass-soft rounded-full px-4 py-2 text-xs font-medium text-deep/70">
                Within {maxDistance} mi
              </div>
            )}
          </div>

          {results.length === 0 ? (
            <div className="glass mt-6 rounded-2xl p-10 text-center">
              <p className="font-display text-lg font-semibold">No matches for that craving.</p>
              <p className="mt-1 text-sm text-deep/55">
                Try loosening the cuisine or rating filters.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {results.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function RestaurantCard({ restaurant: r }: { restaurant: Restaurant }) {
  return (
    <article className="glass overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
      <img
        src={r.image}
        alt={r.name}
        width={1024}
        height={768}
        loading="lazy"
        className="aspect-[4/3] w-full bg-ice object-cover"
      />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{r.name}</h3>
          <span className="flex items-center gap-1 text-sm font-semibold text-brand">
            <Star className="size-4 fill-brand" />
            {r.rating.toFixed(1)}
          </span>
        </div>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-deep/55">
          {r.cuisine} · <MapPin className="size-3.5" /> {r.location} · {r.distance} mi
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span
            className={
              r.open
                ? "rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
                : "rounded-full bg-deep/5 px-3 py-1 text-xs font-medium text-deep/55"
            }
          >
            {r.status}
          </span>
          <span className="rounded-full bg-deep/5 px-3 py-1 text-xs font-medium text-deep/55">
            ${r.avgPrice} avg
          </span>
        </div>
      </div>
    </article>
  );
}
