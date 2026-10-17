// Server component: static proof points pulled from the résumé.
const STATS = [
  { value: "5+", label: "production apps shipped (web & mobile)" },
  { value: "~50K", label: "users on a trading platform I built backend features for" },
  { value: "3", label: "software internships, all remote" },
  { value: "60+", label: "automated tests in CI on ProofLoop" },
];

const BADGES = [
  "GATE CSE '26 qualified · AIR 8k",
  "400+ DSA problems solved",
  "1st Prize · Manthan 2024 RoboSync",
  "Top 10 · Navdhara 2024",
  "GfG · AlgoZenith · IEEE campus ambassador",
];

export default function WhyHire() {
  return (
    <section
      aria-labelledby="why-hire-heading"
      className="w-full bg-[#fdf6e3] px-4 sm:px-8 py-14 border-y border-gray-300"
    >
      <h2
        id="why-hire-heading"
        className="text-4xl font-handwritten font-bold text-center text-[#2b2b2b]"
      >
        Why I&apos;m a good hire
      </h2>

      <ul className="mt-8 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <li
            key={stat.label}
            className="rounded-lg bg-white p-5 shadow-md border border-gray-200"
          >
            <p className="text-4xl font-bold text-[#b45309]">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-700 leading-snug">{stat.label}</p>
          </li>
        ))}
      </ul>

      <ul className="mt-6 max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
        {BADGES.map((badge) => (
          <li
            key={badge}
            className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-gray-800 shadow-sm"
          >
            {badge}
          </li>
        ))}
      </ul>
    </section>
  );
}
