<template>
  <section
    v-if="stats"
    id="numbers"
    class="numbers-section section"
  >
    <div class="numbers-section__container">
      <h2 class="numbers-section__title">
        By the Numbers
      </h2>
      <div class="numbers-section__grid">
        <div
          v-for="tile in tiles"
          :key="tile.label"
          class="numbers-section__tile glass"
        >
          <span class="numbers-section__value gradient-text">{{ tile.value }}</span>
          <span class="numbers-section__label">{{ tile.label }}</span>
        </div>
      </div>
      <p class="numbers-section__caption">
        <span
          class="numbers-section__live-dot"
          aria-hidden="true"
        />
        Pulled live from the RuneLite Plugin Hub, Modrinth, and GitHub. Last updated {{ updatedAt }}.
      </p>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ByTheNumbers',
  props: {
    stats: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const format = value => (typeof value === 'number' ? value.toLocaleString('en-US') : value);

    const tiles = computed(() => {
      if (!props.stats) return [];
      const { voicedDialogue, lootLock, github } = props.stats;
      const all = [
        { value: voicedDialogue?.activeInstalls, label: 'Plugin Hub active installs' },
        { value: lootLock?.downloads, label: 'Modrinth downloads' },
        { value: voicedDialogue?.npcsVoiced, label: 'NPCs voiced' },
        { value: github?.mergedPrsAllProjects, label: 'Merged pull requests' },
        { value: github?.contributionsLastYear, label: 'Contributions in the last year' },
        { value: github?.yearsOnGitHub, label: 'Years on GitHub' },
      ];
      return all
        .filter(tile => tile.value !== null && tile.value !== undefined)
        .map(tile => ({ ...tile, value: format(tile.value) }));
    });

    const updatedAt = computed(() => {
      if (!props.stats?.generatedAt) return '';
      return new Date(props.stats.generatedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    });

    return { tiles, updatedAt };
  },
};
</script>

<style scoped>
.numbers-section {
  padding: 6rem 2rem;
}

.numbers-section__container {
  max-width: 900px;
  margin: 0 auto;
}

.numbers-section__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.numbers-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.numbers-section__tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1.5rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.numbers-section__tile:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-lg);
}

.numbers-section__value {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.numbers-section__label {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.numbers-section__caption {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-align: center;
}

.numbers-section__live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-primary);
  flex-shrink: 0;
  animation: live-pulse 2s ease-in-out infinite;
}

@keyframes live-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

@media (prefers-reduced-motion: reduce) {
  .numbers-section__live-dot {
    animation: none;
  }
}

@media (max-width: 768px) {
  .numbers-section {
    padding: 4rem 1rem;
  }

  .numbers-section__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .numbers-section__tile {
    padding: 1.5rem 1rem;
  }
}
</style>
