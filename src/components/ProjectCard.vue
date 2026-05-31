<template>
  <article class="project-card glass">
    <header class="project-card__header">
      <span class="project-card__status">{{ statusText }}</span>
      <span
        v-if="formattedDownloads"
        class="project-card__downloads"
      >{{ formattedDownloads }} downloads</span>
    </header>

    <h3 class="project-card__title">
      {{ title }}
    </h3>
    <p class="project-card__tagline">
      {{ tagline }}
    </p>

    <div class="project-card__summary">
      <p
        v-for="paragraph in summary"
        :key="paragraph"
      >
        {{ paragraph }}
      </p>
    </div>

    <div class="project-card__meta">
      <h4>Tech Stack</h4>
      <ul>
        <li
          v-for="tech in techStack"
          :key="tech"
        >
          {{ tech }}
        </li>
      </ul>
    </div>

    <div class="project-card__meta">
      <h4>Highlights</h4>
      <ul>
        <li
          v-for="highlight in highlights"
          :key="highlight"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>

    <nav
      class="project-card__links"
      aria-label="Project links"
    >
      <a
        v-for="link in links"
        :key="`${slug}-${link.label}`"
        :href="link.url"
        :target="link.url.startsWith('/') ? undefined : '_blank'"
        rel="noreferrer nofollow"
        class="project-card__link"
      >{{ link.label }}</a>
    </nav>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    slug: { type: String, required: true },
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    summary: { type: Array, required: true },
    techStack: { type: Array, required: true },
    highlights: { type: Array, required: true },
    links: { type: Array, required: true },
    status: { type: Object, default: null },
  },
  computed: {
    statusText() {
      if (!this.status || !this.status.version || !this.status.channel) {
        return 'In Development';
      }

      return `Live on ${this.status.platform} · ${this.status.channel} · ${this.status.version}`;
    },
    formattedDownloads() {
      const value = this.status?.downloads;
      if (typeof value !== 'number') return null;
      if (value < 1000) return `${value}`;
      return `${(value / 1000).toFixed(1)}k`;
    },
  },
};
</script>

<style scoped>
.project-card {
  padding: 2rem;
  border-radius: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease;
  animation: fadeIn 0.6s ease-out;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-primary);
}

.project-card__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.project-card__status,
.project-card__downloads {
  font-size: 0.875rem;
  border-radius: 999px;
  padding: 0.4rem 0.85rem;
  background: rgba(99, 102, 241, 0.12);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.project-card__title {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.project-card__tagline {
  color: var(--text-primary);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.project-card__summary {
  display: grid;
  gap: 0.95rem;
  margin-bottom: 1.5rem;
}

.project-card__summary p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.project-card__meta {
  margin-bottom: 1.25rem;
}

.project-card__meta h4 {
  font-size: 1rem;
  margin-bottom: 0.65rem;
}

.project-card__meta ul {
  margin-left: 1.2rem;
  display: grid;
  gap: 0.45rem;
}

.project-card__meta li {
  color: var(--text-secondary);
  line-height: 1.5;
}

.project-card__links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.project-card__link {
  text-decoration: none;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  background: var(--bg-glass);
  padding: 0.5rem 0.85rem;
  border-radius: 10px;
  font-weight: 600;
}

.project-card__link:hover {
  border-color: var(--accent-primary);
}

@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }
}
</style>
