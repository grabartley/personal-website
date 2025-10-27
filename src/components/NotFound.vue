<template>
  <div class="not-found section">
    <div class="not-found__container">
      <div class="not-found__content">
        <h1 class="not-found__title">
          404
        </h1>
        <p class="not-found__subtitle">
          No page to be found here.
        </p>
        <router-link
          to="/"
          class="not-found__link glass"
        >
          Go Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  padding: 6rem 2rem;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
}

.not-found__container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.not-found__content {
  padding: 3rem;
}

.not-found__title {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.not-found__subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.not-found__link {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.not-found__link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-primary);
}

@media (max-width: 768px) {
  .not-found {
    padding: 4rem 1rem;
  }
}
</style>
