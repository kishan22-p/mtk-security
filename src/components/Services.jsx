import React from 'react'
export default function Services() {
  return (
    <section id="services" className="py-10">
      <h3 className="text-2xl font-bold">Services — simple, dev-friendly</h3>
      <p className="text-gray-400 mt-2 max-w-2xl">Pick a package or DM us for a custom scope. We focus on fast impact: high-risk findings and clear fixes.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-sm uppercase text-gray-400">Lead magnet</div>
          <h4 className="text-xl font-semibold mt-2">Free 10-point Mini Scan</h4>
          <p className="mt-3 text-gray-300 text-sm">Fast passive recon + one-page PDF. Ideal for pre-launch checks.</p>
          <div className="mt-4 font-mono text-sm text-indigo-300">Free</div>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-sm uppercase text-gray-400">Main offering</div>
          <h4 className="text-xl font-semibold mt-2">Web Application Pentest</h4>
          <p className="mt-3 text-gray-300 text-sm">Full OWASP Top 10 coverage, auth logic, API abuse, and business logic testing. Report + PoCs + dev fixes.</p>
          <div className="mt-4 font-mono text-sm text-indigo-300">Starting ₹30k</div>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-sm uppercase text-gray-400">For scaling teams</div>
          <h4 className="text-xl font-semibold mt-2">Monthly AppSec Retainer</h4>
          <p className="mt-3 text-gray-300 text-sm">Recurring scans, patch verification, and incident support. Best for active SaaS teams.</p>
          <div className="mt-4 font-mono text-sm text-indigo-300">₹50k / month+</div>
        </div>
      </div>
    </section>
  )
}