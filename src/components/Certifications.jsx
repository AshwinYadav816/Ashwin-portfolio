import { Award } from "lucide-react"

export default function Certifications() {
  const certificates = [
    {
      title: "Yuva AI for All Program",
      subtitle: "MeitY-NASSCOM / NASSCOM",
    },
    {
      title: "Data Science & Analytics",
      subtitle: "HP LIFE Online Course",
    },
    {
      title: "Generative AI Bootcamp",
      subtitle: "Completion Certificate",
    },
    {
      title: "AI Tools & ChatGPT Workshop",
      subtitle: "Be10x",
    },
  ]

  return (
    <section className="min-h-screen px-10 md:px-20 py-28 bg-[#050816] text-white">

      {/* Section Label */}
      <p className="text-cyan-400 text-sm tracking-[0.4em] uppercase mb-4">
        Certificates
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold mb-20">
        Achievements &{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="bg-[#0c1220] border border-gray-700 rounded-2xl p-8 
                       hover:border-cyan-400/40 
                       hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]
                       transition-all duration-500"
          >
            <div className="flex items-start gap-5">

              {/* Icon */}
              <div className="bg-cyan-400/10 p-3 rounded-xl">
                <Award className="text-cyan-400" size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.subtitle}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
