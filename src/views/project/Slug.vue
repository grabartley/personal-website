<template>
  <component :is="projectComponent" />
</template>

<script>
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import NotFound from '@/components/NotFound.vue';

const projectComponents = {
  'loot-lock': defineAsyncComponent(() => import('@/views/project/LootLock.vue')),
};

export default {
  name: 'ProjectSlug',
  components: {
    NotFound,
  },
  setup() {
    const route = useRoute();
    const projectComponent = computed(() => {
      return projectComponents[route.params.slug] || NotFound;
    });
    return { projectComponent };
  },
};
</script>
