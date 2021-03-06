import Vue from 'vue';
import Router from 'vue-router';
import AboutMe from '@/components/AboutMe';
import Work from '@/components/Work';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About Me',
      component: AboutMe,
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
