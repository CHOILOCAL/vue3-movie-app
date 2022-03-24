import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

export default createRouter({
    // Hash(https://google.com/#/search), History
    history: '',
    // pages
    // https://google.com
    routes: [
        {
            path: '/',
            component: Home
          },
          {
            path: '/about',
            component: About
          },
    ]
})