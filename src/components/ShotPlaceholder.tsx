import { ImageIcon } from 'lucide-react'

type ShotPlaceholderProps = {
  /** Manifest filename this slot will hold, e.g. "01-launcher-build-number.png". */
  file: string
  /** What the finished screenshot must show — also used as the eventual alt text. */
  caption: string
  /** Optional annotation note (what to circle / blur) carried over from the manifest. */
  annotate?: string
}

/**
 * Captioned placeholder for a guide screenshot that has not been captured yet.
 *
 * The /report-a-bug screenshots require a logged-in backer account and a live
 * game session, so Doc captures them and drops them in via the screenshot-intake
 * workflow (see docs/screenshot-intake.md). Until a shot lands, this renders a
 * tidy labeled box so the page still ships and reads intentionally.
 *
 * To swap in the real image once captured, replace the <ShotPlaceholder /> with:
 *   <Image src={`/images/report-a-bug/${file}`} alt={caption} width={...} height={...}
 *          className="rounded-xl border border-white/10" />
 */
export default function ShotPlaceholder({
  file,
  caption,
  annotate,
}: ShotPlaceholderProps) {
  return (
    <figure className="my-6">
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gold/30 bg-navyLight/50 px-6 py-10 text-center">
        <ImageIcon size={24} className="text-gold/70" aria-hidden />
        <p className="text-sm font-semibold text-starwhite/90">
          Screenshot: {caption}
        </p>
        {annotate ? (
          <p className="text-xs text-muted">Annotate: {annotate}</p>
        ) : null}
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted/70">
          {file}
        </p>
      </div>
    </figure>
  )
}
