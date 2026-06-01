import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProjectSlug from '@/views/project/Slug.vue';
import NotFound from '@/components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/project/:slug',
      name: 'Project',
      component: ProjectSlug,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
