<template>
  <div
    class="modal-backdrop"
    @click="$emit('close')"
  >
    <div
      class="modal"
      @click.stop
    >
      <button
        class="modal__close"
        aria-label="Close modal"
        @click="$emit('close')"
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      
      <div class="modal__content">
        <h2 class="modal__title">
          {{ projectData.title }}
        </h2>
        
        <div
          v-if="projectData.longDescription"
          class="modal__description"
        >
          <p>{{ projectData.longDescription }}</p>
        </div>
        
        <div
          v-if="projectData.video"
          class="modal__video"
        >
          <video controls>
            <source
              :src="projectData.video"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div
          v-if="projectData.images"
          class="modal__images"
        >
          <img 
            v-for="(image, index) in projectData.images" 
            :key="index"
            :src="image"
            :alt="`${projectData.title} screenshot ${index + 1}`"
            class="modal__image"
          >
        </div>
        
        <div class="modal__tags">
          <span 
            v-for="tag in projectData.tags" 
            :key="tag"
            class="modal__tag"
          >
            {{ tag }}
          </span>
        </div>
        
        <div
          v-if="projectData.github"
          class="modal__links"
        >
          <a 
            :href="projectData.github" 
            target="_blank" 
            rel="noreferrer nofollow"
            class="modal__link glass"
          >
            <svg
              class="modal__link-icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11 1.466-1.466.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coderdojoLogo from '@/assets/coderdojo-zen-logo.png';
import scripterLogo from '@/assets/scripter-logo.png';
import scripterExample from '@/assets/scripter-example-script.png';
import castleLogo from '@/assets/castle-escape-logo.png';
import zenVideo from '@/assets/ca400-video-walkthrough.mp4';

export default {
  name: 'ProjectModal',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  emits: ['close'],
  computed: {
    projectData() {
      const projectDetails = this.getProjectDetails(this.project.id);
      return {
        ...this.project,
        ...projectDetails,
      };
    },
  },
  methods: {
    getProjectDetails(projectId) {
      const details = {
        zen: {
          longDescription: 'During my internship with the CoderDojo Foundation I developed new features and pages for Zen. I mainly worked on the new front-end which was partly redesigned and rewritten using the VueJS framework while I was there but I also worked on the older front-end using Angular 1 and the back-end microservices using NodeJS and SenecaJS. This work led to me wanting to continue contributing to the development of Zen which I was able to do through my final year project at DCU. This individual project focused on the design, testing and implementation of a coding project creation, management and interaction solution for Zen which allows CoderDojo Ninjas to upload, share and interact with coding projects directly through Zen.',
          video: zenVideo,
          images: [coderdojoLogo],
        },
        scripter: {
          longDescription: 'Developed with a friend during my third year at DCU, Scripter is my first Android application. It gives you greater control over your device by allowing you to explain simple logic in JavaScript which can be used to run tasks automatically in the background.',
          images: [scripterLogo, scripterExample],
        },
        draughts: {
          longDescription: 'Created as part of my B.Sc. studies at DCU using JavaScript with the Three.js library. I wrote this as a submission to a website created by Dr. Mark Humphrys called Ancient Brain which allows people to share coding projects in the form of "Worlds" and "Minds".',
          images: [],
        },
        'castle-escape': {
          longDescription: 'My first open source text-based adventure-puzzle game written in C++ and later rewritten in Java. The game begins in the old sewers of a castle and takes you on a journey through the castle\'s many twists and turns as you search for a way out while learning more and more about your surroundings. You can collect useful items along the way which may help you to escape and uncover more of the castle.',
          images: [castleLogo],
        },
      };
      
      return details[projectId] || {};
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 2000;
  overflow-y: auto;
}

.modal {
  position: relative;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--bg-secondary);
  border-radius: 20px;
  box-shadow: var(--shadow-xl);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.modal__close:hover {
  transform: rotate(90deg);
  background: var(--accent-primary);
  color: white;
}

.modal__close svg {
  width: 24px;
  height: 24px;
}

.modal__content {
  padding: 3rem 2rem 2rem;
}

.modal__title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal__description {
  margin-bottom: 2rem;
}

.modal__description p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.modal__video {
  margin-bottom: 2rem;
}

.modal__video video {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

.modal__images {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.modal__image {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.modal__tag {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.modal__links {
  display: flex;
  gap: 1rem;
}

.modal__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.modal__link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.modal__link-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: 1rem;
  }
  
  .modal__content {
    padding: 2rem 1.5rem 1.5rem;
  }
  
  .modal__title {
    font-size: 1.5rem;
  }
}
</style>

