<template>
  <div class="project-card glass">
    <div class="project-card__banner">
      <img
        :src="bannerSrc"
        :alt="bannerAlt"
        class="project-card__banner-img"
      >
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title">
        {{ title }}
      </h3>
      <p class="project-card__tagline">
        {{ tagline }}
      </p>
      <p class="project-card__proof">
        {{ proofPoint }}
      </p>
      <router-link
        :to="`/project/${slug}`"
        class="project-card__cta glass"
      >
        <span>{{ ctaLabel }}</span>
        <svg
          class="project-card__cta-arrow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    proofPoint: {
      type: String,
      required: true,
    },
    bannerSrc: {
      type: String,
      required: true,
    },
    bannerAlt: {
      type: String,
      required: true,
    },
    ctaLabel: {
      type: String,
      default: 'Read more',
    },
  },
};
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
  animation-fill-mode: both;
  box-shadow: var(--shadow-md);
  width: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.project-card__banner {
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.project-card__banner-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.project-card__body {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  flex: 1;
}

.project-card__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.project-card__tagline {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-style: italic;
}

.project-card__proof {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.project-card__cta {
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--accent-primary);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.project-card__cta:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-primary);
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
}

.project-card__cta-arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.project-card__cta:hover .project-card__cta-arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .project-card__body {
    padding: 1.5rem;
  }
}
</style>
