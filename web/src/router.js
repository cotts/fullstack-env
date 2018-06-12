import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import List from './components/List';
import Diaper from './components/Diaper';
import Shopping from './components/Shopping';
import Product from './components/Product';
import Delete from './components/Delete';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/diaper',
      name: 'New Diaper',
      component: Diaper,
    },
    {
      path: '/diaper/:id',
      name: 'Edit Diaper',
      component: Diaper,
    },
    {
      path: '/shopping',
      name: 'Shopping Diapers',
      component: Shopping,
    },
    {
      path: '/product/:id',
      name: 'Product Buy',
      component: Product,
    },
    {
      path: '/delete',
      name: 'Delete Diaper',
      component: Delete,
    },
  ],
});

export default router;
