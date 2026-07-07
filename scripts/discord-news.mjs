// Discord news heartbeat: posts plain-English Star Citizen news to #announcements.
//
// Polls the Star Citizen Wiki Comm-Link API, diffs against
// .github/discord-news-state.json, has Haiku write a 2-3 sentence
// plain-English summary per new item, and posts each as an embed via
// the DISCORD_NEWS_WEBHOOK_URL webhook. Patch-note items ping @Patch Drops.
//
// Env:
//   DISCORD_NEWS_WEBHOOK_URL  (required) Discord webhook for #announcements
//   ANTHROPIC_API_KEY         (optional) enables Haiku summaries; without it
//                             the embed carries only the official title + link
//   MAX_POSTS                 (optional) cap per run, default 3
//
// Run: node scripts/discord-news.mjs

import { readFileSync, writeFileSync } from 'node:fs';

const WEBHOOK = process.env.DISCORD_NEWS_WEBHOOK_URL;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '';
const MAX_POSTS = Number(process.env.MAX_POSTS || 3);
const STATE_PATH = '.github/discord-news-state.json';
const PATCH_DROPS_ROLE_ID = '1505955216284057620';

if (!WEBHOOK) {
  console.error('DISCORD_NEWS_WEBHOOK_URL is not set');
  process.exit(1);
}

function readState() {
  try {
    return JSON.parse(readFileSync(STATE_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

async function fetchCommLinks() {
  const res = await fetch('https://api.star-citizen.wiki/api/comm-links');
  if (!res.ok) throw new Error(`comm-links API HTTP ${res.status}`);
  const json = await res.json();
  const items = (json.data || json).filter((i) => i.rsi_url && i.created_at);
  items.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  return items;
}

// Full article text for better summaries; returns '' when unavailable.
async function fetchFullText(item) {
  try {
    const res = await fetch(item.api_url);
    if (!res.ok) return '';
    const json = await res.json();
    const t = json.data?.translations;
    const raw = typeof t === 'object' ? t.en_EN || Object.values(t)[0] || '' : '';
    return String(raw).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 2000);
  } catch {
    return '';
  }
}

async function summarize(item, fullText) {
  if (!ANTHROPIC_KEY) return '';
  const prompt = [
    'Summarize this official Star Citizen news post in 2-3 short sentences',
    'for someone who has never played the game. Plain English only - no',
    'gaming jargon, no abbreviations without explanation, sentences under',
    '25 words. Do not editorialize; state what was announced.',
    '',
    `Title: ${item.title}`,
    fullText ? `Content: ${fullText}` : '(No article text available - summarize from the title alone, conservatively.)',
  ].join('\n');
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 250,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) {
      console.error(`Haiku HTTP ${res.status} for "${item.title}" - falling back to title-only`);
      return '';
    }
    const json = await res.json();
    return (json.content?.[0]?.text || '').trim();
  } catch (e) {
    console.error(`Haiku call failed for "${item.title}": ${e.message}`);
    return '';
  }
}

function isPatchItem(item) {
  return /alpha\s*\d|patch notes/i.test(item.title) || /patch-notes/i.test(item.rsi_url);
}

async function postToDiscord(item, summary) {
  const patch = isPatchItem(item);
  const body = {
    content: patch ? `<@&${PATCH_DROPS_ROLE_ID}> New patch news!` : '',
    allowed_mentions: { roles: [PATCH_DROPS_ROLE_ID] },
    embeds: [
      {
        title: item.title,
        url: item.rsi_url,
        description: summary || 'Read the official post for the details.',
        color: 0xf0c040,
        timestamp: new Date(item.created_at).toISOString(),
        footer: { text: 'Official RSI news · plain-English summary · dayonecitizen.com' },
      },
    ],
  };
  const res = await fetch(WEBHOOK, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Discord webhook HTTP ${res.status}: ${await res.text()}`);
}

const state = readState();
const sinceIso = state.latest_comm_link_iso || '';
const items = await fetchCommLinks();
const fresh = items.filter((i) => !sinceIso || new Date(i.created_at) > new Date(sinceIso));

if (fresh.length === 0) {
  console.log(`No new comm-links since ${sinceIso || '(no state)'}`);
  process.exit(0);
}

// Newest N, posted oldest-first so the channel reads chronologically.
const toPost = fresh.slice(0, MAX_POSTS).reverse();
console.log(`${fresh.length} new item(s); posting ${toPost.length}`);

for (const item of toPost) {
  const fullText = await fetchFullText(item);
  const summary = await summarize(item, fullText);
  await postToDiscord(item, summary);
  console.log(`posted: ${item.title} (${item.created_at})`);
}

writeFileSync(
  STATE_PATH,
  JSON.stringify(
    {
      ...state,
      latest_comm_link_iso: items[0].created_at,
      last_checked_utc: new Date().toISOString(),
    },
    null,
    2
  ) + '\n'
);
console.log(`state updated: latest_comm_link_iso=${items[0].created_at}`);
