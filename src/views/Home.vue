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
              title="Voiced Dialogue"
              tagline="A RuneLite plugin that reads Old School RuneScape's dialogue out loud as you play, giving every NPC a voice that fits who they are."
              :highlights="voicedDialogueHighlights"
              :links="voicedDialogueLinks"
              :banner-src="voicedDialogueBanner"
              banner-alt="Voiced Dialogue RuneLite plugin banner"
              :stats="voicedDialogueStats"
            />
          </template>
        </ProjectCarousel>
      </div>
    </section>
    <ByTheNumbers :stats="liveStats" />
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
import ByTheNumbers from '@/components/ByTheNumbers.vue';
import Contact from '@/components/Contact.vue';
import Navigation from '@/components/Navigation.vue';
import { useLiveStats } from '@/composables/useLiveStats';
import voicedDialogueBanner from '@/assets/projects/voiced-dialogue-banner.svg';
import { computed } from 'vue';

const voicedDialogueHighlights = [
  'A voice for every NPC, matched to its race, gender, age and accent, with hand-written profiles for over 6,400 named characters.',
  'Accents that fit the lore for 18 races and 14 regions, and emotion read from the speaker\'s chat-head.',
  'An NPC Voices side panel to change any NPC\'s accent, style or pace, with import and export to share your setup.',
  'Your own character speaks too, with an optional narrator, examine text, and background chatter from nearby NPCs.',
  'Dialogue in other languages or speaking styles, from pirate to Shakespeare.',
  'Uses Gemini text-to-speech through Google AI Studio or OpenRouter, at about $0.001 a line. Lines you have heard replay for free.',
];

const voicedDialogueLinks = [
  { label: 'Plugin Hub', href: 'https://runelite.net/plugin-hub/show/voiced-dialogue' },
  { label: 'Source code', href: 'https://github.com/grabartley/runelite-voiced-dialogue' },
];

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
    ByTheNumbers,
    Contact,
    Navigation,
  },
  setup() {
    const { stats: liveStats } = useLiveStats();

    const voicedDialogueStats = computed(() => {
      const vd = liveStats.value?.voicedDialogue;
      if (!vd) return [];
      return [
        { value: vd.activeInstalls.toLocaleString('en-US'), label: 'active installs' },
        { value: vd.npcsVoiced.toLocaleString('en-US'), label: 'NPCs voiced' },
        { value: vd.latestVersion, label: 'latest release' },
      ];
    });

    return {
      voicedDialogueBanner,
      voicedDialogueHighlights,
      voicedDialogueLinks,
      liveStats,
      voicedDialogueStats,
    };
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
