import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Shop from '../views/Shop.vue';
import Contact from '../views/Contact.vue';


const routes = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/contact',
        component: Contact,
    },

    {
        path: '/about',
        component: About,
    },

    {
        path: '/services',
        component: Services,
    },

    {
        path: '/shop',
        component: Shop,
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router