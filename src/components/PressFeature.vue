<template>
  <section
    id="press"
    class="press section"
  >
    <div class="press__container">
      <h2 class="section__title">
        Press & Features
      </h2>

      <div class="press__card glass">
        <div class="press__badge">
          <img
            src="@/assets/silicon-republic-logo.png"
            alt="Silicon Republic"
            class="press__logo"
          >
        </div>

        <div class="press__icon">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
        </div>

        <blockquote class="press__quote">
          "The best solutions often come from pushing back on the premise, not just optimising within the constraints you're given."
        </blockquote>

        <div class="press__attribution">
          <cite class="press__source">
            What skills drive a senior software engineer's work at Yahoo?
          </cite>
          <span class="press__date">Silicon Republic &mdash; April 2026</span>
        </div>

        <a
          href="https://www.siliconrepublic.com/people/skills-senior-software-engineer-work-yahoo-leadership-productivity"
          target="_blank"
          rel="noreferrer nofollow"
          class="press__cta glass"
        >
          <span>Read the full interview</span>
          <svg
            class="press__cta-arrow"
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
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PressFeature',
};
</script>

<style scoped>
.press {
  padding: 6rem 2rem;
  background: var(--bg-secondary);
}

.press__container {
  max-width: 1000px;
  margin: 0 auto;
}

.section__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.press__card {
  position: relative;
  padding: 3rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
  overflow: hidden;
}

.press__card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.press__badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
}

.press__logo {
  height: 20px;
  width: auto;
  display: block;
}

.press__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  opacity: 0.3;
}

.press__icon svg {
  width: 48px;
  height: 48px;
}

.press__quote {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  line-height: 1.6;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  quotes: none;
}

.press__attribution {
  margin-bottom: 2.5rem;
}

.press__source {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  font-style: normal;
  margin-bottom: 0.25rem;
}

.press__date {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.press__cta {
  display: inline-flex;
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
}

.press__cta:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-primary);
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
}

.press__cta-arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.press__cta:hover .press__cta-arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .press {
    padding: 4rem 1rem;
  }

  .press__card {
    padding: 2rem 1.5rem;
  }
}
</style>
