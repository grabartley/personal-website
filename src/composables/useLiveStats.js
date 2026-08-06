import { ref } from 'vue';

const LIVE_URL = 'https://raw.githubusercontent.com/grabartley/personal-website/live-stats/live-stats.json';
const FALLBACK_URL = '/data/live-stats.json';

const stats = ref(null);
let loadPromise = null;

async function fetchStats(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.json();
}

export function useLiveStats() {
  if (!loadPromise) {
    loadPromise = fetchStats(LIVE_URL)
      .catch(() => fetchStats(FALLBACK_URL))
      .then(data => {
        stats.value = data;
      })
      .catch(() => {
        stats.value = null;
      });
  }
  return { stats };
}
