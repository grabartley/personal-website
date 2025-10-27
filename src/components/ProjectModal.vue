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
        
        <div class="modal__links">
          <span
            v-for="github in projectData.github"
            :key="github"
            class="modal__links"
          >
            <a 
              :href="github" 
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
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              View on GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scripterExample from '@/assets/scripter-example-script.png';
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
  mounted() {
    window.addEventListener('keydown', this.handleEscape);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  },
  methods: {
    handleEscape(event) {
      if (event.key === 'Escape') {
        this.$emit('close');
      }
    },
    getProjectDetails(projectId) {
      const details = {
        zen: {
          longDescription: 'During my internship with the CoderDojo Foundation I developed new features and pages for Zen. I mainly worked on the new front-end which was partly redesigned and rewritten using the VueJS framework while I was there but I also worked on the older front-end using Angular 1 and the back-end microservices using NodeJS and SenecaJS. This work led to me wanting to continue contributing to the development of Zen which I was able to do through my final year project at DCU. This individual project focused on the design, testing and implementation of a coding project creation, management and interaction solution for Zen which allows CoderDojo Ninjas to upload, share and interact with coding projects directly through Zen.',
          video: zenVideo,
        },
        scripter: {
          longDescription: 'Developed with a friend during my third year at DCU, Scripter is my first Android application. It gives you greater control over your device by allowing you to explain simple logic in JavaScript which can be used to run tasks automatically in the background.',
          images: [scripterExample],
        },
        'castle-escape': {
          longDescription: 'My first open source text-based adventure-puzzle game written in C++ and later rewritten in Java. The game begins in the old sewers of a castle and takes you on a journey through the castle\'s many twists and turns as you search for a way out while learning more and more about your surroundings. You can collect useful items along the way which may help you to escape and uncover more of the castle.',
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
  align-content: center;
  justify-items: center;
}

.modal__image {
  width: 80%;
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

