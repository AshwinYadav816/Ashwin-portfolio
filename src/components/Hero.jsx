import { motion } from "framer-motion"
import ThreeBackground from "./ThreeBackground"
import { Mail, Github, ExternalLink } from "lucide-react"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Scene */}
      <ThreeBackground />

      {/* Soft Gradient Overlay (Same Feel as Your Reference) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/40 via-[#050816]/60 to-[#050816]/80" />


      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ashwin Yadav
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Computer Science Undergraduate passionate about{" "}
          <span className="text-cyan-400">Generative AI</span>,{" "}
          <span className="text-purple-400">Frontend Development</span> &{" "}
          Data-Driven Systems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="mailto:ashwinyadavv911@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-black font-medium hover:opacity-90 transition shadow-lg shadow-cyan-500/30"
          >
            <Mail size={18} />
            Get in Touch
          </a>

          <a
            href="https://github.com/AshwinYadav816"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 bg-white/5 backdrop-blur-md text-white font-medium hover:border-cyan-400 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/Ashwin9898/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 bg-white/5 backdrop-blur-md text-white font-medium hover:border-purple-400 transition"
          >
            <ExternalLink size={18} />
            LeetCode
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-cyan-400/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
