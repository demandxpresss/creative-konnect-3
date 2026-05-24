'use client'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { CITIES, EVENT_TYPES, SITE_CONFIG } from '@/lib/constants'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    eventType: '', city: '', eventDate: '',
  })

  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please WhatsApp us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-12">
        <div className="w-16 h-16 rounded-full bg-ck-sky border-2 border-ck-blue flex items-center justify-center mb-4">
          <CheckCircle className="text-ck-blue" size={28} />
        </div>
        <h3 className="text-lg font-black text-ck-deep mb-2">🎉 Quote request sent!</h3>
        <p className="text-sm text-[#4a6a80] leading-relaxed mb-5 max-w-[320px]">
          Our team will send you a detailed quote within 2 hours.
          For instant replies, WhatsApp us directly.
        </p>
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa"
        >
          💬 WhatsApp for Instant Reply
        </a>
        <p className="text-[10px] text-[#8aacbe] mt-3">{SITE_CONFIG.phone[0]} · Mon–Sat 9am–7pm IST</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Phone */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
            Your Name <span className="text-ck-blue">*</span>
          </label>
          <input required value={form.name} onChange={e => set('name', e.target.value)}
            className="form-input" placeholder="Rahul Sharma" />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
            Phone / WhatsApp <span className="text-ck-blue">*</span>
          </label>
          <input required value={form.phone} onChange={e => set('phone', e.target.value)}
            className="form-input" placeholder="+91 98765 43210" />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
          Email Address <span className="text-ck-blue">*</span>
        </label>
        <input required type="email" value={form.email} onChange={e => set('email', e.target.value)}
          className="form-input" placeholder="rahul@company.com" />
      </div>

      {/* Event type + City */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
            Event Type <span className="text-ck-blue">*</span>
          </label>
          <select required value={form.eventType} onChange={e => set('eventType', e.target.value)} className="form-select">
            <option value="">Select event type</option>
            {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
            Event City <span className="text-ck-blue">*</span>
          </label>
          <select required value={form.city} onChange={e => set('city', e.target.value)} className="form-select">
            <option value="">Select city</option>
            {CITIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Date (optional) */}
      <div>
        <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
          Event Date <span className="text-[10px] text-[#8aacbe] font-normal">(optional)</span>
        </label>
        <input value={form.eventDate} onChange={e => set('eventDate', e.target.value)}
          className="form-input" placeholder="DD / MM / YYYY" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-sm py-3.5"
      >
        {loading ? 'Sending...' : '🚀 Send My Quote Request →'}
      </button>
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'd like to get a quote for an event.`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wa w-full justify-center text-sm py-3"
      >
        💬 Or WhatsApp Us Directly
      </a>
      <p className="text-[10px] text-[#8aacbe] text-center">
        🔒 We respond within 2 hours · No spam, ever
      </p>
    </form>
  )
}
