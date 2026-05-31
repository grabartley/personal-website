<template>
  <section
    id="personal-projects"
    class="personal-projects section"
  >
    <div class="personal-projects__container">
      <h2 class="section__title">
        Personal Projects
      </h2>
      <div class="personal-projects__grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :slug="project.slug"
          :title="project.title"
          :tagline="project.tagline"
          :summary="project.summary"
          :tech-stack="project.techStack"
          :highlights="project.highlights"
          :links="project.links"
          :status="projectStatuses[project.slug]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/data/projects';
import projectStatuses from '@/data/project-status.json';

export default {
  name: 'PersonalProjects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
      projectStatuses,
    };
  },
};
</script>

<style scoped>
.personal-projects {
  padding: 6rem 2rem;
  background: var(--bg-secondary);
}

.personal-projects__container {
  max-width: 1200px;
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

.personal-projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .personal-projects {
    padding: 4rem 1rem;
  }
}
</style>
