import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import ContactUs from '../views/ContactUs.vue';
import About from '../views/AboutPage.vue';
import EnrollNow from '@/views/EnrollNow.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/contact-us', component: ContactUs },
  { path: '/about', component: About },
  { path: '/enroll', component: EnrollNow },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
