<template>
  <section
    id="highlights"
    class="highlights section"
  >
    <div class="highlights__container">
      <h2 class="section__title">
        Highlights
      </h2>

      <div class="collage-wrapper">
        <div
          v-for="(row, rowIndex) in collageRows"
          :key="rowIndex"
          class="collage-row"
          :class="`collage-row--${rowIndex % 2 === 0 ? 'normal' : 'reverse'}`"
        >
          <div class="collage-track">
            <!-- Duplicate the images 5 times for seamless infinite scroll -->
            <template
              v-for="duplicateIndex in 5"
              :key="`duplicate-${duplicateIndex}`"
            >
              <div
                v-for="(image, imgIndex) in row"
                :key="`${rowIndex}-${duplicateIndex}-${imgIndex}`"
                class="collage-item glass"
                @click="openModal(image)"
              >
                <img
                  :src="getImagePath(image)"
                  :alt="`Life and career moment ${imgIndex + 1}`"
                  class="collage-image"
                >
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <transition name="modal-fade">
      <div
        v-if="isModalOpen"
        class="modal-overlay"
        @click="closeModal"
      >
        <div
          class="modal-content"
          @click.stop
        >
          <button
            class="modal-close"
            aria-label="Close modal"
            @click="closeModal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
              />
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
              />
            </svg>
          </button>
          <img
            :src="getImagePath(selectedImage)"
            :alt="selectedImage"
            class="modal-image"
          >
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Highlights',
  data() {
    return {
      images: [
        'msc-grad-1.JPG',
        'msc-grad-2.jpg',
        'bsc-grad-1.JPG',
        'bsc-grad-2.JPG',
        'pwc-award.png',
        'pwc-cert.jpg',
        'coderdojo-team-1.jpg',
        'coderdojo-team-2.jpg',
        'dts-1.jpg',
        'dts-2.JPG',
        'dts-3.jpg',
        'digimarcon-1.jpg',
      ],
      selectedImage: null,
      isModalOpen: false,
    };
  },
  computed: {
    collageRows() {
      // Shuffle images randomly
      const shuffled = this.shuffleArray([...this.images]);

      // Distribute across exactly 2 rows (uneven is fine!)
      const midpoint = Math.ceil(shuffled.length / 2);
      return [
        shuffled.slice(0, midpoint),  // First row (will have +1 if odd count)
        shuffled.slice(midpoint),     // Second row
      ];
    },
  },
  mounted() {
    // Listen for ESC key to close modal
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    shuffleArray(array) {
      // Fisher-Yates shuffle algorithm
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },
    getImagePath(imageName) {
      try {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
      } catch (e) {
        console.warn(`Image not found: ${imageName}`);
        return '';
      }
    },
    openModal(imageName) {
      this.selectedImage = imageName;
      this.isModalOpen = true;
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = null;
      // Restore body scroll
      document.body.style.overflow = '';
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.isModalOpen) {
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped>
.highlights {
  padding: 6rem 2rem;
  overflow: hidden;
  position: relative;
}

.highlights__container {
  max-width: 100%;
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

.collage-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.collage-row {
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.collage-track {
  display: flex;
  gap: 2rem;
  animation: scroll-left 50s linear infinite;
}

.collage-row--reverse .collage-track {
  animation: scroll-right 50s linear infinite;
}

.collage-item {
  flex: 0 0 auto;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.collage-item:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
  z-index: 10;
}

.collage-image {
  width: auto;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Animations */
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-20%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-20%);
  }
  to {
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .collage-item {
    height: 200px;
  }

  .collage-track {
    animation-duration: 60s;
  }
}

@media (max-width: 768px) {
  .highlights {
    padding: 4rem 1rem;
  }

  .section__title {
    margin-bottom: 3rem;
  }

  .collage-wrapper {
    gap: 1.5rem;
  }

  .collage-track {
    gap: 1.5rem;
    animation-duration: 50s;
  }

  .collage-item {
    height: 160px;
  }
}

@media (max-width: 480px) {
  .collage-item {
    height: 120px;
  }

  .collage-track {
    gap: 1rem;
    animation-duration: 40s;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

/* Modal Fade Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }

  .modal-close {
    top: -2.5rem;
    width: 40px;
    height: 40px;
  }

  .modal-image {
    max-height: 85vh;
  }
}
</style>
