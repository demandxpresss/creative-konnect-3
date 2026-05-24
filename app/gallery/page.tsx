import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { GalleryReelsClient, type GalleryReel } from '@/components/ui/GalleryReelsClient'

export const metadata: Metadata = {
  title: 'Gallery — Event Reels & Videos | Creative Konnect',
  description: 'Watch Creative Konnect in action — 36 reels from 500+ events across India. 360 booths, glambot, AI experiences, ring booth, mirror booth and more.',
  alternates: { canonical: `${SITE_CONFIG.url}/gallery` },
}

// ─────────────────────────────────────────────────────────────────────────────
// ALL 36 reels — edit 'tag' and 'label' here to update categorisation.
// Tags: 'Photo Booth' | 'Ring Booth' | 'Mirror Booth' | '360 Booth' |
//       'Glambot' | 'Strip Booth' | 'Magazine Cover' | 'AI Booth' |
//       'AI & Tech' | 'Games'
// ─────────────────────────────────────────────────────────────────────────────
const REELS: GalleryReel[] = [
  // ── Known / confirmed labels ────────────────────────────────────────────
  { id: 'TZ7DMvKk2-c',    label: 'Mirror Photobooth',       tag: 'Mirror Booth'    },
  { id: 'YFgZo7l7U5U',    label: 'AI Photobooth',           tag: 'AI Booth'        },
  { id: 'rE5tv4550tU',    label: 'Glambot',                 tag: 'Glambot'         },
  { id: '_43q1Gbbqds',    label: 'Glambot',                 tag: 'Glambot'         },
  { id: 'CZuwZBDPBq4',    label: 'Digital Mosaic',          tag: 'AI & Tech'       },
  { id: 'vicb2UkNnAs',    label: 'Strip Photobooth',        tag: 'Strip Booth'     },
  { id: 'mLJMWAZ-15c',    label: 'Magazine Cover Booth',    tag: 'Magazine Cover'  },
  { id: 'syoRDA0fqYo',    label: '360 Video Booth',         tag: '360 Booth'       },

  // ── Needs label update — currently set to 'Photo Booth' ────────────────
  // To update: change 'tag' to the correct service type and update 'label'
  { id: '4MHXXkzsXuQ',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'Rb7iXoH2jQA',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'qcbio3ssrFI',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'KfFxeQUR2eg',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: '-sCF9nZMYpQ',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'cMXRsJV_dis',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'bLLP8P-1VxA',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: '4xWcGVJXCKo',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'mMfWxJOlrFw',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'gifRl8MXFWs',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'XlcLGnF9CBE',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'DKZ9vX02MlE',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'bHOecjhRU4g',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'HPAM-EcY3h4',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'EMtf1tWwlH4',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: '9LUcL64xrCM',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'jtv2PpIN1D0',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'xkPuXdHPhMs',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'bRUXi0Ux5Ak',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'alKi3_CWMkk',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'CO1dUMvVG0o',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'r4C9DbwwpWw',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'f4om07PkM-s',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'IYhtXnzK_ZA',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'sT5V26qOK00',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'yssXDnpJx98',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: 'U8NQGCNtg9Y',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
  { id: '4MpECKgx2DA',    label: 'Creative Konnect',        tag: 'Photo Booth'     },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-ck-navy border-b-[3px] border-ck-blue px-4 sm:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-[#5a8aaa] mb-3">
            <Link href="/" className="hover:text-ck-electric transition-colors">Home</Link>
            {' › '}<span className="text-ck-electric">Gallery</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <h1 className="text-[32px] sm:text-[36px] font-black text-white tracking-tight leading-tight mb-2">
                Events We've Brought <span className="text-ck-electric">to Life</span>
              </h1>
              <p className="text-sm text-[#6a98b5] leading-relaxed max-w-[500px]">
                Browse reels from 500+ events across India — filter by service to find exactly what you're looking for.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {[
                { n: '500+', l: '🎉 Events' },
                { n: '36',   l: '🎬 Reels' },
                { n: '15+',  l: '🗺️ Cities' },
              ].map(s => (
                <div key={s.l} className="bg-ck-blue/12 border border-ck-electric/20 rounded-[8px] p-3 text-center min-w-[70px]">
                  <div className="text-xl font-black text-ck-electric">{s.n}</div>
                  <div className="text-[9px] text-[#6a98b5] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filterable reels — fully interactive client component */}
      <GalleryReelsClient reels={REELS} />

      <CtaBanner title="Liked what you saw? Let's do this for your event." sub="Get a quote in 2 hours — fully branded, fully managed." />
    </>
  )
}
