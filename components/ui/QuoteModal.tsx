'use client'
import { useState, useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { CITIES, EVENT_TYPES, SITE_CONFIG } from '@/lib/constants'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  service?: string
}

export function QuoteModal({ isOpen, onClose, service }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [form, setForm]           = useState({ name: '', phone: '', city: '', eventType: '', eventDate: '' })

  // Reset on open
  useEffect(() => {
    if (isOpen) { setSubmitted(false); setForm({ name: '', phone: '', city: '', eventType: '', eventDate: '' }) }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service }),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please WhatsApp us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-ck-navy/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-card-lg w-full max-w-[440px] overflow-hidden shadow-popup animate-slide-up">

        {/* Header */}
        <div className="bg-ck-navy px-6 pt-5 pb-4 border-b-[2.5px] border-ck-blue relative">
          <button onClick={onClose} className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/8 border border-[#1e3a52] flex items-center justify-center text-[#6a98b5] hover:bg-white/15 hover:text-white transition-colors">
            <X size={14} />
          </button>
          {service && (
            <div className="inline-flex items-center gap-1.5 bg-ck-electric/15 border border-ck-electric/30 text-ck-electric text-[9px] font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wide">
              {service}
            </div>
          )}
          <h2 className="text-lg font-black text-white leading-tight">
            Get a Free Quote<br />for Your Event
          </h2>
          <p className="text-xs text-[#5a8aaa] mt-1.5">Fill in 4 quick fields — we respond within 2 hours.</p>
        </div>

        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
                  Your Name <span className="text-ck-blue">*</span>
                </label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="form-input"
                  placeholder="Rahul Sharma"
                />
              </div>

              {/* Phone + City */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
                    Phone / WhatsApp <span className="text-ck-blue">*</span>
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="form-input"
                    placeholder="+91 84322 58944"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
                    Event City <span className="text-ck-blue">*</span>
                  </label>
                  <select
                    required
                    value={form.city}
                    onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                    className="form-select"
                  >
                    <option value="">Select city</option>
                    {CITIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Event type */}
              <div>
                <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
                  Event Type <span className="text-ck-blue">*</span>
                </label>
                <select
                  required
                  value={form.eventType}
                  onChange={e => setForm(f => ({ ...f, eventType: e.target.value }))}
                  className="form-select"
                >
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* Date (optional) */}
              <div>
                <label className="block text-[11px] font-semibold text-ck-deep mb-1.5">
                  Event Date <span className="text-[10px] text-[#aac0d0] font-normal">(optional)</span>
                </label>
                <input
                  value={form.eventDate}
                  onChange={e => setForm(f => ({ ...f, eventDate: e.target.value }))}
                  className="form-input"
                  placeholder="e.g. 15 March 2025"
                />
              </div>

              {/* Trust pills */}
              <div className="flex gap-2 pt-1">
                {['Quote in 2 hrs', 'No hidden costs', 'No spam ever'].map(t => (
                  <div key={t} className="trust-pill flex-1">
                    <div className="w-4 h-4 rounded-full bg-ck-sky flex items-center justify-center flex-shrink-0">
                      <span className="text-ck-blue text-[8px] font-bold">✓</span>
                    </div>
                    <span className="text-[9px] font-semibold text-[#5a7a92]">{t}</span>
                  </div>
                ))}
              </div>
            </form>

            <div className="px-6 pb-5 space-y-2">
              <button
                onClick={handleSubmit as any}
                disabled={loading}
                className="btn-primary w-full justify-center text-sm py-3"
              >
                {loading ? 'Sending...' : 'Send My Quote Request →'}
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'd like a quote for ${service || 'your services'}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa w-full justify-center text-sm py-2.5"
              >
                💬 WhatsApp Us Instead
              </a>
              <p className="text-[10px] text-[#aac0d0] text-center">🔒 Your details are safe with us</p>
            </div>
          </>
        ) : (
          /* Success state */
          <div className="px-6 py-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-ck-sky border-2 border-ck-blue flex items-center justify-center mb-4">
              <CheckCircle className="text-ck-blue" size={26} />
            </div>
            <h3 className="text-lg font-black text-ck-deep mb-2">We've got your request!</h3>
            <p className="text-xs text-[#7aaccc] leading-relaxed mb-5 max-w-[280px]">
              Our team will send you a detailed quote
              {service && <> for the <strong className="text-ck-deep">{service}</strong></>}{' '}
              within 2 hours.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa justify-center text-sm"
            >
              💬 WhatsApp for Instant Reply
            </a>
            <p className="text-[10px] text-[#aac0d0] mt-3">{SITE_CONFIG.phone[0]} · Mon–Sat 9am–7pm IST</p>
          </div>
        )}
      </div>
    </div>
  )
}
