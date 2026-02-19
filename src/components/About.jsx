import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Database } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    label: "Generative AI",
    desc: "LLMs, Prompt Engineering, AI Agents",
  },
  {
    icon: Code,
    label: "Frontend Dev",
    desc: "React.js, Material UI, Modern Web",
  },
  {
    icon: Database,
    label: "Data & Analytics",
    desc: "Python, NumPy, Pandas, Data Science",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen px-10 md:px-20 py-28 bg-[#050816] text-white"
    >
      {/* Top Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl"
      >
        <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Building at the intersection of{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI & Web
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mb-16">
          I'm a Computer Science undergraduate with a strong interest in
          Generative AI and data-driven systems. I enjoy exploring how
          Large Language Models and modern AI tools can enhance user-facing
          applications. Skilled in JavaScript, React, and Python-based data
          tools, with a solid foundation in problem-solving and algorithms.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            className="bg-[#0c1220] border border-gray-700 rounded-xl p-8
                       hover:border-cyan-400/40 transition-all duration-300
                       hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
          >
            <item.icon className="text-cyan-400 mb-5" size={30} />

            <h3 className="text-xl font-semibold mb-3">
              {item.label}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
