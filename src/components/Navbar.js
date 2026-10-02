import { site } from "../data/site";

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <nav
        aria-label="Main"
        className="flex justify-between items-center px-8 py-6"
      >
        <a href="#top" className="text-xl font-bold">
          {site.shortName}.dev
        </a>

        <div className="space-x-6">
          <a href="#projects" className="hover:text-purple-400">
            Projects
          </a>
          <a href="#about" className="hover:text-purple-400">
            About
          </a>
          <a href="#contact" className="hover:text-purple-400">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
