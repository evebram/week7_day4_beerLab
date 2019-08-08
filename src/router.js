import Vue from 'vue';
import Router from 'vue-router';
import Beer from '@/views/Beer.vue';
import Favourites from '@/views/Favourites.vue';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '',
      name: 'beer',
      component: Beer
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    }
  ]
});

export default router;
