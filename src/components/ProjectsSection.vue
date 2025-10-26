<template>
  <section
    id="projects"
    class="projects section"
  >
    <div class="projects__container">
      <h2 class="section__title">
        Projects
      </h2>
      
      <div class="projects__grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @open-modal="openModal"
        />
      </div>
    </div>
    
    <Transition name="modal">
      <ProjectModal
        v-if="selectedProject"
        :project="selectedProject"
        @close="closeModal"
      />
    </Transition>
  </section>
</template>

<script>
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';
import coderdojoLogo from '@/assets/coderdojo-zen-logo.png';
import scripterLogo from '@/assets/scripter-logo.png';
import castleLogo from '@/assets/castle-escape-logo.png';

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard,
    ProjectModal,
  },
  setup() {
    const selectedProject = ref(null);
    
    const projects = [
      {
        id: 'zen',
        title: 'CoderDojo Zen Platform',
        description: 'Open-source education platform for teaching coding to young people',
        image: coderdojoLogo,
        tags: ['Vue.js', 'AngularJS', 'Node.js', 'SenecaJS'],
        github: 'https://github.com/CoderDojo',
      },
      {
        id: 'scripter',
        title: 'Scripter',
        description: 'Android automation app for background task execution',
        image: scripterLogo,
        tags: ['Android', 'JavaScript', 'Java'],
        github: 'https://github.com/grabartley/scripter',
      },
      {
        id: 'castle-escape',
        title: 'Castle Escape',
        description: 'Text-based adventure puzzle game',
        image: castleLogo,
        tags: ['C++', 'Java'],
        github: 'https://github.com/grabartley/castle-escape',
      },
    ];
    
    const openModal = (project) => {
      selectedProject.value = project;
      document.body.style.overflow = 'hidden';
    };
    
    const closeModal = () => {
      selectedProject.value = null;
      document.body.style.overflow = '';
    };
    
    return {
      projects,
      selectedProject,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 6rem 2rem;
  background: var(--bg-secondary);
}

.projects__container {
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

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 1rem;
  }
  
  .projects__grid {
    grid-template-columns: 1fr;
  }
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

