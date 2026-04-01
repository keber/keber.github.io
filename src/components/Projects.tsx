const projects = [
  {
    title: "Unicornt Store",
    description:
      "E-commerce fullstack desarrollado con Spring Boot. Incluye catálogo de productos, carrito de compras, gestión de usuarios y flujo de compra completo.",
    tech: ["Spring Boot", "PostgreSQL", "Docker", "Supabase"],
    repo: "https://github.com/keber/unicornt-store-springboot",
    live: "https://unicornt-store.keber.dev",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
        Proyectos
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white">
        Lo que he construido
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-slate-300">
        Aplicaciones reales que reflejan mi enfoque práctico y mis habilidades
        técnicas en acción.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg transition hover:scale-[1.02]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Ver sitio
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                </svg>
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
