const fs = require('fs/promises');
const path = require('path');

const PROJECT_KEY = 'loot-lock';
const outputPath = path.resolve(__dirname, '../src/data/project-status.json');

const FALLBACK = {
  [PROJECT_KEY]: {
    platform: 'Modrinth',
    channel: 'In Development',
    modrinthUrl: 'https://modrinth.com/mod/loot-lock',
    githubUrl: 'https://github.com/grabartley/minecraft-loot-lock',
    latestReleaseUrl: 'https://github.com/grabartley/minecraft-loot-lock/releases/latest',
  },
};

const channelLabel = {
  alpha: 'Alpha',
  beta: 'Beta',
  release: 'Release',
};

function formatVersion(version) {
  if (!version) return undefined;
  return version.startsWith('v') ? version : `v${version}`;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'personal-website-build-script',
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return response.json();
}

async function fetchLootLockStatus() {
  const modrinthProject = await fetchJson('https://api.modrinth.com/v2/project/loot-lock');
  const latestVersionId = modrinthProject.versions?.[0];

  let modrinthVersion;
  if (latestVersionId) {
    modrinthVersion = await fetchJson(`https://api.modrinth.com/v2/version/${latestVersionId}`);
  }

  let githubRelease = null;
  try {
    githubRelease = await fetchJson('https://api.github.com/repos/grabartley/minecraft-loot-lock/releases/latest');
  } catch (error) {
    console.warn('[fetch:project-status] GitHub API unavailable, using Modrinth-only status');
    console.warn(error.message);
  }

  const channel = channelLabel[modrinthVersion?.version_type] || 'In Development';
  const version = formatVersion(githubRelease?.tag_name || modrinthVersion?.version_number);
  const lastUpdated = githubRelease?.published_at || modrinthProject.updated;

  return {
    [PROJECT_KEY]: {
      platform: 'Modrinth',
      channel,
      version,
      downloads: modrinthProject.downloads,
      lastUpdated,
      modrinthUrl: 'https://modrinth.com/mod/loot-lock',
      githubUrl: 'https://github.com/grabartley/minecraft-loot-lock',
      latestReleaseUrl: 'https://github.com/grabartley/minecraft-loot-lock/releases/latest',
    },
  };
}

async function main() {
  let payload = FALLBACK;

  try {
    payload = await fetchLootLockStatus();
  } catch (error) {
    console.warn('[fetch:project-status] Failed to fetch dynamic status, using fallback');
    console.warn(error.message);
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`[fetch:project-status] Wrote ${outputPath}`);
}

main().catch((error) => {
  console.warn('[fetch:project-status] Unexpected failure, writing fallback');
  console.warn(error.message);
  fs.mkdir(path.dirname(outputPath), { recursive: true })
    .then(() => fs.writeFile(outputPath, `${JSON.stringify(FALLBACK, null, 2)}\n`, 'utf8'))
    .catch(() => {
      process.exitCode = 0;
    });
});
