// Server component: plain anchor links, no client JavaScript.
const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-[60] w-full bg-[#fdf6e3]/95 border-b border-gray-300 shadow-sm">
      <nav
        aria-label="Primary"
        className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3"
      >
        <a
          href="#top"
          className="font-handwritten text-3xl font-bold text-[#2b2b2b] shrink-0"
        >
          Rachita Pant
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[#2b2b2b] hover:underline underline-offset-4">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 text-sm font-semibold">
          <a href="#work" className="md:hidden text-gray-700 hover:underline">
            Work
          </a>
          <a
            href="/Rachita_Pant_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#2b2b2b] px-4 py-2 text-white hover:bg-black"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
