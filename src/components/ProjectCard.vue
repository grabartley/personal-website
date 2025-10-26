<template>
  <div
    class="project-card glass"
    @click="$emit('open-modal', project)"
  >
    <div class="project-card__image-container">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="project-card__image"
      >
    </div>
    <div class="project-card__content">
      <h3 class="project-card__title">
        {{ project.title }}
      </h3>
      <p class="project-card__description">
        {{ project.description }}
      </p>
      <div class="project-card__tags">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="project-card__tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="project-card__overlay">
      <span class="project-card__view">View Details →</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  emits: ['open-modal'],
};
</script>

<style scoped>
.project-card {
  position: relative;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
  animation-fill-mode: both;
  box-shadow: var(--shadow-md);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.project-card:hover .project-card__image {
  transform: scale(1.1);
}

.project-card__content {
  padding: 1.5rem;
}

.project-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.project-card__description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-card__tag {
  padding: 0.375rem 0.75rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(99, 102, 241, 0.9);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card__view {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}
</style>

