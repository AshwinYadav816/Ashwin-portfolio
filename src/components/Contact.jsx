import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-10 md:px-20 py-28 bg-[#050816] text-white text-center">

      {/* Section Label */}
      <p className="text-cyan-400 text-sm tracking-[0.4em] uppercase mb-4">
        Contact
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        Let's{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg mb-20 max-w-2xl mx-auto">
        I'm always open to discussing new projects, opportunities, or collaborations.
      </p>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">

        {/* Email */}
        <a
          href="mailto:ashwinyadavv911@gmail.com"
          className="bg-[#0c1220] border border-gray-700 rounded-2xl p-8
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_35px_rgba(0,255,255,0.1)]
                     transition-all duration-500 text-left"
        >
          <Mail className="text-cyan-400 mb-4" size={24} />
          <p className="text-gray-400 text-sm mb-1">Email</p>
          <p className="text-white font-medium">
            ashwinyadavv911@gmail.com
          </p>
        </a>

        {/* Phone */}
        <div
          className="bg-[#0c1220] border border-gray-700 rounded-2xl p-8
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_35px_rgba(0,255,255,0.1)]
                     transition-all duration-500 text-left"
        >
          <Phone className="text-cyan-400 mb-4" size={24} />
          <p className="text-gray-400 text-sm mb-1">Phone</p>
          <p className="text-white font-medium">
            +91-7205104264
          </p>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/AshwinYadav816"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0c1220] border border-gray-700 rounded-2xl p-8
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_35px_rgba(0,255,255,0.1)]
                     transition-all duration-500 text-left"
        >
          <Github className="text-cyan-400 mb-4" size={24} />
          <p className="text-gray-400 text-sm mb-1">GitHub</p>
          <p className="text-white font-medium">
            github.com/AshwinYadav
          </p>
        </a>

      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* LinkedIn (Highlighted) */}
        <a
          href="https://www.linkedin.com/in/ashwin-yadav-312224389/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0c1220] border border-cyan-400/40 rounded-2xl p-8
                     shadow-[0_0_40px_rgba(0,255,255,0.15)]
                     transition-all duration-500 text-left"
        >
          <Linkedin className="text-cyan-400 mb-4" size={24} />
          <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
          <p className="text-white font-medium">
            LinkedIn Profile
          </p>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/Ashwin9898/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0c1220] border border-gray-700 rounded-2xl p-8
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_35px_rgba(0,255,255,0.1)]
                     transition-all duration-500 text-left"
        >
          <ExternalLink className="text-cyan-400 mb-4" size={24} />
          <p className="text-gray-400 text-sm mb-1">LeetCode</p>
          <p className="text-white font-medium">
            leetcode.com/AshwinYadav
          </p>
        </a>

      </div>

    </section>
  )
}
