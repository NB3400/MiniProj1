import { createRouter, createWebHashHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import MyWork from '../views/Work.vue'
import MyHobbies from '../views/Hobbies.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutMe
  },
  {
    path: '/my-work',
    name: 'work',
    component: MyWork
  },
  {
    path: '/my-hobbies',
    name: 'hobbies',
    component: MyHobbies
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router