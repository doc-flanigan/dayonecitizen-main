/**
 * Canonical source links for the /report-a-bug guide cluster.
 *
 * Every factual claim on those pages cites one of these via <SourceLink>.
 * Keeping them in one place means a moved RSI article is a one-line fix.
 * Official = Cloud Imperium / Roberts Space Industries. Community = labeled
 * as such on the page so readers know it is not first-party.
 */
export const OFFICIAL_SOURCES = {
  issueCouncil: {
    href: 'https://issue-council.robertsspaceindustries.com/',
    label: 'The official Issue Council site',
  },
  usingIssueCouncil: {
    href: 'https://support.robertsspaceindustries.com/hc/en-us/articles/115009643527-Bug-Reports-Using-the-Issue-Council',
    label: 'Official RSI support article',
  },
  searchingIssueCouncil: {
    href: 'https://support.robertsspaceindustries.com/hc/en-us/articles/22529807104279-Searching-the-Issue-Council',
    label: 'Official RSI support article',
  },
  sendInGameFiles: {
    href: 'https://support.robertsspaceindustries.com/hc/en-us/articles/360000065688-Send-In-Game-Files-for-RSI-Support',
    label: 'Official RSI support article',
  },
  whereReportBugs: {
    href: 'https://support.robertsspaceindustries.com/hc/en-us/articles/360042526733-Where-do-I-report-game-bugs-I-find',
    label: 'Official RSI support article',
  },
  ptuFeedback: {
    href: 'https://support.robertsspaceindustries.com/hc/en-us/articles/360043976474-Where-do-I-report-bugs-and-give-feedback-about-the-Public-Test-Universe-PTU',
    label: 'Official RSI support article',
  },
} as const

export const COMMUNITY_SOURCES = [
  {
    href: 'https://starcitizen.tools/Guide:Bug_reporting',
    label: 'Star Citizen Wiki — Bug reporting guide',
  },
  {
    href: 'https://starcitizen.tools/Issue_Council',
    label: 'Star Citizen Wiki — Issue Council',
  },
  {
    href: 'https://www.youtube.com/watch?v=oLfknoVSGYw',
    label: 'How to Report Bugs Using the Issue Council (video)',
  },
  {
    href: 'https://www.youtube.com/watch?v=kGHSJIerw2o',
    label: 'Issue Council Reports: How to Submit and Why They Matter (video)',
  },
  {
    href: 'https://www.youtube.com/watch?v=DeyGuqwjaT8',
    label: 'Understanding the Issue Council (video)',
  },
] as const
