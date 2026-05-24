import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import type { SanityImage } from '@/types'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage & { alt?: string; caption?: string } }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-6">
          <div className="relative w-full rounded-card overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image
              src={urlFor(value).width(1200).quality(85).url()}
              alt={value.alt || ''}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-[10px] text-[#7aaccc] mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-ck-deep">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-[#5a7a92]">{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-ck-blue underline underline-offset-2 hover:text-ck-electric transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-ck-sky text-ck-deep text-[11px] px-1.5 py-0.5 rounded font-mono">
        {children}
      </code>
    ),
  },

  block: {
    h2: ({ children }) => (
      <h2 className="text-base font-black text-ck-deep tracking-tight mt-7 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-sm font-bold text-ck-deep tracking-tight mt-5 mb-2">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-sm text-[#5a7a92] leading-[1.85] mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-ck-blue bg-ck-sky rounded-r-[8px] px-4 py-3.5 my-5">
        <p className="text-sm font-semibold text-ck-deep leading-relaxed italic m-0">
          {children}
        </p>
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2 mb-4 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-2 mb-4 ml-4 list-decimal">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 text-sm text-[#5a7a92] leading-relaxed">
        <div className="w-1.5 h-1.5 rounded-full bg-ck-blue flex-shrink-0 mt-2" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-sm text-[#5a7a92] leading-relaxed">{children}</li>
    ),
  },
}

interface RichTextProps {
  content: unknown[]
  className?: string
}

export function RichText({ content, className = '' }: RichTextProps) {
  if (!content?.length) return null
  return (
    <div className={`prose-ck ${className}`}>
      <PortableText value={content as any} components={components} />
    </div>
  )
}
