// One-time (re)registration of the /factcheck slash command.
// Run locally: DISCORD_APP_ID=... DISCORD_BOT_TOKEN=... DISCORD_GUILD_ID=... \
//   node scripts/register-discord-commands.mjs
// Guild-scoped = appears instantly in that server. To go global (all servers
// that install the app, ~1h propagation), set DISCORD_GLOBAL=1 instead of
// DISCORD_GUILD_ID.

const APP_ID = process.env.DISCORD_APP_ID
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
const GUILD_ID = process.env.DISCORD_GUILD_ID
const GLOBAL = process.env.DISCORD_GLOBAL === '1'

if (!APP_ID || !BOT_TOKEN || (!GUILD_ID && !GLOBAL)) {
  console.error('Need DISCORD_APP_ID, DISCORD_BOT_TOKEN, and DISCORD_GUILD_ID (or DISCORD_GLOBAL=1).')
  process.exit(1)
}

const url = GLOBAL
  ? `https://discord.com/api/v10/applications/${APP_ID}/commands`
  : `https://discord.com/api/v10/applications/${APP_ID}/guilds/${GUILD_ID}/commands`

const commands = [
  {
    name: 'factcheck',
    description: 'Check a Star Citizen claim against official CIG sources',
    type: 1,
    options: [
      {
        type: 3, // STRING
        name: 'query',
        description: 'The claim or question to check',
        required: true,
        max_length: 300,
      },
    ],
  },
]

const res = await fetch(url, {
  method: 'PUT',
  headers: {
    Authorization: `Bot ${BOT_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(commands),
})

if (!res.ok) {
  console.error(`Registration failed: ${res.status} ${await res.text()}`)
  process.exit(1)
}

const registered = await res.json()
console.log(`Registered ${registered.length} command(s) ${GLOBAL ? 'globally' : `in guild ${GUILD_ID}`}:`)
for (const c of registered) console.log(`  /${c.name} — ${c.description}`)
console.log(`\nInstall URL (authorize the app into a server, no bot permissions needed):`)
console.log(`  https://discord.com/oauth2/authorize?client_id=${APP_ID}&scope=applications.commands`)
