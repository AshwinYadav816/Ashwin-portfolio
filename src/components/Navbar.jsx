import { useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("Home")

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    bg-[#050816]/70 backdrop-blur-md 
                    border-b border-white/5">

      <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold 
                       bg-gradient-to-r from-cyan-400 to-purple-500 
                       bg-clip-text text-transparent cursor-pointer">
          AY
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-10 text-gray-300 text-lg font-medium">

          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`transition-colors duration-300 hover:text-cyan-400
                  ${active === item ? "text-cyan-400" : ""}`}
              >
                {item}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
}
