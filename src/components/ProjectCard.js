const external = { target: "_blank", rel: "noopener noreferrer" };

export default function ProjectCard({ project }) {
  const { title, description, features, tech, repo, live, liveLabel } = project;

  return (
    <article className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition">
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-gray-400 leading-7">{description}</p>

      {features?.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-lg">Key features</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            {features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true">✅ </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tech?.length > 0 && (
        <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-3">
          {tech.map((item) => (
            <li key={item} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
              {item}
            </li>
          ))}
        </ul>
      )}

      {(repo || live) && (
        <div className="mt-8 flex flex-wrap gap-4">
          {repo && (
            <a
              href={repo}
              {...external}
              className="bg-white text-black px-5 py-3 rounded-lg hover:bg-gray-300"
            >
              GitHub repo
            </a>
          )}
          {live && (
            <a
              href={live}
              {...external}
              className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black"
            >
              {liveLabel || "Live demo"}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
