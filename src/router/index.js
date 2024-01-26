import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import ContactHome from "../views/ContactHome.vue";
import Projects from "../views/projects.vue";

const routes = [
  {
    path:'/',
    name:'HomePage',
    component: HomePage
  },
  {
    path:'/ContactHome',
    name:'ContactHome',
    component: ContactHome
  },
  {
    path:'/Projects',
    name:'Projects',
    component: Projects
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
