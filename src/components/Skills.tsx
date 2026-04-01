const skills = [
  "Java + Spring Boot",
  "QA Automation",
  "DevOps",
  "Python",
  "SQL",
  "Azure DevOps",
  "Playwright / Selenium",
  "APIs REST",
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

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                >
                  {skill}
                </span>
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
    </section>
  );
}
