<template>
  <section
    id="hero"
    class="hero"
  >
    <div class="hero__content">
      <h1 class="hero__name">
        Graham Bartley
      </h1>
      <p class="hero__title">
        Senior Software Engineer | AI Applications Squad Lead @ Yahoo
      </p>
      <p class="hero__subtitle">
        1:1 M.Sc. (2024), 1:1 B.Sc. (2018) @ Dublin City University (DCU)
      </p>
    </div>
    <button
      class="hero__scroll-indicator"
      aria-label="Scroll to About section"
      @click="scrollToAbout"
    >
      <div class="scroll-arrow" />
    </button>
    <div class="hero__gradient" />
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

[data-theme="dark"] .hero {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

[data-theme="light"] .hero {
  background: linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #8b5cf6 100%);
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  animation: fadeIn 0.8s ease-out;
}

.hero__name {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero__title {
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
}

.hero__gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2000px;
  background: 
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.5), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.5), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(79, 70, 229, 0.4), transparent 50%);
  animation: gradient-shift 10s ease infinite;
}

[data-theme="dark"] .hero__gradient {
  background: 
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(79, 70, 229, 0.2), transparent 50%);
}

[data-theme="light"] .hero__gradient {
  background: 
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.4), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.4), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(67, 56, 202, 0.3), transparent 50%);
}

@keyframes gradient-shift {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(2) rotate(180deg); }
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.hero__scroll-indicator:hover {
  transform: translateX(-50%) translateY(5px);
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  transition: all 0.2s ease;
}

.hero__scroll-indicator:hover .scroll-arrow {
  border-color: var(--accent-primary);
  width: 35px;
  height: 35px;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(-15px) rotate(45deg); }
}

@media (max-width: 768px) {
  .hero__name {
    font-size: 2.5rem;
  }
  
  .hero__title {
    font-size: 1.2rem;
  }
  
  .hero__subtitle {
    font-size: 1rem;
  }
}
</style>

