import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { site } from "../data/site";

const external = { target: "_blank", rel: "noopener noreferrer" };

const learning = [
  {
    title: "Currently learning",
    items: [
      "Machine Learning",
      "AI Agents & Automation",
      "Advanced Backend Engineering",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Next goals",
    items: [
      "Build AI SaaS Products",
      "Master Deep Learning",
      "Launch AI Startup",
      "Work on Scalable Systems",
    ],
  },
];

export default function Home() {
  return (
    <div id="top" className="bg-black text-white min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold">{site.name}</h1>

          <p className="mt-4 text-2xl font-semibold text-purple-400">
            {site.role} 🚀
          </p>

          <p className="mt-6 text-lg max-w-xl">
            I build AI agents, machine learning models, APIs, and real-world
            systems. My goal is to turn ideas into impactful AI solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            >
              Contact me
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <h2 className="text-4xl font-bold text-center">Featured Projects</h2>

          <p className="text-center text-gray-400 mt-4">
            Real-world systems and backend applications I have built.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 bg-gray-950 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            I am a CSE student passionate about Artificial Intelligence, Backend
            Engineering, Machine Learning, and Automation. I enjoy building
            scalable systems and solving real-world problems through software
            and AI technologies.
          </p>
        </section>

        {/* Learning journey */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold">Learning Journey</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learning.map((group) => (
              <div key={group.title} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{group.title}</h3>

                <ul className="mt-4 text-gray-400 space-y-2">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 text-center bg-gray-950">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>

          <p className="mt-4 text-gray-400">
            Open for internships, backend development, AI projects, and
            collaboration.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
              >
                Email me
              </a>
            )}

            <a
              href={site.github}
              {...external}
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              GitHub
            </a>

            <a
              href={site.linkedin}
              {...external}
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>

            {site.resume && (
              <a
                href={site.resume}
                {...external}
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
              >
                Résumé
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} {site.shortName} | {site.role}
      </footer>
    </div>
  );
}
