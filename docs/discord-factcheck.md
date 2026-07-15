# Discord /factcheck — setup and operations

Serverless slash command: Discord POSTs signed interactions to
`https://dayonecitizen.com/api/discord-interactions` (this app on Vercel).
Search runs over the bundled `src/data/claims.json` — the same snapshot the
/fact-check page uses, kept current by the existing `npm run sync-claims` +
deploy ritual. **No LLM/API tokens at runtime**; misses submit to the same
#fact-check-requests intake webhook as the web form.

## One-time setup

1. Create a Discord application at https://discord.com/developers/applications
   (e.g. "Day One Fact Check" — do NOT reuse the Doc's Bot app).
2. Vercel (Production env): set `DISCORD_PUBLIC_KEY` = the app's Public Key.
   (`CLAIM_REQUEST_WEBHOOK_URL` is already set from the web form.)
   Redeploy so the env var is live.
3. Discord app → General Information → **Interactions Endpoint URL** =
   `https://dayonecitizen.com/api/discord-interactions` → Save.
   (Discord PING-validates on save; step 2 must be deployed first.)
4. Authorize the app into the server (applications.commands scope only):
   `https://discord.com/oauth2/authorize?client_id=<APP_ID>&scope=applications.commands`
5. Register the command (guild-scoped, instant):
   ```
   DISCORD_APP_ID=... DISCORD_BOT_TOKEN=... DISCORD_GUILD_ID=... \
     node scripts/register-discord-commands.mjs
   ```
   The bot token is used ONLY here, never at runtime.

## Behavior

- `/factcheck <query>` → top 3 ledger matches as public embeds
  (✅ verified / ❓ unverifiable / ❌ false-myth, first source, lastVerified,
  link to the page).
- No match → ephemeral "No claim on file yet" + **Submit for fact-checking**
  button → posts a 📥 intake embed (marked "via Discord /factcheck") to
  #fact-check-requests → normal "process the fact-check queue" ritual.
- Guards: Ed25519 signature verification, 300-char cap, per-user submit
  throttle (5 per 10 min), `allowed_mentions: { parse: [] }`.

## Going multi-server later

Run the registration script with `DISCORD_GLOBAL=1` (instead of
DISCORD_GUILD_ID), then share the install URL — anyone can add the command to
their server; the endpoint and claims data need no changes.
