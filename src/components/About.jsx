import React from 'react'
export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="md:flex md:items-center md:gap-8">
        <div className="flex-shrink-0 w-48 h-48 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-bold">MTK</div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-2xl font-bold">About MTK</h3>
          <p className="text-gray-400 mt-2 max-w-2xl">MTK — MULTINATIONAL TECHNOLOGY OF KISHAN — is a boutique AppSec shop run by ethical hackers and developers. We combine pentest rigor with dev empathy so teams fix things fast. Founder holds CEH and does real pentests & bug bounty writeups.</p>
          <ul className="mt-4 text-sm text-gray-400 space-y-2">
            <li>• CEH & real-world pentest experience</li>
            <li>• Bug bounty wins & public writeups</li>
            <li>• Focus: Web apps, APIs & cloud misconfig</li>
          </ul>
        </div>
      </div>
    </section>
  )
}