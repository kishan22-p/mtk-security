import React from 'react'
export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Build fast. Ship safe. <span className="text-indigo-400">MTK</span> secures your product.</h2>
        <p className="mt-4 text-gray-300 max-w-xl">We help startups and dev teams find the bugs that actually matter — auth bypasses, business-logic flaws, SSRF, API abuse — and deliver dev-friendly fixes that get shipped. No noise. High signal.</p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="inline-flex items-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-3 rounded-md font-medium">Get free mini-scan</a>
          <a href="#services" className="inline-flex items-center gap-3 border border-gray-700 px-4 py-3 rounded-md text-gray-200 hover:bg-gray-800">See services</a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <div className="p-4 bg-gray-800 rounded">
            <div className="text-xs uppercase text-gray-400">Avg turnaround</div>
            <div className="text-lg font-semibold text-white">7–10 days</div>
          </div>
          <div className="p-4 bg-gray-800 rounded">
            <div className="text-xs uppercase text-gray-400">Typical client</div>
            <div className="text-lg font-semibold text-white">SaaS startups</div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/40 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Free 10-point Mini Scan</h3>
        <p className="text-gray-300 text-sm">Drop your details and we’ll run a quick passive recon & 10‑point check. You’ll get a 1‑page PDF summary with 1–2 actionable findings.</p>
        <form className="mt-6 space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll email the mini-scan.')}}>
          <input name="name" required placeholder="Your name" className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-800 text-sm" />
          <input name="org" placeholder="Company / Org" className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-800 text-sm" />
          <textarea name="message" placeholder="Anything to add? (optional)" className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-800 text-sm" rows={4} />
          <div className="flex gap-3">
            <button type="submit" className="flex-1 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded font-medium">Request mini-scan</button>
            <a href="mailto:hackerkis@proton.me" className="px-4 py-2 border border-gray-700 rounded text-sm">Email</a>
          </div>
        </form>
        <div className="mt-6 text-xs text-gray-500">No credit card. NDA on request. We never publicly disclose client data.</div>
      </div>
    </section>
  )
}