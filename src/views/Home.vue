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
        <ProjectCarousel :slide-count="2">
          <template #slide-0>
            <ProjectCard
              slug="voiced-dialogue"
              title="Voiced Dialogue"
              tagline="A RuneLite plugin that gives Old School RuneScape's silent dialogue real AI voices, with emotion, accents, and hand-written personalities for over 6,400 characters."
              proof-point="Published on the RuneLite Plugin Hub with 155 active users, voicing over 13,700 NPCs, with community pull requests merged and player-reported issues shipped as fixes."
              :banner-src="voicedDialogueBanner"
              banner-alt="Voiced Dialogue RuneLite plugin banner"
              cta-label="Read more"
            />
          </template>
          <template #slide-1>
            <ProjectCard
              slug="loot-lock"
              title="LootLock"
              tagline="A server-authoritative Minecraft mod for per-player item pickup filtering, taken from weekend alpha to stable public release."
              proof-point="Shipped to Modrinth as an alpha in 36 hours, hardened through twenty pre-release versions to a stable 1.0, then upgraded to Minecraft 1.21.1 with a major networking migration."
              :banner-src="lootLockBanner"
              banner-alt="LootLock Minecraft mod logo banner"
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
import voicedDialogueBanner from '@/assets/projects/voiced-dialogue-banner.svg';

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
    return { lootLockBanner, voicedDialogueBanner };
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
