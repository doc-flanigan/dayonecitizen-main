'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import type { Video } from '@/data/videos'

/**
 * Click-to-play YouTube embed. Until the visitor presses play it shows a poster served
 * from this site, so the page makes no request to YouTube or Google (the network is
 * cookieless). On play it loads YouTube's privacy-enhanced player (youtube-nocookie).
 */
export default function VideoEmbed({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-navyLight/40">
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play video: ${video.title}`}
          >
            <Image src={video.poster} alt="" fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            <span className="absolute inset-0 bg-navy/20 transition group-hover:bg-navy/5" />
            {/* right of centre: the thumbnail's headline sits on the left half */}
            <span className="absolute left-[70%] top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy shadow-xl transition group-hover:scale-110">
              <Play size={28} fill="currentColor" aria-hidden />
            </span>
          </button>
        )}
      </div>
      <figcaption className="px-5 py-3 text-sm text-muted">
        Plays from YouTube when you press play.
      </figcaption>
    </figure>
  )
}
