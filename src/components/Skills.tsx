const skillGroups = [
  {
    label: "Desarrollo",
    items: ["Java + Spring Boot", "Python", "SQL", "APIs REST"],
  },
  {
    label: "QA & DevOps",
    items: ["QA Automation", "Playwright / Selenium", "DevOps", "Azure DevOps"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Azure"],
  },
  {
    label: "Herramientas",
    items: ["VS Code", "IntelliJ IDEA", "Docker", "Git"],
  },
  {
    label: "IA & Productividad",
    items: ["GitHub Copilot", "ChatGPT", "Claude", "Skills CLI"],
  },
];

const certifications = [
  {
    name: "AWS Cloud Foundations",
    badge: "/assets/badge-aws-certified-cloud-practitioner.png",
  },
  {
    name: "Especialista DevOps — Talento Digital para Chile",
    badge: "/assets/badge-talento-digital-especialista-devops.webp",
  },
  {
    name: "Automatización de Pruebas — Talento Digital para Chile",
    badge: "/assets/badge-talento-digital-automatizacion-pruebas.webp",
  },
];

const timeline = [
  "Experiencia en soporte, infraestructura y operación TI",
  "Trabajo en automatización, QA y roles técnicos tipo DevOps",
  "Formación y práctica en desarrollo Fullstack Java con Spring Boot",
  "Objetivo actual: consolidarme como Software Developer Junior",
];

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl px-6 py-8 md:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Habilidades
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Tecnologías y áreas en las que me desenvuelvo
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Mi experiencia combina base técnica amplia con aprendizaje continuo.
              Eso me permite moverme entre desarrollo, automatización,
              integración, pruebas y operación con una visión práctica.
            </p>

            <div className="mt-6 space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Trayectoria
            </p>
            <div className="mt-5 space-y-4">
              {timeline.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="mt-2 h-full w-px bg-white/10" />
                    )}
                  </div>
                  <p className="pt-1 leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Certificaciones
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white">
          Formación validada
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-center"
            >
              <img
                src={cert.badge}
                alt={cert.name}
                className="h-24 w-24 object-contain"
              />
              <p className="text-sm leading-6 text-slate-200">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
