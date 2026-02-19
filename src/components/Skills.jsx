export default function Skills() {
  const skillGroups = [
    {
      title: "LANGUAGES",
      skills: ["Java", "C", "JavaScript"],
    },
    {
      title: "FRONTEND",
      skills: ["React.js", "HTML/CSS", "Material UI"],
    },
    {
      title: "CORE CS",
      skills: ["DSA", "OOP", "DBMS", "OS"],
    },
    {
      title: "AI & DATA",
      skills: [
        "Data Science",
        "Generative AI",
        "Prompt Engineering",
        "Gemini API",
        "NumPy",
        "Pandas",
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen px-10 md:px-20 py-28 bg-[#050816] text-white">
      
      {/* Section Label */}
      <p className="text-cyan-400 text-sm tracking-[0.4em] uppercase mb-4">
        
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="bg-[#0c1220] border border-gray-700 rounded-2xl p-10"
          >
            <h3 className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-8">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#1a2234] text-gray-300 px-5 py-2 rounded-full text-sm
                             hover:bg-cyan-400/20 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
