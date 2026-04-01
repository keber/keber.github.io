export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute top-24 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-cyan-200 backdrop-blur">
              Desarrollo · QA Automation · DevOps · Cloud
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
                Crecer como Software Developer 
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
  );
}
