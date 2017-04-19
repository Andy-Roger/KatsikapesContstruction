import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ProjectGallery from '../components/ProjectGallery.vue'
import Services from '../components/Services.vue'
import About from '../components/About.vue'

export default new Router ({
  mode: 'history',
  routes: [{
    path: '/projectgallery',
    component: ProjectGallery
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/about',
    component: About
  }]
})
