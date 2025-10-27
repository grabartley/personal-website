<template>
  <section
    id="highlights"
    class="life-collage section"
  >
    <div class="life-collage__container">
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
            <!-- Duplicate the images multiple times for seamless infinite scroll -->
            <template
              v-for="duplicateIndex in 3"
              :key="`duplicate-${duplicateIndex}`"
            >
              <div
                v-for="(image, imgIndex) in row"
                :key="`${rowIndex}-${duplicateIndex}-${imgIndex}`"
                class="collage-item glass"
              >
                <img
                  :src="getImagePath(image)"
                  :alt="`Life and career moment ${imgIndex + 1}`"
                  class="collage-image"
                  loading="lazy"
                >
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LifeCollage',
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
        'coolest-projects-1.jpg',
        'dts-1.jpg',
        'dts-2.JPG',
        'dts-3.jpg',
        'digimarcon-1.jpg',
      ],
    };
  },
  computed: {
    collageRows() {
      // Shuffle images randomly
      const shuffled = this.shuffleArray([...this.images]);

      // Distribute evenly across exactly 2 rows
      const midpoint = Math.ceil(shuffled.length / 2);
      return [
        shuffled.slice(0, midpoint),  // First row
        shuffled.slice(midpoint),     // Second row
      ];
    },
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
  },
};
</script>

<style scoped>
.life-collage {
  padding: 6rem 2rem;
  overflow: hidden;
  position: relative;
}

.life-collage__container {
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
  animation: scroll-left 30s linear infinite;
  will-change: transform;
}

.collage-row--reverse .collage-track {
  animation: scroll-right 30s linear infinite;
}

.collage-item {
  flex: 0 0 auto;
  width: 20%;
  height: 20%;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.collage-item:hover {
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
  z-index: 10;
}

.collage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

/* Animations */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-33.333%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .collage-item {
    width: 250px;
    height: 200px;
  }

  .collage-track {
    animation-duration: 25s;
  }
}

@media (max-width: 768px) {
  .life-collage {
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
    animation-duration: 20s;
  }

  .collage-item {
    width: 200px;
    height: 160px;
  }
}

@media (max-width: 480px) {
  .collage-item {
    width: 150px;
    height: 120px;
  }

  .collage-track {
    gap: 1rem;
  }
}
</style>
