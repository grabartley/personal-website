import Vue from 'vue';
import Router from 'vue-router';
import Bio from '@/components/Bio';
import Work from '@/components/Work';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Bio',
      component: Bio,
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
