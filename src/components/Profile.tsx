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

export default function Profile() {
  return (
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
  );
}
