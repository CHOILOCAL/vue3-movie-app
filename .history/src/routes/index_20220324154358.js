import { createRouter } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
    // Hash(https://google.com/#/search), History
    history: '',
    // pages
    // https://google.com
    routes: [
        {
            path: '/', // main page
            component: Home,
        },
        {
            path: '/about',
            component: About,
        }
    ]
})