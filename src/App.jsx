import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Services />
        <section id="work" className="py-10">
          <h3 className="text-2xl font-bold">Why MTK?</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800 rounded">
              <h5 className="font-semibold">Dev-first reports</h5>
              <p className="text-gray-400 text-sm mt-2">No noisy scanner dumps. We give exact fixes — code snippets and config steps.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded">
              <h5 className="font-semibold">Fast turnaround</h5>
              <p className="text-gray-400 text-sm mt-2">Most pentests delivered in under 10 days, with retest included.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded">
              <h5 className="font-semibold">Startup-friendly pricing</h5>
              <p className="text-gray-400 text-sm mt-2">Pricing that makes sense for pre-seed and early-stage teams.</p>
            </div>
          </div>
        </section>
        <About />
        <Contact />
        <footer className="py-8 text-sm text-gray-500 border-t border-gray-800 mt-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} MTK — MULTINATIONAL TECHNOLOGY OF KISHAN. All rights reserved.</div>
            <div className="text-xs">Built with ⚡ by MTK. Need custom security tooling? DM us.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}