<template>
  <div
    class="carousel"
    role="region"
    aria-label="Projects carousel"
  >
    <div
      ref="track"
      class="carousel__track"
      tabindex="0"
      aria-live="polite"
      @scroll.passive="onScroll"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
      @keydown="onKeyDown"
    >
      <div
        v-for="(_, index) in slideCount"
        :key="index"
        class="carousel__slide"
        role="group"
        :aria-label="`Project ${index + 1} of ${slideCount}`"
        :aria-roledescription="'slide'"
      >
        <slot :name="`slide-${index}`" />
      </div>
    </div>

    <div
      v-if="slideCount > 1"
      class="carousel__controls"
      aria-label="Carousel navigation"
    >
      <button
        class="carousel__arrow carousel__arrow--prev glass"
        :disabled="currentIndex === 0"
        aria-label="Previous project"
        @click="prev"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        class="carousel__dots"
        role="tablist"
        aria-label="Go to slide"
      >
        <button
          v-for="(_, index) in slideCount"
          :key="index"
          class="carousel__dot"
          :class="{ 'carousel__dot--active': currentIndex === index }"
          role="tab"
          :aria-selected="currentIndex === index"
          :aria-label="`Go to project ${index + 1}`"
          @click="goTo(index)"
        />
      </div>

      <button
        class="carousel__arrow carousel__arrow--next glass"
        :disabled="currentIndex === slideCount - 1"
        aria-label="Next project"
        @click="next"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    <div
      class="carousel__sr-announce"
      aria-live="assertive"
      aria-atomic="true"
    >
      {{ srAnnouncement }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'ProjectCarousel',
  props: {
    slideCount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const track = ref(null);
    const currentIndex = ref(0);
    const srAnnouncement = ref('');
    let touchStartX = 0;

    const announce = (index) => {
      srAnnouncement.value = `Showing project ${index + 1} of ${props.slideCount}`;
    };

    const scrollToIndex = (index) => {
      if (!track.value) return;
      const slide = track.value.children[index];
      if (slide) {
        slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
      currentIndex.value = index;
      announce(index);
    };

    const next = () => {
      if (currentIndex.value < props.slideCount - 1) {
        scrollToIndex(currentIndex.value + 1);
      }
    };

    const prev = () => {
      if (currentIndex.value > 0) {
        scrollToIndex(currentIndex.value - 1);
      }
    };

    const goTo = (index) => {
      scrollToIndex(index);
    };

    const onScroll = () => {
      if (!track.value) return;
      const { scrollLeft, offsetWidth } = track.value;
      const index = Math.round(scrollLeft / offsetWidth);
      if (index !== currentIndex.value) {
        currentIndex.value = index;
        announce(index);
      }
    };

    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX;
    };

    const onTouchEnd = (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };

    const isMultiSlide = computed(() => props.slideCount > 1);

    return {
      track,
      currentIndex,
      srAnnouncement,
      isMultiSlide,
      next,
      prev,
      goTo,
      onScroll,
      onTouchStart,
      onTouchEnd,
      onKeyDown,
    };
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
}

.carousel__track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  gap: 0;
  outline: none;
  scrollbar-width: none;
}

.carousel__track::-webkit-scrollbar {
  display: none;
}

.carousel__slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  min-width: 0;
}

.carousel__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.carousel__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  color: var(--accent-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.carousel__arrow:hover:not(:disabled) {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

.carousel__arrow:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.carousel__arrow svg {
  width: 20px;
  height: 20px;
}

.carousel__dots {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.carousel__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border-color);
  border: 1px solid var(--border-color);
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel__dot--active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: scale(1.3);
}

.carousel__dot:hover:not(.carousel__dot--active) {
  background: var(--accent-secondary);
  border-color: var(--accent-secondary);
}

.carousel__sr-announce {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
</style>
