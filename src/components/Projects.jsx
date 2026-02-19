import { Stethoscope, Briefcase } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-10 md:px-20 py-28 bg-[#050816] text-white">

      {/* Section Label */}
      <p className="text-cyan-400 text-sm tracking-[0.4em] uppercase mb-4">
        Projects
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold mb-20">
        Featured{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Work
        </span>
      </h2>

      <div className="space-y-16">

        {/* ================= GEN AI BOOTCAMP ================= */}
        <div className="bg-[#0c1220] border border-cyan-400/30 rounded-3xl p-10 md:p-14 
                        hover:shadow-[0_0_60px_rgba(0,255,255,0.1)] 
                        transition-all duration-500">

          <div className="flex items-start gap-6 mb-8">

            <div className="bg-cyan-400/10 p-4 rounded-2xl">
              <Briefcase className="text-cyan-400" size={28} />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                GenAI Bootcamp
              </h3>
              <p className="text-gray-400">
                Applied LLMs, AI Agents & Automation Systems
              </p>
            </div>
          </div>

          <ul className="space-y-6 text-gray-400 mb-10">

            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">▸</span>
              End-to-end AI workflows integrating ChatGPT APIs and
              automation tools for content planning.
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">▸</span>
              Personalized GPT-powered writing bot with advanced
              prompt engineering & multi-step orchestration.
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">▸</span>
              AI-driven automation pipelines converting manual tasks
              into scalable AI-powered processes.
            </li>

          </ul>

          <div className="flex flex-wrap gap-4">
            {[
              "ChatGPT API",
              "Prompt Engineering",
              "Automation",
              "AI Agents",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-cyan-400/10 text-cyan-400 px-5 py-2 rounded-full text-sm 
                           border border-cyan-400/30 hover:bg-cyan-400/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>


        {/* ================= MEDI VAULT ================= */}
        <div className="bg-[#0c1220] border border-cyan-400/30 rounded-3xl p-10 md:p-14 
                        hover:shadow-[0_0_60px_rgba(0,255,255,0.1)] 
                        transition-all duration-500">

          <div className="flex items-start gap-6 mb-8">

            <div className="bg-cyan-400/10 p-4 rounded-2xl">
              <Stethoscope className="text-cyan-400" size={28} />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                MEDI-VAULT
              </h3>
              <p className="text-gray-400">
                AI-Powered Medical Document Management
              </p>
            </div>
          </div>

          <ul className="space-y-6 text-gray-400 mb-10">

            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">▸</span>
              Full-stack healthcare platform with secure document upload,
              AI summarization, treatment reminders, vaccination tracking,
              and hospital locator.
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">▸</span>
              REST APIs with Node.js, Express.js, MongoDB Atlas &
              Mongoose for scalable data handling.
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">▸</span>
              React frontend with Material UI, Axios; deployed on
              Vercel (frontend) & Render (backend).
            </li>

          </ul>

          <div className="flex flex-wrap gap-4">
            {["React", "Node.js", "MongoDB", "AI", "Express.js"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-400/10 text-cyan-400 px-5 py-2 rounded-full text-sm 
                             border border-cyan-400/30 hover:bg-cyan-400/20 transition"
                >
                  {tech}
                </span>
              )
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
