import { writeFileSync } from 'node:fs';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OUT_PATH = process.argv[2] || 'live-stats.json';
const GITHUB_USER = 'grabartley';
const PROJECT_REPOS = [
  'runelite-voiced-dialogue',
  'minecraft-loot-lock',
  'minecraft-dogs-unleashed',
  'personal-website',
];

async function getJson(url, headers = {}) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GET ${url} failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function githubHeaders() {
  const headers = { Accept: 'application/vnd.github+json' };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
}

async function getMergedPrCount(repo) {
  const query = encodeURIComponent(`repo:${GITHUB_USER}/${repo} type:pr is:merged`);
  const result = await getJson(`https://api.github.com/search/issues?q=${query}`, githubHeaders());
  return result.total_count;
}

async function getLatestReleaseTag(repo) {
  const releases = await getJson(
    `https://api.github.com/repos/${GITHUB_USER}/${repo}/releases?per_page=1`,
    githubHeaders(),
  );
  if (!releases.length) {
    throw new Error(`No releases found for ${repo}`);
  }
  return releases[0].tag_name;
}

async function getContributionsLastYear() {
  if (!GITHUB_TOKEN) {
    return null;
  }
  const query = `{ user(login: "${GITHUB_USER}") { contributionsCollection { contributionCalendar { totalContributions } } } }`;
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { ...githubHeaders(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  if (!response.ok) {
    throw new Error(`GitHub GraphQL failed: ${response.status}`);
  }
  const result = await response.json();
  return result.data.user.contributionsCollection.contributionCalendar.totalContributions;
}

const [
  pluginHub,
  modrinthProject,
  modrinthVersions,
  githubUser,
  npcVoices,
  profiles,
  contributionsLastYear,
  vdMergedPrs,
  llMergedPrs,
  duMergedPrs,
  pwMergedPrs,
  vdLatestRelease,
] = await Promise.all([
  getJson('https://api.runelite.net/pluginhub'),
  getJson('https://api.modrinth.com/v2/project/loot-lock'),
  getJson('https://api.modrinth.com/v2/project/loot-lock/version'),
  getJson(`https://api.github.com/users/${GITHUB_USER}`, githubHeaders()),
  getJson('https://raw.githubusercontent.com/grabartley/runelite-voiced-dialogue/main/src/main/resources/npc-voices.json'),
  getJson('https://raw.githubusercontent.com/grabartley/runelite-voiced-dialogue/main/tools/profiles.json'),
  getContributionsLastYear(),
  ...PROJECT_REPOS.map(getMergedPrCount),
  getLatestReleaseTag('runelite-voiced-dialogue'),
]);

const activeInstalls = pluginHub['voiced-dialogue'];
if (!Number.isInteger(activeInstalls) || activeInstalls < 0) {
  throw new Error(`Unexpected plugin hub value: ${activeInstalls}`);
}

const accountAgeMs = Date.now() - new Date(githubUser.created_at).getTime();
const yearsOnGitHub = Math.floor(accountAgeMs / (365.25 * 24 * 60 * 60 * 1000));

const characterProfiles = Object.keys(profiles.byId).filter(key => key !== '_comment').length;

const stats = {
  generatedAt: new Date().toISOString(),
  voicedDialogue: {
    activeInstalls,
    latestVersion: vdLatestRelease,
    mergedPrs: vdMergedPrs,
    npcsVoiced: Object.keys(npcVoices.npcs).length,
    characterProfiles,
  },
  lootLock: {
    downloads: modrinthProject.downloads,
    latestVersion: `v${modrinthVersions[0].version_number}`,
    mergedPrs: llMergedPrs,
    gameVersions: modrinthProject.game_versions,
  },
  github: {
    yearsOnGitHub,
    contributionsLastYear,
    mergedPrsAllProjects: vdMergedPrs + llMergedPrs + duMergedPrs + pwMergedPrs,
  },
};

writeFileSync(OUT_PATH, `${JSON.stringify(stats, null, 2)}\n`);
console.log(`Wrote ${OUT_PATH}`);
console.log(JSON.stringify(stats, null, 2));
