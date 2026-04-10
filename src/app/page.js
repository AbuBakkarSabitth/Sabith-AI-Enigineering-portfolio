import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-5xl font-bold">
          Future AI Engineer 🚀
        </h1>

        <p className="mt-6 text-lg max-w-xl">
          I build AI agents, machine learning models, and real-world systems.
          My goal is to turn ideas into impactful AI solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
            View Projects
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>

      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 px-6">

        <h2 className="text-3xl font-bold text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">
              AI Diet Assistant
            </h3>
            <p className="mt-2 text-gray-400">
              AI-based system that suggests diet plans based on user data.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">
              Symbol Table Compiler
            </h3>
            <p className="mt-2 text-gray-400">
              Built using Flex & Bison to analyze and store program symbols.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">
              Login System Backend
            </h3>
            <p className="mt-2 text-gray-400">
              Secure authentication system using Node.js and MongoDB.
            </p>
          </div>

        </div>

      </div>

      {/* About Section */}
      <div className="py-20 px-6 bg-gray-950 text-center">

        <h2 className="text-3xl font-bold">
          About Me
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          I am a CSE student passionate about Artificial Intelligence, Machine Learning,
          and Automation. I am currently building real-world AI systems while learning
          advanced ML concepts and software development.
        </p>

      </div>

      {/* Learning Journey */}
      <div className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold">
          Learning Journey
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Currently Learning</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Machine Learning</li>
              <li>AI Agents & Automation (n8n)</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Next Goals</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Build AI SaaS Product</li>
              <li>Master Deep Learning</li>
              <li>Launch Tech Startup</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 px-6 text-center bg-gray-950">

        <h2 className="text-3xl font-bold">
          Let's Work Together
        </h2>

        <p className="mt-4 text-gray-400">
          Open for internships, jobs, and collaboration.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/AbuBakkarSabitth"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sabithmab2"
            target="_blank"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-500 text-sm">
        © 2026 Sabith | Future AI Engineer
      </div>

    </div>
  );
}