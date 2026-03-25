function App() {
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

  const highlights = [
    {
      title: "Perfil técnico transversal",
      text: "He trabajado en desarrollo, automatización, soporte, infraestructura y operación, lo que me permite entender una solución completa más allá del código.",
    },
    {
      title: "Enfoque actual",
      text: "Hoy estoy orientando mi carrera hacia el desarrollo de software, fortaleciendo especialmente Java, Spring Boot, testing y construcción de aplicaciones reales.",
    },
    {
      title: "Forma de trabajar",
      text: "Me caracterizo por el pensamiento estructurado, la capacidad de análisis y una buena disposición para aprender, adaptarme y resolver problemas con criterio técnico.",
    },
  ];

  const timeline = [
    "Experiencia en soporte, infraestructura y operación TI",
    "Trabajo en automatización, QA y roles técnicos tipo DevOps",
    "Formación y práctica en desarrollo Fullstack Java con Spring Boot",
    "Objetivo actual: consolidarme como Software Developer Junior",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-24 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-cyan-200 backdrop-blur">
                Desarrollo · QA Automation · DevOps
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Hola, soy <span className="text-cyan-300">Keber Flores</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Profesional TI con experiencia transversal en desarrollo,
                automatización, soporte, infraestructura y operación,
                actualmente orientando su carrera hacia el desarrollo de software.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                En los últimos años he trabajado en roles técnicos como DevOps y QA
                Automation, fortaleciendo habilidades en programación,
                integración, pruebas y análisis de problemas en sistemas reales.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#perfil"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg transition hover:scale-[1.02]"
                >
                  Ver perfil
                </a>
                <a
                  href="#habilidades"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
                >
                  Habilidades
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Objetivo actual
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Crecer como Software Developer Junior
                </h2>
                <p className="mt-3 leading-7 text-slate-300">
                  Busco integrarme en equipos donde pueda aportar solidez técnica,
                  adaptabilidad y una mirada integral del ciclo completo de una
                  solución.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-3xl font-bold text-cyan-300">15+</p>
                  <p className="mt-2 text-slate-300">Años de experiencia en TI</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-3xl font-bold text-cyan-300">Hoy</p>
                  <p className="mt-2 text-slate-300">
                    Foco en desarrollo, testing y automatización
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="perfil" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

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

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Resumen
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Una base amplia, con dirección clara
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-200">
            Aporto una combinación poco común de experiencia técnica transversal,
            pensamiento estructurado y trabajo en ambientes productivos reales. Mi
            foco actual está en consolidarme en desarrollo de software, creciendo
            desde la práctica y contribuyendo con responsabilidad, criterio y
            capacidad de adaptación.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
