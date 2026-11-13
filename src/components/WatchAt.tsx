import { PlayCircle } from 'lucide-react'
import { type Video, videoAt } from '@/data/videos'

/** Small "watch this step in the video" link that opens YouTube at a timestamp. */
export default function WatchAt({ video, at, label }: { video: Video; at: number; label: string }) {
  const m = Math.floor(at / 60)
  const s = String(at % 60).padStart(2, '0')
  return (
    <p>
      <a
        href={videoAt(video, at)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
      >
        <PlayCircle size={16} aria-hidden /> {label} ({m}:{s} in our tutorial video)
      </a>
    </p>
  )
}
