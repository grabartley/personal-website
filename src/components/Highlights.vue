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
            <!-- Duplicate the images 2 times for seamless infinite scroll -->
            <template
              v-for="duplicateIndex in 2"
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
                  :alt="`Highlight ${imgIndex + 1}`"
                  class="collage-image"
                >
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

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
            :alt="selectedImage?.filename || 'Highlight image'"
            class="modal-image"
          >
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
const imageModules = import.meta.glob('../assets/highlights/*', { eager: true });
const images = Object.entries(imageModules).map(([path, module]) => ({
  filename: path.split('/').pop(),
  url: module.default,
}));

export default {
  name: 'Highlights',
  data() {
    return {
      images,
      selectedImage: null,
      isModalOpen: false,
      imagePreloadPromises: [],
      resizeRaf: null,
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
  created() {
    if (typeof window !== 'undefined') {
      this.preloadImages();
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('resize', this.handleResize);

    this.$nextTick(() => {
      this.waitForImages().then(() => {
        this.updateTrackSetWidths();
      });
    });
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.handleResize);
    if (this.resizeRaf) {
      cancelAnimationFrame(this.resizeRaf);
      this.resizeRaf = null;
    }
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
    getImagePath(image) {
      return image?.url || '';
    },
    openModal(image) {
      this.selectedImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = null;
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.isModalOpen) {
        this.closeModal();
      }
    },
    preloadImages() {
      if (typeof window === 'undefined' || this.imagePreloadPromises.length) {
        return;
      }

      this.imagePreloadPromises = this.images.map((image) => new Promise((resolve) => {
        const img = new Image();
        const onDone = () => {
          img.removeEventListener('load', onDone);
          img.removeEventListener('error', onDone);
          resolve();
        };
        img.addEventListener('load', onDone);
        img.addEventListener('error', onDone);
        img.src = image.url;
      }));
    },
    waitForImages() {
      const imageEls = Array.from(this.$el.querySelectorAll('.collage-image'));
      if (imageEls.length === 0) {
        return Promise.resolve();
      }

      if (!this.imagePreloadPromises.length) {
        this.preloadImages();
      }

      const loadPromises = imageEls.map((img) => {
        if (img.complete) {
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          const onDone = () => {
            img.removeEventListener('load', onDone);
            img.removeEventListener('error', onDone);
            resolve();
          };
          img.addEventListener('load', onDone);
          img.addEventListener('error', onDone);
        });
      });

      const preloadPromises = this.imagePreloadPromises || [];
      return Promise.all([...preloadPromises, ...loadPromises]);
    },
    updateTrackSetWidths() {
      const tracks = this.$el.querySelectorAll('.collage-track');
      tracks.forEach((track) => {
        const setWidth = this.measureSetWidth(track);
        if (setWidth > 0) {
          track.style.setProperty('--set-width', `${setWidth}px`);
        }
      });
    },
    measureSetWidth(track) {
      const items = Array.from(track.children);
      const itemsPerSet = Math.floor(items.length / 2);
      if (!itemsPerSet) {
        return 0;
      }

      let totalWidth = 0;
      for (let i = 0; i < itemsPerSet; i++) {
        const item = items[i];
        const rect = item.getBoundingClientRect();
        const styles = window.getComputedStyle(item);
        const marginLeft = parseFloat(styles.marginLeft) || 0;
        const marginRight = parseFloat(styles.marginRight) || 0;
        totalWidth += rect.width + marginLeft + marginRight;
      }
      return totalWidth;
    },
    handleResize() {
      if (this.resizeRaf) {
        cancelAnimationFrame(this.resizeRaf);
      }
      this.resizeRaf = requestAnimationFrame(() => {
        this.updateTrackSetWidths();
        this.resizeRaf = null;
      });
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
  --set-width: 50%;
  --animation-duration: 30s;
  animation: scroll-left var(--animation-duration) linear infinite;
  will-change: transform;
}

.collage-row--reverse .collage-track {
  animation-name: scroll-right;
}

.collage-item {
  flex: 0 0 auto;
  height: 400px;
  margin-right: 2rem;
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
    transform: translateX(calc(-1 * var(--set-width)));
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(calc(-1 * var(--set-width)));
  }
  to {
    transform: translateX(0);
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
  top: -3.5rem;
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
</style>
