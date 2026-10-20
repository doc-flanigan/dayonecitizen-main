import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

const DISCORD_URL =
  process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? 'https://discord.gg/MpAUJs9xet'

export default function SaleAlertCTA() {
  return (
    <aside className="card-surface rounded-lg border border-white/5 p-5">
      <h2 className="heading-display text-xl">Not buying today?</h2>
      <p className="mt-2 text-sm leading-relaxed text-starwhite/80">
        The First Flight Pack goes on sale a few times a year. The{' '}
        <Term name="IAE">Intergalactic Aerospace Expo</Term> in November is the
        big one. Join the Discord and pick the sales ping in the welcome
        questions. We post once when a sale opens, with the referral link ready.
      </p>
      <div className="mt-4">
        <CTAButton
          href={DISCORD_URL}
          external
          size="md"
          variant="ghost"
          showIcon={false}
          trackingLabel="sale-alert-discord"
        >
          Get the sale ping on Discord
        </CTAButton>
      </div>
    </aside>
  )
}
