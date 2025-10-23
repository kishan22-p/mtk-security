import React from 'react'
export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold">Start a conversation</h3>
          <p className="text-gray-400 mt-2">Request the free mini-scan, ask for a proposal, or book a quick 15-min call. We respond within 24 hours on business days.</p>
          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <div>
              <div className="text-xs text-gray-400">Email</div>
              <div>hackerkis@proton.me</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">WhatsApp</div>
              <div>+91-7667124408</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">LinkedIn</div>
              <div><a href="https://www.linkedin.com/in/kishan-kumar-9b3745308" className="text-indigo-300">kishan-kumar</a></div>
            </div>
            <div className="mt-4">
              <a href="mailto:hackerkis@proton.me" className="inline-block px-4 py-2 border border-gray-700 rounded">Email us</a>
              <a href="https://wa.me/917667124408" target="_blank" rel="noreferrer" className="ml-3 inline-block px-4 py-2 border border-gray-700 rounded">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent — we\'ll reply to your email soon.')}} className="space-y-3">
            <input name="name" required placeholder="Your name" className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-800 text-sm" />
            <input name="org" placeholder="Company / Org" className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-800 text-sm" />
            <input name="email" placeholder="Your email" className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-800 text-sm" />
            <textarea name="message" placeholder="Tell us about your app or issue" className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-800 text-sm" rows={4} />
            <div className="flex gap-3">
              <button type="submit" className="flex-1 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded font-medium">Send message</button>
              <a href="https://wa.me/917667124408" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded">WhatsApp</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}