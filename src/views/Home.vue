<template>
  <div class="home">
    <Hero />
    <About />
    <ExperienceTimeline />
    <HonoursAwards />
    <Highlights v-if="isDesktop" />
    <!-- <ProjectsSection /> -->
    <Contact />
    <Navigation />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import ExperienceTimeline from '@/components/ExperienceTimeline.vue';
import HonoursAwards from '@/components/HonoursAwards.vue';
import Highlights from '@/components/Highlights.vue';
// import ProjectsSection from '@/components/ProjectsSection.vue';
import Contact from '@/components/Contact.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    ExperienceTimeline,
    HonoursAwards,
    Highlights,
    // ProjectsSection,
    Contact,
    Navigation,
  },
  setup() {
    const isDesktop = ref(window.innerWidth > 768);

    const handleResize = () => {
      isDesktop.value = window.innerWidth > 768;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      isDesktop,
    };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}
</style>

