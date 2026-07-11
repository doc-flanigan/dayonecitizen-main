import Link from 'next/link'

const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? 'https://discord.gg/vHjvDxHQP2'

export function DiscordCTA() {
  return (
    <div className="mt-3 text-center">
      <p className="text-sm" style={{ color: '#8892a4' }}>
        Already enlisted?{' '}
        <Link
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#f0c040' }}
          className="underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Join the DayOneCitizen Discord
        </Link>{' '}
        for starter help and ship advice.
      </p>
    </div>
  )
}
