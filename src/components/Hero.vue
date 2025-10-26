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
        Senior Software Engineer | Technical Lead
      </p>
      <p class="hero__subtitle">
        M.Sc. in Secure Software Engineering Student
      </p>
    </div>
    <div class="hero__scroll-indicator">
      <div class="scroll-arrow" />
    </div>
    <div class="hero__gradient" />
  </section>
</template>

<script>
export default {
  name: 'Hero',
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
  background: var(--bg-primary);
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
  background: 
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(79, 70, 229, 0.2), transparent 50%);
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); }
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
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

