import Vue from 'vue';
import Router from 'vue-router';
import Bio from '@/components/Bio';
import Academics from '@/components/Academics';
import Hobbies from '@/components/Hobbies';
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
      path: '/academics',
      name: 'Academics',
      component: Academics,
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: Hobbies,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
