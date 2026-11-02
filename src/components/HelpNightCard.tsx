import CTAButton from '@/components/CTAButton'
import LocalTimeRange from '@/components/LocalTimeRange'
import { nextHelpNight } from '@/data/help-nights'

/**
 * "Next New Player Help Night" card for the play-stage Day One pages
 * (first launch, first flight, first day). Shows only the next session and
 * renders nothing once the list runs out. Data: src/data/help-nights.ts.
 * The pages revalidate, so a finished session drops off without a deploy.
 */
export default function HelpNightCard() {
  const night = nextHelpNight()
  if (!night) return null

  return (
    <aside className="card-surface rounded-lg border border-white/5 p-5">
      <h2 className="heading-display text-xl">Want a hand in game? Join a live help night</h2>
      <p className="mt-2 text-sm leading-relaxed text-starwhite/80">
        On Saturdays through early December, we hold a two-hour voice session on the Day One
        Citizen Discord, a free chat app. Bring any question: your first launch, controls,
        your first flight, or whether to buy. Veteran players answer live.
      </p>
      <p className="mt-3 text-sm font-semibold text-starwhite">
        Next: <LocalTimeRange startsAt={night.startsAt} durationMinutes={night.durationMinutes} />
      </p>
      <div className="mt-4">
        <CTAButton
          href={night.discordEventUrl}
          external
          size="md"
          variant="ghost"
          showIcon={false}
          trackingLabel="help-night-rsvp"
        >
          RSVP on Discord
        </CTAButton>
      </div>
    </aside>
  )
}
