import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProjectCaseStudy from '@/views/ProjectCaseStudy.vue';
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
      path: '/projects/:slug',
      name: 'ProjectCaseStudy',
      component: ProjectCaseStudy,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
