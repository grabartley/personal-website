<template>
  <div class="home">
    <Hero />
    <About />
    <PressFeature />
    <ExperienceTimeline />
    <HonoursAwards />
    <section
      id="projects"
      class="projects-section section"
    >
      <div class="projects-section__container">
        <h2 class="projects-section__title">
          Projects
        </h2>
        <ProjectCarousel :slide-count="1">
          <template #slide-0>
            <ProjectCard
              slug="loot-lock"
              title="LootLock"
              tagline="A server-authoritative Minecraft mod for per-player item pickup filtering, architected and shipped to public release in a single weekend."
              proof-point="Architected and shipped from empty document to public Modrinth listing in 36 hours, with full CI/CD, automated semantic versioning, and comprehensive test coverage."
              :banner-src="lootLockBanner"
              banner-alt="LootLock — Minecraft mod logo banner"
              cta-label="Read more"
            />
          </template>
        </ProjectCarousel>
      </div>
    </section>
    <Contact />
    <Navigation />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import PressFeature from '@/components/PressFeature.vue';
import ExperienceTimeline from '@/components/ExperienceTimeline.vue';
import HonoursAwards from '@/components/HonoursAwards.vue';
import ProjectCarousel from '@/components/ProjectCarousel.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Contact from '@/components/Contact.vue';
import Navigation from '@/components/Navigation.vue';
import lootLockBanner from '@/assets/projects/loot-lock-banner.png';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    PressFeature,
    ExperienceTimeline,
    HonoursAwards,
    ProjectCarousel,
    ProjectCard,
    Contact,
    Navigation,
  },
  setup() {
    return { lootLockBanner };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}

.projects-section {
  padding: 6rem 2rem;
}

.projects-section__container {
  max-width: 900px;
  margin: 0 auto;
}

.projects-section__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 4rem 1rem;
  }
}
</style>
