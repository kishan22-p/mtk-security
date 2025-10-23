import React from 'react'
export default function Navbar() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">MTK</div>
        <div>
          <h1 className="text-lg font-semibold tracking-tight">MULTINATIONAL TECHNOLOGY OF KISHAN</h1>
          <p className="text-xs text-gray-400">Securing startups before they scale</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#work" className="hover:text-white">Why MTK</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#contact" className="px-4 py-2 border border-indigo-500 rounded hover:bg-indigo-500/10">Get a free mini-scan</a>
      </nav>
    </header>
  )
}